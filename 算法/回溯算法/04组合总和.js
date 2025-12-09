var combinationSum = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    const res = [];
    function backtrack(data) {
        if (data.reduce((a, b) => a + b, 0) === target) {
            res.push(data);
            return;
        }
        for (let i = 0; i < candidates.length; i++) {
            data.push(candidates[i]);
            if (data.reduce((a, b) => a + b, 0) > target) {
                data.pop();
                break;
            }
            backtrack(data);
            data.pop();

        }

    }

    backtrack([]);
    return res;
}