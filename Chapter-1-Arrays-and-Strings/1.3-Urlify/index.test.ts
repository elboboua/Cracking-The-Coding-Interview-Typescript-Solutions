import * as urlifySolutions from ".";

const inputs = {
    "example 1": "example%201",
    "": "",
    nospace: "nospace",
};

for (const [name, urlify] of Object.entries(urlifySolutions)) {
    describe(name, () => {
        it("converts text to url encoding", () => {
            for (const [key, value] of Object.entries(inputs)) {
                expect(urlify(key)).toBe(value);
            }
        });
    });
}
