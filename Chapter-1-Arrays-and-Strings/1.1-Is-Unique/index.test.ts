import { isUniqueSet, isUniqueHash } from ".";

const inputs = {
    hello: false,
    helLo: true,
    maybe: true,
    a: true,
    "": true,
    abcdefghijklmnopqrstuvwxyz: true,
    weeee: false,
};

describe("isUniqueSet", () => {
    it("returns the appropriate boolean based on the text input", () => {
        for (const [key, value] of Object.entries(inputs)) {
            expect(isUniqueSet(key)).toBe(value);
        }
    });
});

describe("isUniqueHash", () => {
    it("returns the appropriate boolean based on the text input", () => {
        for (const [key, value] of Object.entries(inputs)) {
            expect(isUniqueHash(key)).toBe(value);
        }
    });
});
