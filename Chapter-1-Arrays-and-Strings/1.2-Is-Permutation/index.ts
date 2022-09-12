export function isPermutation(a: string, b: string): boolean {
    if (a.length != b.length) return false;

    let bArray = b.split("");
    for (const char of a) {
        let index = b.indexOf(char);
        if (index == -1) {
            return false;
        } else {
            bArray = bArray.splice(index, 1);
        }
    }
    return bArray.length === 0;
}
