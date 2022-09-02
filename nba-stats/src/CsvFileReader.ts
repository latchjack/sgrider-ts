import fs from 'fs';
import { dateStringToDate } from './utils';
import { GameResult } from './GameResult';

type GameData = [Date, string, string, number, number, GameResult];

export class CsvFileReader {
  data: GameData[] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map((row: string[]): GameData => {
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
