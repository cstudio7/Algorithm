const elem = document.createElement('div');

const elemText = document.createTextNode('This is a div');

elem.appendChild(elemText);

document.body.appendChild(elem)

elemText.nodeValue = 'This is a new DIv'

elem.classList.add('heading')

elem.id = 'newDiv';

elem.setAttribute('option', 'test');

// Creating a Picture in a document

const profileImg = document.createElement('img');
profileImg.src = 'http://placekitten.com/200/300';
document.body.appendChild(profileImg);
// resizing the image
profileImg.style.width = '50px';

// Craeting a form

const inputElem = document.createElement('input');

inputElem.type = 'checkbox';

const labelElem = document.createElement('label');

const labelText = document.createTextNode('Click me')

labelElem.appendChild(labelText);

labelElem.appendChild(inputElem);

document.body.appendChild(labelElem);
























