```ts
class Boat = {
  color: string = 'red';

  getFormattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @testDecorator
  pilot(): void {
    console.log('swish');
  }

  function testDecorator(target: any, key: string): void {
    console.log('Target:', target);
    console.log('Key:', key);
  }
}
```
