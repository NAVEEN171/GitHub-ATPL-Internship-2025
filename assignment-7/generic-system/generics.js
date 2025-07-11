var storage = /** @class */ (function () {
    function storage() {
        this.items = [];
    }
    storage.prototype.addItem = function (data) {
        this.items.push(data);
    };
    storage.prototype.getItem = function (index) {
        if (index < this.items.length && index > -1) {
            return this.items[index];
        }
        return null;
    };
    storage.prototype.clearItems = function () {
        this.items = [];
    };
    storage.prototype.updateItem = function (index, data) {
        if (index > -1 && index < this.items.length) {
            this.items[index] = data;
        }
    };
    storage.prototype.showItems = function () {
        console.log(this.items);
    };
    return storage;
}());
var numStorage = new storage();
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
var personStorage = new storage();
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
