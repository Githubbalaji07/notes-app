const notesContainer=document.querySelector(".notes");
const btn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input");

function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}

showNotes();

btn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input";
    inputBox.setAttribute("contenteditable","true");
    img.src="delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }else if(e.target.tagName === "P"){
        notes=document.querySelectorAll(".input");
        notes.forEach(nt => {
            nt.onkey=function(){
                updateStorage();
            }
        })

    }
})

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML)
}


document.addEventListener("keydown",event=>{
    if(event.key === "Enter"){
        document.execCommand("insertlinebreak");
        event.preventDefault();
    }
})