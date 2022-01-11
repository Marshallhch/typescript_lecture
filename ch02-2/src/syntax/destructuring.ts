import { IPerson } from "./person_com";

let jack: IPerson = { name: "jack", age: 30 };
let { name, age } = jack;
console.log(name, age);
