const submitBtn = document.querySelector('#submit-btn');
const usrNameInput = document.querySelector('#name_input');
const output = document.querySelector('#output');
const toDoList = document.querySelector('#toDoList');
const form = document.querySelector('#usr-form');
const errormsg = document.querySelector('.errormsg');
const errormsgDiv = document.querySelector('.errorBlock');
const list = document.querySelector('.item');

let toDos = [];
form.addEventListener('submit', function(e){
  if(usrNameInput.value){
    AddItemToArray(usrNameInput.value);
    const li  = document.createElement('li');
    li.className = 'item';
    li.innerText = usrNameInput.value;
    toDoList.appendChild(li);
  } else {
     showErrorMesg('Please, Enter to-do!!');
  }
  usrNameInput.value = '';
  e.preventDefault();
});

toDoList.addEventListener('click', function(e){
  if(e.target.classList.contains('item')){
    e.target.remove();
    toDos.forEach(function(todo, index){
      if(e.target.innerText === todo) {
        removeFromItemFromArray(index);
      }
    })
  }
});

function AddItemToArray(value){
  toDos.push(value);
}
function removeFromItemFromArray(index){
  toDos.splice(index, 1);
}

function showErrorMesg(msg){
  errormsgDiv.style.display = 'block';
  errormsg.innerText = msg;
  setTimeout(clearErrormsg, 2000);
}
function clearErrormsg(){
  errormsg.innerText = '';
  errormsgDiv.style.display = 'none';
}

