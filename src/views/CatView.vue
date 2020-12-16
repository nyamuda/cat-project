<template>
  <div id="cat-body">
    <mdb-container id="card-container">
      <mdb-row>
        <mdb-card id="cat-card" reverse>
          <mdb-view hover cascade>
            <a href="#!">
              <div>
                <img id="cat-cute" :src="catURL" alt="Card image cap" />
              </div>
              <mdb-mask waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body class="text-center" cascade>
            <mdb-card-title class="indigo-text"
              ><h3>{{ catName }}</h3></mdb-card-title
            >
            <mdb-card-text id="cat-descri">{{ catDescription }}</mdb-card-text>
            <figure>
              <figcaption>Listen to the Cutie Cat</figcaption>
              <audio
                controls
                src="http://www.sorrygottago.com/SoundFiles/cat.mp3"
                type="audio/mp3"
              >
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </figure>
          </mdb-card-body>
        </mdb-card>
      </mdb-row>
    </mdb-container>
    <cat-footer2></cat-footer2>
  </div>
</template>

<script>
import Footer2 from "@/components/Footer2.vue";
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
    "cat-footer2": Footer2,
  },
  data() {
    return {
      catName: "",
      catDescription: "",
      catURL: "",
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
#cat-body {
  width: 100%;
  position: relative;
  top: 2rem;
  margin: auto;
}
#card-container {
  position: relative;
  top: 5rem;
  margin: auto;
  width: 100%;
  margin-bottom: 13rem;
}

#cat-cute {
  object-fit: cover;
  width: 12rem;
  height: auto;
  position: relative;
  margin: auto;
  padding-top: 1rem;
}
#cat-card {
  position: relative;
  margin: auto;
  width: 80%;
}
#cat-descri {
  font-size: 1rem;
}
audio {
  display: block;
  position: relative;
  width: 100%;
  margin: auto;
  text-align: center;
}

@media (min-width: 320px) {
  audio {
    width: 90%;
  }
  #cat-cute {
    width: 15rem;
  }
}

@media (min-width: 480px) {
  #cat-cute {
    width: 20rem;
  }
}

@media (min-width: 768px) {
  audio {
    width: 40%;
  }
  #card-container {
    width: 60%;
  }
}
</style>
