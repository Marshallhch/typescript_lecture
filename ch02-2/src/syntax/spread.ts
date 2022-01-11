// 전개 연산자는 객체의 속성을 모도 '전개'해 새로운 객체로 만들어 준다.
let part1 = { name: "jane" },
  part2 = { age: 22 },
  part3 = { city: "seoul", contry: "kr" };
let merged = { ...part1, ...part2, ...part3 };

console.log(merged);
