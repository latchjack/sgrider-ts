import { GameData } from './GameData';

export interface Analyser {
  run(games: GameData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyser: Analyser, public outputTarget: OutputTarget) {}

  buildAndPrintReport(games: GameData[]): void {
    const output = this.analyser.run(games);
    this.outputTarget.print(output);
  }
}
