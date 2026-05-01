const navHTML = `
<header>
  <img src="assets/images/logo.jpg" alt="Smith Ranch Logo" class="logo" />
  <nav>
    <button class="menu-toggle" aria-label="Toggle menu">☰</button>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="documents.html">Documents</a></li>
      <li><a href="links.html">Links</a></li>
      <li><a href="key-request.html">Gate Keys</a></li>
      <!-- <li><a href="dues.html">Pay Dues</a></li> -->
    </ul>
  </nav>
</header>
`;

document.body.insertAdjacentHTML("afterbegin", navHTML);

document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});
