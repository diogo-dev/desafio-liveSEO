interface User {
  id: number;
  name: string;
  age: number;
}

const users = [ 
  { id: 1, name: "Ana", age: 25 }, 
  { id: 2, name: "Pedro", age: 30 }, 
  { id: 3, name: "Maria", age: 22 } 
];

const filterNamesOver23 = (users: User[]): string[] => {
  return users
    .filter(user => user.age > 23)
    .map(user => user.name);
}

console.log(filterNamesOver23(users));