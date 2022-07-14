import { SplitCommand } from "./types";

export const splitCommand: SplitCommand = (command) => command.split(/[\s,]+/);