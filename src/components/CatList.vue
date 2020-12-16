<template>
  <div id="cat-list">
    <div class="my-cards" v-for="(cat, index) in catsData" :key="cat.id">
      <mdb-container>
        <mdb-row>
          <mdb-card-group deck>
            <mdb-card id="test">
              <mdb-view hover>
                <a href="#!">
                  <div>
                    <img
                      :src="cat.url"
                      alt="thumbnail"
                      class="img-thumbnail cat-img"
                    />
                  </div>
                  <!--		<img :src="cat.url" alt="Card image cap" class="cat-img"> -->

                  <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                </a>
              </mdb-view>
              <mdb-card-body>
                <mdb-card-title>Cat {{ index + 1 }} </mdb-card-title>
                <mdb-card-text style="font-size:1rem"
                  >This is the image for cat {{ index + 1 }}. So intelligent,
                  family-friendly,and crazy cute.</mdb-card-text
                >
                <!--using a hidden input element to store the img url -->
                <input type="hidden" :value="cat.url" />
                <mdb-btn :id="cat.id" color="unique" @click="viewCat"
                  >Read more</mdb-btn
                >
              </mdb-card-body>
            </mdb-card>
          </mdb-card-group>
        </mdb-row>
      </mdb-container>
    </div>
  </div>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCard,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbCardGroup,
  mdbBtn,
  mdbView,
  mdbMask,
} from "mdbvue";
export default {
  name: "ListComponent",
  components: {
    mdbContainer,
    mdbRow,
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbCardGroup,
    mdbBtn,
    mdbView,
    mdbMask,
  },
  data() {
    return {};
  },
  methods: {
    viewCat(event) {
      //getting the title and description of the clicked cat/item from the elements
      let allElements = event.target.parentElement.children;
      let itemTitle = [...allElements][0].innerHTML;
      let itemDescription = [...allElements][1].innerHTML;
      //getting the img URL which was saved as a value for a hidden input element
      let imgURL = [...allElements][2].value;

      console.log(imgURL);

      //storing the cat image, title and description as an object
      let catObj = {
        title: itemTitle,
        description: itemDescription,
        imgLocation: imgURL,
      };

      //triggering the clickedCat action and passing in the data for the clicked cat--to it to the state
      this.$store.dispatch("clickedCat", catObj);

      //navigating to the cat view component
      this.$router.push(`/cat/${event.target.id}`);
    },
  },
  computed: {
    catsData() {
      //extracting the fetched data(API request) from the state
      return this.$store.getters.getCats;
    },
  },

  created() {
    //triggering the fetchCatsData action--to make an API request
    this.$store.dispatch("fetchCatsData");

    //triggering the loader action--to show the loader
    this.$store.dispatch("loader", true);
  },
};
</script>

<style scoped>
#cat-list {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 95%;
  position: relative;
  margin: auto;
  row-gap: 1rem;
  margin-top: 10rem;
  margin-bottom: 3rem;
}
.cat-img {
  object-fit: cover;
  height: 200px;
  position: relative;
  margin: auto;
  margin-top: 10px;
}

.my-cards {
  width: 300px;
}
/*
.cat-img {
  object-fit: cover;
  padding: 1rem;
  width: 400px;
  height: 200px;
  background-size: cover;
}
*/
</style>
