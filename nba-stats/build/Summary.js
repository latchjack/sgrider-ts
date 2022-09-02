"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
class Summary {
    constructor(analyser, outputTarget) {
        this.analyser = analyser;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(games) {
        const output = this.analyser.run(games);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
