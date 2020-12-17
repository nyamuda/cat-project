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
      <div class="row d-flex justify-content-center">
        <!--Grid column-->
        <div class="col-md-6">
          <!-- Video -->
          <div class="embed-responsive embed-responsive-16by9 mb-4">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/WsDKTTnqMOM"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <!-- Footer Elements -->

      <!-- Developer -->
      <div class="footer-copyright text-center py-3">
        Developed by:
        <a href="percenyamuda.netlify.app">Pierce Nyamuda</a>
      </div>
      <!-- Developer -->
    </footer>
    <!-- Footer -->
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  data() {
    return {
      imageLinks: {
        image1:
          "https://images.newscientist.com/wp-content/uploads/2020/10/28112526/shutterstock_1105090019_web.jpg",
        image2:
          "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg",
        image3:
          "https://cdn.pixabay.com/photo/2017/12/09/21/33/sunset-3008779_960_720.jpg",
        image4:
          "https://cdn.pixabay.com/photo/2017/03/27/14/09/animal-2178983_960_720.jpg",
        image5:
          "https://cdn.pixabay.com/photo/2017/04/02/11/11/cat-2195538_960_720.jpg",
        image6:
          "https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404_960_720.jpg",
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
