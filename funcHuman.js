function Human (name, age) {
  this.name = name;
  this.age = age;

  this.introduce = function () {
    console.log(`My name is ${this.name}. My age is ${this.age}.`);
  };
  this.work = function () {
    console.log(`Working hard!`);
  };
}

function Coder (name, age, language) {
  Human.apply(this, arguments);

  this.language = language;
  
  let tasksDone = 0;
  
  let parentIntroduce = this.introduce;
  this.introduce = function () {
    parentIntroduce.call(this);
    console.log(`I know ${this.language}`);
  };
  
  this.work = function (tasks) {
    if (!tasks) {
      console.log(`${tasksDone} task(s) complited`);
      return tasksDone;
    };

    console.log(`Coding via ${this.language}`);
    tasksDone += tasks;
  };
}
