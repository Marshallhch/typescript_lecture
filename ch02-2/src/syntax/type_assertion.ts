// type assertion(타입 단언) : 자바스크립트의 타입 변환 구문과 구분하기 위해 사용하는 용어
// (<type>object), (object as type) 두 가지 형태로 사용할 수 있다.

import INameable from "./INameable";

let obj: object = { name: "jack" };

let name1 = (<INameable>obj).name;
let name2 = (obj as INameable).name;

console.log(name1, name2);
