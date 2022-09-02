import { GameReader } from './GameReader';
// import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analysers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

//? Not using the static method
// const csvFileReader = new CsvFileReader('basketball.csv');
// const gameReader = new GameReader(csvFileReader);

//? Is now using the static method - no need for line10
const gameReader = GameReader.fromCsv('basketball.csv');
gameReader.load();

const summary = new Summary(new WinsAnalysis('Celtics'), new ConsoleReport());
summary.buildAndPrintReport(gameReader.games);

//? Non-static way to do it
const summary2 = new Summary(
  new WinsAnalysis('Heat'),
  new HtmlReport('Heat-report.html')
);
summary2.buildAndPrintReport(gameReader.games);

//? Using static methods
const htmlSummary = Summary.winsAnalysisWithHtmlReport('Wizards', 'wizards');
htmlSummary.buildAndPrintReport(gameReader.games);

const htmlSummary2 = Summary.winsAnalysisWithHtmlReport('Magic', 'magic');
htmlSummary2.buildAndPrintReport(gameReader.games);
