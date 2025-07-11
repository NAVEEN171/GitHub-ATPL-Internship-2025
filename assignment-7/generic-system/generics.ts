class storage<T> {
  items: T[] = [];
  addItem(data: T) {
    this.items.push(data);
  }
  getItem(index: number): T | null {
    if (index < this.items.length && index > -1) {
      return this.items[index];
    }
    return null;
  }
  clearItems() {
    this.items = [];
  }
  updateItem(index: number, data: T) {
    if (index > -1 && index < this.items.length) {
      this.items[index] = data;
    }
  }
  showItems() {
    console.log(this.items);
  }
}

let numStorage = new storage<number>();
console.log("Number Storage");
numStorage.showItems();
numStorage.addItem(6);
numStorage.addItem(5);
numStorage.addItem(4);
numStorage.showItems();
console.log(numStorage.getItem(1));
numStorage.updateItem(1, 100);
numStorage.showItems();
numStorage.clearItems();
numStorage.showItems();

interface Person {
  name: string;
  age: number;
}

let personStorage = new storage<Person>();
console.log("Person Storage");
personStorage.showItems();
personStorage.addItem({ name: "Naveen", age: 30 });
personStorage.addItem({ name: "Dileep", age: 25 });
personStorage.showItems();
console.log(personStorage.getItem(0));
personStorage.updateItem(0, { name: "Mahesh", age: 31 });
personStorage.showItems();
personStorage.clearItems();
personStorage.showItems();
