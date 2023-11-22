// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getJoke from '../api/promises';
import renderToDom from '../utils/renderToDom';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1 id="get-jokespot">HELLO! You are up and running!</h1>
    <button class="btn btn-danger" id="click-me">get a joke</button><br />
    <i class="fas fa-user fa-4x"></i> <i class="fab fa-github-square fa-5x"></i>
  `;
  document.querySelector('#click-me').addEventListener('click', () => {
    getJoke().then((joke) => {
      renderToDom('#get-jokespot', joke.setup);
      renderToDom('#get-jokespot', joke.delivery);
    });
  });

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};
// function myFunction() {
//   document.getElementById('#click-me').style.visibility = 'hidden';
//   document.getElementById('#click-me').style.visibility = 'visible';
// }
// myFunction(renderToDom);
init();
