import { splitCommand } from "../../src/utils";

it("splitCommand should receive a string and return an array list", () => {
    
    const command = 'place, 0, 0, south';
    const splitedCommand = splitCommand(command);

    const x = typeof splitedCommand == typeof [];

    expect(x).toBe(true);
});