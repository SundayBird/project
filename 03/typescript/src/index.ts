import { select, insert, delete_, where } from "./queryGenerator";
import { Owl } from "./data";

console.log(select(new Owl(1, "Bubu bubu", 1100)));
console.log(select(new Owl(1, "Bubu bubu", 1100), ["id", "name"]));
console.log(insert(new Owl(1, "Bubu bubu", 1100), {
  id: 3,
  name: "New Bubu bubu",
}));

console.log(where(delete_(new Owl(1, "Bubu bubu", 1100)), {
  id: 3,
}));

console.log(where(select(new Owl(1, "Bubu bubu", 1100)), {
  age: 100,
}));

console.log(where(select(new Owl(1, "Bubu bubu", 1100)), {
  name: "Bubu bubu",
}));