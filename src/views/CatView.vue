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
            <img
              id="icon"
              src="https://img.icons8.com/carbon-copy/100/000000/low-volume.png"
            />
            <figure>
              <figcaption>Listen to the T-Rex:</figcaption>
              <audio
                controls
                src="src\assets\audio\audio_hero_Cat_DIGIC08-69.mp3"
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
  width: 20rem;
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

/*Icon */
#icon {
  width: 3rem;
  cursor: pointer;
}
#icon:hover {
  color: red;
}
</style>
