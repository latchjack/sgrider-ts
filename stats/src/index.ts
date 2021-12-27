import fs from 'fs';

/*
We're going to read through the .csv file, so we use the fs library.
We then tell fs to use the utf-8 encoding. This is because readFileSync
can read any type of file, from images, exe, json file etc. By adding
on the encoding we're telling readFileSync about what type of content
we expect to find inside the file. So we're telling it that expect to
find text content encoding with utf-8 . If we didn't add this in we
would get what is called a 'Buffer' returned, with the raw data of the
file.

In this case the buffer would look like...
<Buffer 31 30 2f 30 38 2f 32 30 31 38 2c 4d 61 6e 20 55 6e 69 74 65 64
 2c 4c 65 69 63 65 73 74 65 72 2c 32 2c 31 2c 48 2c 41 20 4d 61 72 72 
 69 6e 65 72 0a 31 ... 14637 more bytes>

This will return all of the csv data in one long string.
So we will need to parse the data it into a more useable data structure.

The end product will be an array of arrays, with each inner array
representing a match.
*/

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

// console.log(matches);

/*
We can find out how many times Man United won by iterating over the
arrays,
*/

const MatchResult = {
  HomeWin: 'H',
  AwayWin: 'A',
  Draw: 'D',
};

let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} times`);
