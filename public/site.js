let mybtn = document.getElementById('add-btn')

mybtn.addEventListener('click', additem)
function additem() {
  let myinput = document.getElementById('doit')
  let mylist = document.getElementById('todo-list')


  if (myinput.value !== '') {
    let newitem = document.createElement('li')
    newitem.innerText = myinput.value
    mylist.appendChild(newitem)
    myinput.value = '';
  }
}
document.addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    additem()
  }
});
