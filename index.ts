// Define a shape for our data using an Interface
interface User {
  name: string;
  age: number;
}

// Create a function that requires the User type
function greetUser(user: User): string {
  return `Hello, ${user.name}! You are ${user.age} years old.`;
}

// Create a valid user object
const myUser: User = {
  name: "Alice",
  age: 28
};

// Execute the function and print to the console
console.log(greetUser(myUser));