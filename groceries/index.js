const inputText = document.querySelector("#listInp");
const submitBtn = document.querySelector(".submitBtn");
const clearBtn = document.querySelector(".clearBtn");
const list = document.querySelector(".list");
const listP = document.querySelector(".listP");
let arrList = [];
const arrListSaved = JSON.parse(localStorage.getItem("arrlist"), []);

if (arrListSaved) {
  arrList = arrListSaved;
  addToList(arrList);
  listP.style.display = "none";
}

window.addEventListener("DOMContentLoaded", () => {
  addToList(arrList);
  
});

submitBtn.addEventListener("click", () => {
  inputValue = inputText.value;
  if (inputValue) {
    arrList.push(inputValue);
    localStorage.setItem("arrlist", JSON.stringify(arrList));
    clearInput();
    addToList(arrList);
  }
});

inputText.addEventListener("keypress", (e) => {
  if (e.key === "Enter")
  {
    inputValue = inputText.value;
    if (inputValue) {
      arrList.push(inputValue);
      localStorage.setItem("arrlist", JSON.stringify(arrList));
      clearInput();
      addToList(arrList);
    }
  }
})

function addToList(arr) {
    let addList = " ";
    for (let i = 0; i < arr.length; i++) {
        addList += `
        <li class="listItem">
        ${arr[i]}
        </li>
        `;
    }
    list.innerHTML = addList;
    const ulLi = document.querySelectorAll(".listItem");
  for (let i = 0; i < ulLi.length; i++)
  {
    ulLi[i].addEventListener("click", (e) => {
      const items = e.currentTarget
       if (ulLi[i] === items)
       {
         arrList.splice(i, 1)
         localStorage.setItem("arrlist", JSON.stringify(arrList));
         addToList(arrList)
      }
     });
  }
  if (arrList.length == 0) {
    clearInput("block");
  }
  }
     

// console.log(removeItems())
clearBtn.addEventListener("click", () => {
  localStorage.clear();
  arrList = [];
  list.innerHTML = " ";
  addToList(arrList);
  clearInput("block");
});

function clearInput(nn = "none") {
  listP.style.display = nn;
  inputText.value = "";
}


