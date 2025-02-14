const form = document.querySelector('form');
const button = document.querySelector('button');
const description = document.createElement('input');
description.setAttribute('id', 'description');
description.setAttribute('type', 'text');
description.setAttribute('placeholder', 'Fruit description');
form.insertBefore(description, button);

const fruitsList = document.querySelector('.fruits');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  let fruitDescription = document.getElementById('description').value;
  if (fruitDescription === "") {
    alert('Please enter the description');
    return;
  }

  let fruitName = document.querySelector('.fruit-to-add').value;
  if (fruitName === "") {
    alert('Please enter the fruit name');
    return;
  }

  let newLi = document.createElement('li');
  newLi.className = 'fruit';
  newLi.innerHTML = fruitName + "<p>" + fruitDescription + "</p>" + '<button class="delete-btn">x</button>';
  newLi.querySelector('p').style.fontStyle = 'italic';

  fruitsList.appendChild(newLi);
});

fruitsList.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete-btn')) {
    let buttonDelete = event.target.parentElement;
    fruitsList.removeChild(buttonDelete);
  }
});

const filter = document.getElementById('filter');
filter.addEventListener('keyup', function (event) {
  const textEntered = event.target.value.toLowerCase();
  const fruitItems = document.getElementsByClassName('fruit');
  
  for (let i = 0; i < fruitItems.length; i++) {
    const fruitName = fruitItems[i].firstChild.textContent.toLowerCase();
    const fruitDescription = fruitItems[i].querySelector('p').textContent.toLowerCase();

    if (fruitName.includes(textEntered) || fruitDescription.includes(textEntered)) {
      fruitItems[i].style.display = 'flex';
    } else {
      fruitItems[i].style.display = 'none';
    }
  }
});
