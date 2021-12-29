"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
/*
Takes the date string, and first converts it to an array,
by splitting it at each forward-slash in the date.
It then maps over the date and parses it into a number
using parseInt.
We then take the array of numbers and use them as the
args for the new Date which we return.
*/
const dateStringToDate = (dateString) => {
    // 28/10/2018
    const dateParts = dateString.split('/').map((value) => {
        return parseInt(value);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;
