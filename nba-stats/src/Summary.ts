import { WinsAnalysis } from './analysers/WinsAnalysis';
import { GameData } from './GameData';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';

export interface Analyser {
  run(games: GameData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string, filename: string): Summary {
    return new Summary(
      new WinsAnalysis(team),
      new HtmlReport(`report-${team.toLowerCase()}.html`)
    );
  }

  constructor(public analyser: Analyser, public outputTarget: OutputTarget) {}

  buildAndPrintReport(games: GameData[]): void {
    const output = this.analyser.run(games);
    this.outputTarget.print(output);
  }
}
