/*
To satisfy the Sortable interface this class needs to have
a length, compare and swap methods.
Since the string could have uppercase and lowercase letters,
we convert it to lowercase. 
Upper and lowercase letters have a different ascii values,
which means that a 'X' is not greater than an 'a' and can
mess with our sorting algo.
Also as strings are immutable we split the string into an
array. Then we use the compare and swap functions to 
compare the letters against eachother and swap them around.
We then put the array of letters back together to return 
the string.
*/

export class CharactersCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }
  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');
    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;
    this.data = characters.join('');
  }
}
