<template>
  <div id="">
<div id="nav-bar">
  <mdb-navbar color="special-color-dark">
    <mdb-navbar-brand href="/">
      <img src="https://github.com/pnyamuda/logos/blob/master/LogoMakr-4BwPs6%20(1).png?raw=true" height="80" alt="">
    </mdb-navbar-brand>
  </mdb-navbar>
</div>

<div id="coros">
<mdb-carousel 
    :interval="8000"
    slide
    :items="items"
    controlls
  >
  </mdb-carousel>


</div>
  </div>
</template>

<script>
import { mdbNavbar, mdbNavbarBrand,mdbCarousel} from 'mdbvue';
  export default {
    name: 'Header',
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbCarousel
    },
    data() {
      return {
        items: [
          {
            img: true,
            src:
              "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
          },
          {
            img: true,
            src:
              "https://api.time.com/wp-content/uploads/2015/02/cats.jpg?quality=85&w=1024&h=512&crop=1"
          },
        ]
      };
    }
  }
</script>

<style>
#nav-bar {
    color:#ffffff;
}
#coros {
    width:100%;
    position: relative;
    margin: auto;
    border: 1px solid;

}
</style>
