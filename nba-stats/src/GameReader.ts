import { dateStringToDate } from './utils';
import { GameResult } from './GameResult';
import { GameData } from './GameData';

interface DataReader {
  read(): void;
  data: string[][];
}

export class GameReader {
  games: GameData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.games = this.reader.data.map((row: string[]): GameData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as GameResult
      ];
    });
  }
}
