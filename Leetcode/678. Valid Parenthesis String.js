/**
 * @param {string} s
 * @return {boolean}
 */
let checkValidString = S => {
    let N = S.length;
    let go = (i = 0, open = 0) => {
        if (i == N)
            return open == 0;
        if (open < 0)
            return false;
        if (S[i] == '(') return go(i + 1, open + 1);
        if (S[i] == ')') return go(i + 1, open - 1);
        return go(i + 1, open - 1) || go(i + 1, open + 1) || go(i + 1, open); // '*' --> '(' || ')' || ''
    };
    return go();
};