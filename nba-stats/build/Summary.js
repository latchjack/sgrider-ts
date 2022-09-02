"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalysis_1 = require("./analysers/WinsAnalysis");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
class Summary {
    constructor(analyser, outputTarget) {
        this.analyser = analyser;
        this.outputTarget = outputTarget;
    }
    static winsAnalysisWithHtmlReport(team, filename) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport(`report-${team.toLowerCase()}.html`));
    }
    buildAndPrintReport(games) {
        const output = this.analyser.run(games);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
