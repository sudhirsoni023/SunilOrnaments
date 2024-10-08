class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!-- Bootstrap Navbar Starts -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <img src="images/Gold-Diamonds.png" class="Gold-Diamond" />
        <div class="containerr">
          <span class="navbar-brand">SUNIL ORNAMENTS</span>
          <div class="slogan">Where trust Matters</div>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="index.html">HOME</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link active dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ALL JEWELLERY
              </a>
              <ul class="dropdown-menu ul" aria-labelledby="navbarDropdown">
                <div class="category p-1 d-grid gap-2"><b>Category</b>
                <a class="a" href="FINGER-RINGS.html">FINGER RINGS</a>
                <a class="a" href="BRACELETS.html">BRACELETS</a>
                <a class="a" href="ANKLETS.html">ANKLETS</a>
                <a class="a" href="BANGLES.html">BANGLES</a>
                <a class="a" href="CUFF-KADAA.html">CUFF & KADAA</a>
                <a class="a" href="TOE-RINGS.html">TOE RINGS</a>
                <a class="a" href="NECKLACE.html">NECKLACE</a>
                <a class="a" href="LOCKETS.html">LOCKETS</a>
                </div>
                <div class="category-1 p-1 d-grid gap-2">
                  <a class="a" href="WAIST CHAIN.html">WAIST CHAIN(KAMAR BANDH)</a>
                  <a class="a" href="ARM BAND.html">ARM BAND(BAJU BANDH)</a>
                  <a class="a" href="SILVER-PLATES.html">SILVER PLATES</a>
                  <a class="a" href="SILVER-BOWL.html">SILVER BOWL</a>
                  <a class="a" href="SILVER-MUKUT.html">SILVER MUKUT</a>
                  <a class="a" href="SILVER-SPOON.html">SILVER SPOON</a>
                  <a class="a" href="SILVER-GLASS.html">SILVER GLASS</a>
              </div>
              <div class="gender p-1 d-grid gap-2"><b>GENDER</b>
                <a class="a" href="GIRLS-WOMEN.html">GIRLS & WOMEN</a>
                <a class="a" href="BOYS-MEN.html">BOYS & MEN</a>
                <a class="a" href="KIDS-TEENS.html">KIDS & TEENS</a>
                </div>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">GOLD</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">SILVER</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">RINGS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">EARRINGS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">ANKLETS</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More About Us
              </a>
              <ul class="dropdown-menu about" aria-labelledby="navbarDropdown">
                <div class="about-us"><strong><u>Shop Address:</u></strong></div>
                <div class="address">&nbsp;Phoolchand Chowk, Near Hanuman Chowk Rd, 6th Shop after Phoolchand Bhajiya Wala.</div>
                <span>&nbsp;Satna, Madhya Pradesh - (485001)</span>
                <br><br><div class="phone-number"><strong>&nbsp;Contact Number:- 9827617412, 8319182661</strong></div>
                <div class="we-are-open">&nbsp;We're Open From Monday - Saturday,
                  11.00 AM - 9:30 PM IST</div>
                  <div class="email">&nbsp;You can reach us at sonis3283@gmail.com with all queries.</div>
                </li>
              </ul>
            </li>
          </ul>

          <span class="social-logos">
            <a href="https://maps.app.goo.gl/BLYvoAw6PcWkC1Kk6" target="_blank">
              <img src="images/google maps.png" class="logos" /></a
          ></span>
          <span class="social-logos">
            <a href="https://www.instagram.com/sudhir._.soni/" target="_blank">
              <img src="images/instagram.png" class="logos" /></a
          ></span>
          <span class="social-logos">
            <a href=" https://wa.me/9827617412" target="_blank"
              ><img src="images/whatsapp.jpeg" class="logos" /> </a
          ></span>
          <span class="social-logos">
            <a href="https://www.facebook.com/profile.php?id=100018336258804" target="_blank"
              ><img src="images/facebook.png" class="logos"
            /></a>
          </span>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search for Gold and Silver Jewellery"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    <!-- Bootstrap Navbar Ends -->
        `;
  }
}

customElements.define("my-header", MyHeader);
