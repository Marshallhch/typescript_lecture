class Person1 {
  name: string;
  age?: number;
}

let jack1: Person1 = new Person1();
jack1.name = "jack";
jack1.age = 32;

// console.log(jack1);

// 생성자 : 타입스크립트 클래스는 contructor라는 메서드를 포함하는데, 이를 생성자라 한다.

class Person2 {
  constructor(public name: string, public age?: number) {}
}

let jack2: Person2 = new Person2("jack", 32);

// console.log(jack2);

// interface

interface Iperson4 {
  name: string;
  age?: number;
}

class Person4 implements Iperson4 {
  constructor(public name: string, public age?: number) {}
}

let jack4: Iperson4 = new Person4("jack", 32);

// console.log(jack4);

// 추상클래스 : 자신의 속성이나 메서드 앞에 abstract를 붙여 나를 상속하는 다른 클래스에서 이 속성이나 메서드를 구현하게 한다.
// 클래스 상속 : 객체지향 언어는 부모 클래스를 상속받는 상속 클래스를 만들 수 있는데, 타입스크립트는 extends 키워드를 사용하여 상속 클래스를 만든다.

abstract class AbstractPerson5 {
  abstract name: string;
  constructor(public age?: number) {}
}

// 타입스크립트에서는 부모 클래스의 생성자를 super 키워드로 호출한다.
class Person5 extends AbstractPerson5 {
  constructor(public name: string, age?: number) {
    super(age);
  }
}

let jack5: Person5 = new Person5("jack", 43);

console.log(jack5);
