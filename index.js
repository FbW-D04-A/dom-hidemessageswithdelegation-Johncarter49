let removeButton = document.querySelectorAll(".remove-button");


// for (let i = 0; i < removeButton.length; i++) {
  
//       removeButton[i].addEventListener("click", ()=> {
//           removeButton[i].parentNode.style.display = "none"; 
//        })    

//  }
// for (let i = 0; i < removeButton.length; i++) {
//     removeButton[i].addEventListener("click", () => {
//         removeButton[i].parentNode.innerHTML = "";
//     })
    
// }

removeButton.forEach((item) => {
    item.addEventListener("click", ()=> {
        item.parentNode.style.display = "none";
    })
} )
console.log();

