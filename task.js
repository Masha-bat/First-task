
let inventory = [];

function addProduct(obj) {
    if (!(inventory.find(item => item.id === obj.id))) {
        return inventory.push(obj);
    } 
}

function updateProduct(id, obj) {
    let index = inventory.find(item => item.id == id);
    if (index) {
        return Object.assign(index, obj);
    }
}

function removeProduct(id) {
    let index = inventory.findIndex(item => item.id == id);
    if (index !== -1) {
        inventory.splice(index, 1);
    }
    return inventory;
}

function getTotalValue() {
    let answer = inventory.reduce((prev, item) => prev + (+item.price * +item.quantity), 0);
    return answer;
}

function cloneInventory() {
   return structuredClone(inventory);
}

// Пример работы с функциями
addProduct({ id: 1, name: 'Laptop', price: 1000, quantity: 5 });
addProduct({ id: 2, name: 'Phone', price: 500, quantity: 10 });

updateProduct(1, { price: 900 });

removeProduct(2);

console.log(getTotalValue()); // Ожидаемый вывод: 4500
const clonedInventory = cloneInventory();
