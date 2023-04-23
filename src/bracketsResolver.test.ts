import {bracketsResolver} from "./bracketsResolver";

describe("brackets resolver test", () => {
    it("2 + (2 * 2)", () => {
        expect(bracketsResolver('2 + (2 * 2)')).toBe('2 + 4');
    });
    it("2 + (2 * (3 - 1))", () => {
        expect(bracketsResolver('2 + (2 * (3 - 1))')).toBe('2 + 4');
    });
});
