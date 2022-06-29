const loginButton = document.querySelector('#login-button')
const loginForm = document.getElementById('login-form')

loginButton.addEventListener('click', (e) => {
  e.stopPropagation()
  loginForm.classList.toggle('signin--visible')
})

document.addEventListener('click', e => {
  if (!loginForm.contains(e.target)) {
    loginForm.classList.remove('signin--visible')
  }
})

const template = document.createElement('template');

template.innerHTML = `
<footer class="site-footer">
<div class="site-footer__container">
  <nav class="site-footer__nav">
    <ul>
      <li><a href="/">Kezdőoldal</a></li>
      <li><a href="/receptek.html">Receptek</a></li>
      <li><a href="#">Rólunk</a></li>
      <li><a href="/kontaktok.html">Kapcsolat</a></li>
    </ul>
  </nav>
  <div class="site-footer__message">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
      aliquid dolorem, quae accusamus corporis incidunt quas laudantium
      fugit suscipit qui sunt officiis nisi ab molestiae repudiandae
      laboriosam, excepturi autem velit.
    </p>
    <span>&copy 2022</span>
  </div>
</div>
</footer>`;

document.body.appendChild(template.content);

    //Firebase import auth    

    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
    import { getDatabase } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyAfJNg8XBoyl5ymwObHBddFlbS1y-XmpwM",
      authDomain: "recipes-118ff.firebaseapp.com",
      databaseURL: "https://recipes-118ff-default-rtdb.firebaseio.com",
      projectId: "recipes-118ff",
      storageBucket: "recipes-118ff.appspot.com",
      messagingSenderId: "964003333510",
      appId: "1:964003333510:web:214255c975e7da76f4d807",
      measurementId: "G-EE9GJCTKPH"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app)
    const analytics = getAnalytics(app);






  





