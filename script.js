const notesContainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");


function shownotes() {
      notesContainer.innerHTML = localStorage.getItem("notes");
}
shownotes();

function updatestorage() {
      localStorage.setItem("notes", notesContainer.innerHTML);
}


createbtn.addEventListener("click", () => {
      let inputbox = document.createElement("p");
      let img = document.createElement("img");
      inputbox.className = "input-box";
      inputbox.setAttribute("contenteditable", "true");
      img.src = "delete.png";
      notesContainer.appendChild(inputbox).appendChild(img);
})
 
notesContainer.addEventListener("click", function (e) {
      if (e.target.tagName === "IMG") {
            e.target.parentElement.remove();
            updatestorage();
      }
      else if(e.target.tagName==="p") {
            notes = document.querySelectorAll(".input-box");
            notes.forEach(nt => {
                  nt.onkeyup = function () {
                        updatestorage();
                  }
            })
      }
})

document.addEventListener("keydown", event => {
      if (event.key === "enter") {
            document.execCommand("insertLineBreak");
            event.preventDefault();
      }
})