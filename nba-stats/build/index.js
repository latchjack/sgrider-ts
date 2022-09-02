"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GameReader_1 = require("./GameReader");
// import { CsvFileReader } from './CsvFileReader';
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
const WinsAnalysis_1 = require("./analysers/WinsAnalysis");
const Summary_1 = require("./Summary");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
//? Not using the static method
// const csvFileReader = new CsvFileReader('basketball.csv');
// const gameReader = new GameReader(csvFileReader);
//? Is now using the static method - no need for line10
const gameReader = GameReader_1.GameReader.fromCsv('basketball.csv');
gameReader.load();
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Celtics'), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(gameReader.games);
//? Non-static way to do it
const summary2 = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Heat'), new HtmlReport_1.HtmlReport('Heat-report.html'));
summary2.buildAndPrintReport(gameReader.games);
//? Using static methods
const htmlSummary = Summary_1.Summary.winsAnalysisWithHtmlReport('Wizards', 'wizards');
htmlSummary.buildAndPrintReport(gameReader.games);
const htmlSummary2 = Summary_1.Summary.winsAnalysisWithHtmlReport('Magic', 'magic');
htmlSummary2.buildAndPrintReport(gameReader.games);
