let input=document.querySelector("#todoin"); 
let lists=document.querySelector("#lists-item"); 

input.addEventListener("keydown", (e)=>{
             if(e.key==="Enter"){
                addtext(input.value); 
             }
}); 

input.addEventListener("keyup", (e)=>{
    if(e.key==="Enter"){
        input.value=""; 
    }
}); 

 function addtext(inputText){
    if(inputText.trim()=="") return; 

    //create li
    let li=document.createElement("li"); 
    li.classList.add("list"); 

    //create span
    let span=document.createElement("span"); 
    span.textContent=inputText; 

    //create edit btn 
    let edit=document.createElement("button"); 
    edit.classList.add("edit"); 
    edit.textContent="Edit";
    edit.onclick=function(){
        let user=prompt("Edit your text", span.textContent); 
        if(user!==null && user.trim!==""){
            span.textContent=user; 
        }
    }
    //create delete btn 
    let remove=document.createElement("button"); 
  remove.classList.add("delete"); 
  remove.textContent="Delete"; 
  remove.onclick=()=>{
        li.remove(); 
  }

  //main div for both del and edit button 
  let mainDiv=document.createElement("div"); 
  mainDiv.classList.add("del-edit"); 



  //now append all the elements 
 
  li.appendChild(span); 
  li.appendChild(mainDiv); 
  mainDiv.appendChild(edit);
  mainDiv.appendChild(remove); 
   lists.appendChild(li); 

 }