var tasksStorage: any = [];

class Storage<T> {
  tasksStorage: T;
  addItem<T>(data: T) {
    tasksStorage.push(data);
  }
  getItem(index: number) {
    if (index < tasksStorage.storage && index > -1) {
      return tasksStorage[index];
    }
    return null;
  }
  showItems() {
    console.log(tasksStorage);
  }
}

var generic1 = new Storage();
generic1.addItem("1234");
generic1.addItem(123);
let Item = generic1.getItem(0);
generic1.showItems();
