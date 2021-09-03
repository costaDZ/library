const input = document.querySelector("#text");
const btn = document.querySelector(".sub-btn");
const content = document.querySelector(".content");

document.addEventListener("DOMContentLoaded", () => {
    let deleteBtn = [...document.querySelectorAll(".delete-btn")];

    //if (deleteBtn)
    deleteBtn.forEach(btn => {
        btn.addEventListener("click", () => removeItem(btn))
    })
})


btn.addEventListener("click", (e) => {
    e.preventDefault();
    let inputValue = input.value;
    displayInnerHtml(inputValue);
    let deleteBtn = [...document.querySelectorAll(".delete-btn")];


    deleteBtn.forEach(btn => {
        btn.addEventListener("click", () => removeItem(btn))
    })

    addLocal({ name: inputValue })

})

function displayInnerHtml(input) {
    content.innerHTML += `
    <div>${input}  <button class="delete-btn"> Delete</button></div>
    `
}

function removeItem(btn) {
    btn.parentElement.style.display = "none";
}


// local storage
function addLocal(target) {
    let currentStore = checkCurrent();
    currentStore.push(target);
    localStorage.setItem(0, JSON.stringify(currentStore));

}

function checkCurrent() {
    if (localStorage.getItem(0)) {
        return JSON.parse(localStorage.getItem(0))
    } else {
        return [];
    }
}

if (localStorage.length > 0) {
    let storedInfo = JSON.parse(localStorage.getItem(0));
    for (prop of storedInfo) {
        displayInnerHtml(prop.name);
    }
}

