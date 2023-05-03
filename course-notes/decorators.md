A function that can be used to change/modify with different properties or methods inside of a class.
In ts you will only see decorators around classes.

_ts decorators are very different to js ones._


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

}

function testDecorator(target: any, key: string): void {
    console.log('Target:', target);
    console.log('Key:', key);
}
```

running the above file would return...

```ts
Target: Boat { formattedColor: [Getter], pilot: [Function] }
Key: pilot
```

The first argument for the decorator, is the prototype (in this case, that will be the class Boat) of the object.
The second argument is the key, method or accessor of the property on the object (we applied it to the pilot method).