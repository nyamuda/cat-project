<template>
  <div>
    <div>
      <mdb-container>
        <mdb-row>
          <mdb-card reverse>
            <mdb-view hover cascade>
              <a href="#!">
                <div
                  class=" headshot headshot-1"
                  :style="'background-image:url(' + catURL + ')'"
                >
                  <img :src="catURL" alt="Card image cap" />
                </div>
                <mdb-mask waves overlay="white-slight"></mdb-mask>
              </a>
            </mdb-view>
            <mdb-card-body class="text-center" cascade>
              <mdb-card-title><strong>Amazing Cat</strong></mdb-card-title>
              <h5 class="indigo-text">
                <strong>{{ catName }}</strong>
              </h5>
              <mdb-card-text>{{ catDescription }}hello</mdb-card-text>
            </mdb-card-body>
          </mdb-card>
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
  mdbView,
  mdbMask,
} from "mdbvue";
export default {
  name: "CatView",
  components: {
    mdbContainer,
    mdbRow,
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbView,
    mdbMask,
  },
  data() {
    return {
      catName: "",
      catDescription: "",
      catURL: "",
      test: "Please work",
    };
  },
  created() {
    //accessing the cat title and description from the central state
    let lovelyCat = this.$store.state.catInformation;

    //displaying the image, title and description
    this.catName = lovelyCat.title;
    this.catDescription = lovelyCat.description;
    this.catURL = lovelyCat.imgLocation;
  },
};
</script>
<style>
.headshot-1 {
  border-radius: 30%;
  background-image: var(--img-url), linear-gradient(#f9f047, #0fd850);
}
.headshot {
  flex-shrink: 0;
  margin: 20px;
  height: calc(150px + 6vw);
  width: calc(150px + 6vw);
  border: calc(8px + 0.2vw) solid transparent;
  background-origin: border-box;
  background-clip: content-box, border-box;
  background-size: cover;
  box-sizing: border-box;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.5);
}
</style>
