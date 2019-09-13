const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('event', function(data) {
  console.log('data: ', data);
  console.log('this: ', this);
});

eventEmitter.emit('event', {name: 'ba ba ba'});



function Person (name, age) {
  this.name = name;
  this.age = age
};

Person.prototype.incAge = function() {
  return this.age++;
};

const joe = new Person('joe', 50);
joe.incAge();
console.log(joe.age);

const person = {
  name: 'joe',
  age: 20,
  sayName() {
    console.log(`my name is ${this.name}`);
  }
};

const dude = Object.create(person, {name: 'ha ha ha'});
dude.sayName();

const func = (name, age) => {
  const obj = Object.create({});
  obj.name = name;
  obj.age = age;
  return obj
};

const person = func('moby', 18);
console.log(person);
