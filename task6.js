const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');
const listItems = document.querySelectorAll('li');
for(let i=0;i<listItems.length;i++){
  addEditButton(listItems[i]);
}
function addEditButton(li){
  const editButton =document.createElement('button');
  editButton.textContent='Edit';
  editButton.className='edit-btn';
  li.appendChild(editButton);
}
form.addEventListener('submit',function(event){
  event.preventDefault();
  const fruitToAdd = document.getElementById('fruit-to-add'); 
  if (fruitToAdd.value.trim() === '') return; 
    const newLi = document.createElement('li');
    newLi.className = 'fruit';
    newLi.innerHTML = `${fruitToAdd.value} <button class="delete-btn">x</button>`;
    addEditButton(newLi);
    fruits.appendChild(newLi);

    fruitToAdd.value = ''; 
});

fruits.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        const liToDelete = event.target.parentElement; 
        fruits.removeChild(liToDelete); 
    }
});

