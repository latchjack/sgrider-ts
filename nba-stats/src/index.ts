import { GameReader } from './GameReader';
import { CsvFileReader } from './CsvFileReader';
import { GameResult } from './GameResult';

const csvFileReader = new CsvFileReader('basketball.csv');
const gameReader = new GameReader(csvFileReader);
gameReader.load();
