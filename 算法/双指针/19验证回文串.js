var isPalindrome = function (s) {
    const arr = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i]) {
            if (/^[a-zA-Z0-9]$/.test(s[i])) {
                arr.push(s[i].toLocaleLowerCase())
            }
        }
    }
    if (arr.length <= 1) {
        return true;
    }
    let i = 0;
    let j = arr.length - 1;
    let flag = true;
    while (i < j) {
        console.log(arr[i], arr[j])
        if (arr[i] !== arr[j]) {
            flag = false;
        }
        i++;
        j--;
    }
    return flag
};