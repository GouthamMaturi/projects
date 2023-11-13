let taskcontainer=document.getElementById('listitems');
const tasklist=[];
function addtask(){
  let usertask = document.getElementById('usertask');
  if(usertask.value.trim() === null || usertask.value.trim() === ""){
    let errormsg = document.getElementById('errormsg');
    errormsg.innerHTML="please enter a task";
    errormsg.style.color="blue";
    errormsg.style.fontSize="30px";
    //errormsg.classList.add('errorstyle');
  }else{
    let errormsg = document.getElementById('errormsg');
    errormsg.innerHTML="";
    tasklist.push(usertask.value);
    usertask.value="";
    console.log(tasklist);

    displayitems();

  }
}
function displayitems(){

  taskcontainer.innerHTML="";
  tasklist.forEach((element,index)=>{
    let listitems=document.createElement('li');
    listitems.innerHTML=element;
    taskcontainer.appendChild(listitems);

    let delbtn =document.createElement('button');
    delbtn.textContent='delete';
    delbtn.onclick=function(){
    tasklist.splice(index,1);
    displayitems();

    }

  })

}

//creating div element
let listcontainer=document.createElement('div');
listcontainer.classList.add('listcontainer');
listcontainer.appendChild

