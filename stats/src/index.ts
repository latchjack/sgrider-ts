// import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './inheritance/MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

// Create an object that satisfies the 'DataReader' interface
const cvsFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something to satisfy the DataReader interface
const matchReader = new MatchReader(cvsFileReader);
matchReader.load();

// const dateOfFirstMatch = reader.data[0][0];

// console.log(reader.data);
// console.log('dateOfFirstMatch:', dateOfFirstMatch);

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} times`);
