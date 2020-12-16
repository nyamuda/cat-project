<template>
  <div id="">
    <div id="nav-bar">
      <mdb-navbar color="special-color-dark">
        <mdb-navbar-brand href="/">
          <img
            src="https://github.com/pnyamuda/logos/blob/master/LogoMakr-4BwPs6%20(1).png?raw=true"
            height="80"
            alt=""
          />
        </mdb-navbar-brand>
      </mdb-navbar>
    </div>

    <div id="coros">
      <mdb-carousel
        :interval="8000"
        slide
        :items="items"
        indicators
        id="coro-text"
      >
      </mdb-carousel>
    </div>
  </div>
</template>

<script>
import { mdbNavbar, mdbNavbarBrand, mdbCarousel } from "mdbvue";
export default {
  name: "Header",
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbCarousel,
  },
  data() {
    return {
      items: [
        {
          img: true,
          mask: "black-strong",
          src:
            "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
          caption: {
            text:
              "“There are two means of refuge from the miseries of life: music and cats.” – Albert Schweitzer",
          },
        },
        {
          img: true,
          mask: "black-strong",
          src:
            "https://api.time.com/wp-content/uploads/2015/02/cats.jpg?quality=85&w=1024&h=512&crop=1",
          caption: {
            text:
              "“I have studied many philosophers and many cats. The wisdom of cats is infinitely superior.” – Hippolyte Taine",
          },
        },
      ],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");

#nav-bar {
  color: #ffffff;
}
#coros {
  width: 100%;
  position: relative;
  margin: auto;
  border: 1px solid;
}
#coro-text {
  font-size: 0.6rem;
  font-family: "Ubuntu", sans-serif;
}
@media (min-width: 320px) {
  #coro-text {
    font-size: 1rem;
  }
}

@media (min-width: 480px) {
  #coro-text {
    font-size: 1.5rem;
  }
}

@media (min-width: 768px) {
  #coro-text {
    font-size: 2.5rem;
  }
}
</style>
