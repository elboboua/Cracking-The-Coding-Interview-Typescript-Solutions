import { isPermutation } from ".";

const inputs = [
    {
        strings: ["hello", "elloh"],
        permutation: true,
    },
    {
        strings: ["hello", "no"],
        permutation: false,
    },
    {
        strings: ["", ""],
        permutation: true,
    },
    {
        strings: ["jamestag99 nnjnjasd", "jamestag99 nnjnjasd"],
        permutation: true,
    },
];

describe("isPermutation", () => {
    it("checks to see if a string is a permutations of another", () => {
        for (const { strings, permutation } of inputs) {
            expect(isPermutation(strings[0], strings[1])).toBe(permutation);
        }
    });
});
