const person = {
    name: 'Vijay',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA'
    },
    hobbies: ['reading', 'hiking', 'traveling']
  };
  
  const personJSON = JSON.stringify(person);
console.log(personJSON); 
// for loop
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }

//   for in loop

for (let key in person) {
    if (person.hasOwnProperty(key)) {
      console.log(`${key}: ${person[key]}`);
    }
  }

//   for of loop
for (let hobby of person.hobbies) {
    console.log(hobby);
  }
// for each loop
person.hobbies.forEach(function(hobby) {
    console.log(hobby);
  });
  
  
