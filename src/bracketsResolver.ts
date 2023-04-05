import {getAllIndexes} from "./helpers";
import {parser} from "./parser";
import {firstPrioritiesCalc, secondPrioritiesCalc} from "./engine";

export const bracketsResolver = (line: string): string => {
    const bracketsStack = getAllIndexes(line, '(');
    if (bracketsStack.length) {
        bracketsStack.reverse().map(index => {
            const closeBracketIndex = line.indexOf(')');
            const subStrForReplace = line.substring(index, closeBracketIndex + 1);
            const subStrForCalc = line.substring(index + 1, closeBracketIndex);
            const subStack = parser(subStrForCalc);

            if (subStack === null) {
                throw new TypeError("Unexpected string");
            }

            const firstPrioritiesRes = firstPrioritiesCalc(subStack);

            if (firstPrioritiesRes.length === 1) {
                line = line.replace(subStrForReplace, firstPrioritiesRes[0].toString());
            }

            line = line.replace(subStrForReplace, secondPrioritiesCalc(firstPrioritiesRes).toString());
        })
    }
    console.log(line)
    return line;
}
