var lengthOfLastWord = function (s) {
    let length = 0;
    let foundWord = false;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            length++;
            foundWord = true;
        } else if (foundWord) {
            break;
        }
    }
    console.log(length)
    return length;
};
lengthOfLastWord("luffy is still joyboy   ")