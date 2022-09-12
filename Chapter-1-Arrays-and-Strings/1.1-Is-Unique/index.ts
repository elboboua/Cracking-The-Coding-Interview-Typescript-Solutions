// Using js available data structures
export function isUniqueSet(str: string): boolean {
    return new Set(str).size == str.length;
}

// Using an hashmap
export function isUniqueHash(str: string): boolean {
    let existingNumbers: { [key: string]: boolean } = {};
    for (const char of str) {
        if (existingNumbers[char]) {
            return false;
        } else {
            existingNumbers[char] = true;
        }
    }
    return true;
}
