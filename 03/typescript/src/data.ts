// const enum DataType {
//   INT,
//   VARCHAR,
//   PRIMARY_KEY,
// }

export class BaseObject {
}

export class Owl extends BaseObject {
  id?: number;
  name?: string;
  age?: number;

  constructor(id: number, name: string, age: number) {
    super();
    this.id = id;
    this.name = name;
    this.age = age;
  }
}
