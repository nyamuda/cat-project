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
                <mdb-card-text
                  >Some quick example text to build on the card title and make
                  up the bulk of the card's content.</mdb-card-text
                >
                <mdb-btn :id="cat.id" color="primary" @click="viewCat"
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
import { eventBus } from "../main";
import axios from "axios";
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
    return {
      catsData: "",
      catObj: "",
    };
  },
  methods: {
    viewCat(event) {
      //getting the title and description of the cat/item from the elements
     // let allElements = event.target.parentElement.children;
    //  let itemTitle = [...allElements][0].innerHTML;
    //  let itemDescription = [...allElements][1].innerHTML;

    //  this.catObj = [itemTitle, itemDescription];

      //passing in the data to the cat view compononent
      eventBus.$emit("catView", 'tatenda');

      //navigating to the cat view component
      this.$router.push(`/cat/${event.target.id}`);
    },

    // a method that will either activate or diactivate the loader component
    /*
    activateLoader() {
      eventBus.$emit("myLoader", true);
    },
    diactivateLoader() {
      eventBus.$emit("myLoader", false);
    },
    */
  },
  created() {
    //showing the loader before the API request results are fetched
    //this.activateLoader();

    //fetching data
    let catsURL =
      "https://thecatapi.com/api/images/get?format=json&results_per_page=6&size=small&type=png";
    axios
      .get(catsURL)
      .then((response) => {
        console.log(response.data);
        this.catsData = response.data;

        //disable the loader
       // this.diactivateLoader();
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
#test {
  display: flex;
  flex-direction: row;
  align-items: center;
}
/*
#cat-list {
  width:90%;
  display: flex;
  flex-direction:column;
  position: relative;
  margin: auto;
  align-items: center;
  row-gap: 1rem;
  flex-grow: inherit;
  margin-top: 8rem;
margin-bottom: 3rem;

}
*/
#cat-list {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  margin: auto;
  border: 1px solid red;
  row-gap: 1rem;
}
/*
.my-cards {
  width: 40rem;
  position: relative;
}
*/
.my-cards {
  width: 40rem;
}
.cat-img {
  object-fit: cover;
  padding: 1rem;
  width: 400px;
  height: 200px;
  background-size: cover;
}
</style>
