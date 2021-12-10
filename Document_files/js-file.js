// const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


const container = document.querySelector('#container');

const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);
container.appendChild(para);