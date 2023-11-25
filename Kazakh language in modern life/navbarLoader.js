// document.getElementById('my-navbar-container').innerHTML ='<object type="text/html" data="navbar.html"></object>';

// Use fetch to load the content of navbar.html
// function loadNavbar() {
//     fetch('navbar.html')
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById('my-navbar-container').innerHTML = data;
//         })
//         .catch(error => console.error('Error fetching navbar.html:', error));
// }

// const navbar = document.getElementById('my-navbar-container');
// const mainContent = document.getElementById('navbar-example');

// // Load the initial page content
// fetch('navbar.html')
//     .then(response => response.text())
//     .then(html => mainContent.innerHTML = html)
//     .catch(error => console.error('Error loading initial page:', error));

// document.addEventListener("DOMContentLoaded", function() {
//     // Load the navbar dynamically
//     fetch("")
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`Error: ${response.status} - ${response.statusText}`);
//         }
//         return response.text();
//       })
//       .then(data => {
//         document.getElementById("my-navbar-container").innerHTML = data;
//       })
//       .catch(error => {
//         console.error("Error fetching navbar.html:", error);
//       });
//   });

// const headerContent = document.getElementById('my-navbar-container').innerHTML ='<object type="text/html" data="navbar.html"></object>';



// class Header extends HTMLElement {
//   constructor() {
//     super();
//     this.innerHTML = headerContent;
//   }
// }

// customElements.define("my-navbar-container", Header);


const headerContent = ` <div class="container">
    <header class="d-flex justify-content-center py-3">
        <ul class="nav nav-pills">
            <li class="nav-item"><a href="index.html" class="nav-link active" aria-current="page">Home</a></li>
            <li class="nav-item"><a href="products.html" class="nav-link">Products</a></li>
            <li class="nav-item"><a href="review.html" class="nav-link">Review</a></li>
            <li class="nav-item"><a href="quiz.html" class="nav-link">Quiz</a></li>
            <li class="nav-item"><a href="contact.html" class="nav-link">Contact me</a></li>
        </ul>
    </header>
</div>`;



class Header extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = headerContent;
  }
}

customElements.define("navbar-component", Header);