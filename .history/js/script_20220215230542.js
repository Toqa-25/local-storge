// Dom vars
let input = document.getElementById("input"),
    addButton = document.getElementById("add"),
    checkButton = document.getElementById("check"),
    deleteButton = document.getElementById("delete"),
    showButton = document.getElementById("show"),
    showAllButton = document.getElementById("show-all"),
    deleteAllButton = document.getElementById("delete-all"),
    resultContent = document.querySelector(".result-content");

 // localStorge
let items = localStorage.getItem("items") ?
    JSON.parse(localStorage.getItem("items")) : [];   
    console.log("items" , items)

// Run Function 
    addButton.onclick = addItem;
    checkButton.onclick = checkItem;
    deleteButton.onclick = deleteItem;
    showButton.onclick = showItem;
    showAllButton.onclick = showAllItems;
    deleteAllButton.onclick = deleteAllItems;

// set functions
  // add function
 function addItem(){
     if (input.value != "" && input.value != null) {
         items = [...items, input.value.trim()]
         localStorage.setItem("items", JSON.stringify(items))
         resultContent.innerHTML = `You add  <span>${input.value.trim()} </span>to localStorge`
         input.value = null;
     }
     else {
         swal("Enter the Item Name");
   }
 }
  // delete function
function deleteItem() {
           resultContent.innerHTML = "";
    if (input.value != "" && input.value != null) {
      if (items.includes(input.value.trim())) {      
        items.map((item, index) => {
          if (item == input.value.trim()) {
            items.splice(index, 1);
            localStorage.setItem("items", JSON.stringify(items));
            resultContent.innerHTML = `You delete <span>${input.value.trim()} </span> from localStorge`;
          }
        });
       }
       else {
         resultContent.innerHTML = `Not found <span>${input.value.trim()} </span> item  in localStorge`
       }
      input.value = null;
    }
    else {
      swal("Enter the Item Name");
    }
 }
 
  // check function
function checkItem() {   //f
  resultContent.innerHTML = "";
  if (input.value != "" && input.value != null) {   // if 1
    if (items.includes(input.value.trim())) {
      resultContent.innerHTML = `The <span>${input.value.trim()} </span> item is exisit in localStorge`;
    } else {
      resultContent.innerHTML = `Not found <span>${input.value.trim()} </span> item  in localStorge`;
    }
    input.value = null;
  } //if 1
  else {
    swal("Enter the Item Name");
  }
} //f
  
  // show function
function showItem() {
    resultContent.innerHTML = "";
     if (input.value != "" && input.value != null) {
       if (items.includes(input.value.trim())) {
         resultContent.innerHTML = `${input.value.trim()}`;
       } else {
         resultContent.innerHTML = `Not found <span>${input.value.trim()} </span> item  in localStorge`;
       }
       input.value = null;
     } else {
       swal("Enter the Item Name");
     }
 }
  // show function
function showAllItems() {
     input.value = null
     if (items.length >= 1) {
         resultContent.innerHTML = ""
         items.map((item, index) => {
             resultContent.innerHTML += `<h4> ${index + 1} - ${item} </h4>`
             
         })
     }
         else {             
        resultContent.innerHTML = `No items to show`;    
         }
        // console.log("showAll", items);
     }
 
function deleteAllItems() {
  items = [];
   localStorage.setItem("items", JSON.stringify(items));
   resultContent.innerHTML = `Clear all items`
 }