class Cat {
  constructor(name) {
    this.name = name;
  }

  mew(callback) {
    console.log(this.name + ' say mew...');
    callback();
  }
}
