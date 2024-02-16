var totalContainers = {
    "card-1": 0,
    "card-2": 0
};

function addFruit(cardId) {
    var fruitName = document.querySelector(`#${cardId} .input-field[name="fruitName"]`).value;
    var fruitQuantity = document.querySelector(`#${cardId} .quantity-field`).value;
    var fruitList = document.querySelector(`#${cardId} .fruit-list`);
    var fruitContainer = document.createElement("div");
    fruitContainer.classList.add("fruit");
    fruitContainer.innerHTML =
    "<h3>" +
    fruitName +
    "</h3><h3>Qty: <span class='quantity'>" +
    fruitQuantity +
    "</span> &nbsp; <button class='del-btn' onclick='subtractFruit(this, \"" + cardId + "\")'>x</button></h3>";
    fruitList.appendChild(fruitContainer);
    totalContainers[cardId]++;
    console.log(totalContainers);
    updateTotalCount(cardId);
    
    document.querySelector(`#${cardId} .input-field[name="fruitName"]`).value = "";
    document.querySelector(`#${cardId} .quantity-field`).value = "";
}

function subtractFruit(button, cardId) {
    var quantitySpan = button.parentNode.querySelector(".quantity");
    var currentQuantity = parseInt(quantitySpan.innerText);
    if (currentQuantity > 1) {
        quantitySpan.innerText = currentQuantity - 1;
    } else {
        var fruitContainer = button.parentNode.parentNode;
        if (fruitContainer.parentNode != null) {
        fruitContainer.parentNode.removeChild(fruitContainer);
        totalContainers[cardId]--;
        console.log(totalContainers);
        updateTotalCount(cardId)
        }
    }
}

function updateTotalCount(cardId) {
    var totalCount = document.querySelector(`#${cardId} .total-count`);
    totalCount.innerText = totalContainers[cardId];
    console.log(totalContainers);
}