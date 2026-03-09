const itemImgs = {
    "espada": "https://img.icons8.com/color/48/000000/sword.png",
    "poção": "https://img.icons8.com/color/48/000000/potion.png",
    "escudo": "https://img.icons8.com/color/48/000000/shield.png",
    "anel": "https://img.icons8.com/color/48/000000/diamond-ring.png",
    "livro": "https://img.icons8.com/color/48/000000/book.png"
}

let inventory = [];
const maxSlots = 10;
function addItem() {
    let itemName = document.getElementById("item-input").value.toLowerCase();
    if (!itemImgs[itemName]) {
        document.getElementById("message").innerText = "ITEM NÃO ENCONTRADO";
        return;
    }
    if (inventory.length >= maxSlots) {
        document.getElementById("message").innerText = "INVENTÁRIO CHEIO";
        return;
    }
    inventory.push(itemName);
    updateInventory();
    document.getElementById("item-input").value = "";
    document.getElementById("message").innerText = "";
}

function itemRemove(index) {
    inventory.splice(index,1);
    updateInventory();
}

function updateInventory() {
    let container = document.getElementById("inventory");
    container.innerHTML = "";
    inventory.forEach((item,index)=>{
        let slot = document.createElement("div");
        slot.className = "slot";
        slot.innerHTML = `<img src='${itemImgs[item]}' alt='${item}'> <button class='remove' onclick='itemRemove(${index})'>X</button>`;
        container.appendChild(slot);
    })
}