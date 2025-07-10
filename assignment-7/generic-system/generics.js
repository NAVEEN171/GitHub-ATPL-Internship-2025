var tasksStorage = [];
var Storage = /** @class */ (function () {
    function Storage() {
    }
    Storage.prototype.addItem = function (data) {
        tasksStorage.push(data);
    };
    Storage.prototype.getItem = function (index) {
        if (index < tasksStorage.storage && index > -1) {
            return tasksStorage[index];
        }
        return null;
    };
    Storage.prototype.showItems = function () {
        console.log(tasksStorage);
    };
    return Storage;
}());
var generic1 = new Storage();
generic1.addItem("1234");
generic1.addItem(123);
var Item = generic1.getItem(1);
generic1.showItems();
