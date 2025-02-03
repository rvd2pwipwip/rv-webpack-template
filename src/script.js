import './styles.css';
import Chameleon from './img/chameleon.jpeg';
import { greeting } from './utils/greeting';

// webpack module handling test
console.log(greeting);

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.classList.add('hello');

  const chameleon = new Image();
  chameleon.src = Chameleon;
  element.appendChild(chameleon);

  // console.log(Note);
  // console.log(Channels);

  btn.innerHTML = 'Click me and check the console!';
  // btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());