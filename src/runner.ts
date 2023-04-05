import { parser } from "./parser";

import { firstPrioritiesCalc, secondPrioritiesCalc } from "./engine";
import {bracketsResolver} from "./bracketsResolver";

export const runner = (line: string): number => {
    const stack = parser(bracketsResolver(line));

    if (stack === null) {
        throw new TypeError("Unexpected string");
    }

    const firstPrioritiesRes = firstPrioritiesCalc(stack);

    if (firstPrioritiesRes.length === 1) {
        return Number(firstPrioritiesRes[0]);
    }

    return secondPrioritiesCalc(firstPrioritiesRes);
};
