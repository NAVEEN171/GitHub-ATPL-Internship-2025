class Person {
  public name: string;
  private age: number;
  protected gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  public getAge(): number {
    return this.age;
  }
}

class student extends Person {
  constructor(name: string, age: number, gender: string) {
    super(name, age, gender);
  }
  getGender(): string {
    return this.gender;
  }
}

let obj = new student("naveen", 21, "M");
console.log(obj.getAge());
console.log(obj.getGender());
