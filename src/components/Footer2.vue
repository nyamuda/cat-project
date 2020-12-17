<template>
  <div id="my-footer">
    <!-- Footer -->
    <footer class="page-footer font-small special-color-dark lighten-3 pt-4">
      <!-- Footer Elements -->
      <div class="container">
        <!--Grid row-->
        <div class="row">
          <!--Grid column-->
          <div class="col-lg-2 col-md-12 mb-4">
            <!--Image-->
            <div class="view overlay z-depth-1-half">
              <img :src="imageLinks.image1" class="img-fluid" alt="" />
              <a href="">
                <div class="mask rgba-white-light"></div>
              </a>
            </div>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-2 col-md-6 mb-4">
            <!--Image-->
            <div class="view overlay z-depth-1-half">
              <img :src="imageLinks.image2" class="img-fluid" alt="" />
              <a href="">
                <div class="mask rgba-white-light"></div>
              </a>
            </div>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-2 col-md-6 mb-4">
            <!--Image-->
            <div class="view overlay z-depth-1-half">
              <img :src="imageLinks.image3" class="img-fluid" alt="" />
              <a href="">
                <div class="mask rgba-white-light"></div>
              </a>
            </div>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-2 col-md-12 mb-4">
            <!--Image-->
            <div class="view overlay z-depth-1-half">
              <img :src="imageLinks.image4" class="img-fluid" alt="" />
              <a href="">
                <div class="mask rgba-white-light"></div>
              </a>
            </div>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-2 col-md-6 mb-4">
            <!--Image-->
            <div class="view overlay z-depth-1-half">
              <img :src="imageLinks.image5" class="img-fluid" alt="" />
              <a href="">
                <div class="mask rgba-white-light"></div>
              </a>
            </div>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-2 col-md-6 mb-4">
            <!--Image-->
            <div class="view overlay z-depth-1-half">
              <img :src="imageLinks.image6" class="img-fluid" alt="" />
              <a href="">
                <div class="mask rgba-white-light"></div>
              </a>
            </div>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </div>

      <!-- Footer Elements -->

      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">
        Developed by:
        <a href="percenyamuda.netlify.app">Pierce Nyamuda</a>
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
</template>

<script>
export default {
  name: "Footer2",
  components: {},
  data() {
    return {
      imageLinks: {
        image1:
          "https://cdn.pixabay.com/photo/2020/10/01/11/41/cat-5618328_960_720.jpg",
        image2:
          "https://images.pexels.com/photos/1323326/cat-pet-pussy-animal-1323326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        image3:
          "https://cdn.pixabay.com/photo/2014/10/01/10/46/cat-468232_960_720.jpg",
        image4:
          "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg",
        image5:
          "https://cdn.pixabay.com/photo/2020/07/11/16/16/cat-5394567_960_720.jpg",
        image6:
          "https://cdn.pixabay.com/photo/2015/05/22/05/52/cat-778315_960_720.jpg",
      },
    };
  },
};
</script>

<style scoped>
#my-footer {
  overflow-x: hidden;
}
</style>
