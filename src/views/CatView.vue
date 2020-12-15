<template>
  <div>
    <mdb-container>
      <mdb-row>
        <mdb-card reverse>
          <mdb-view hover cascade>
            <a href="#!">
              <mdb-card-image
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                alt="Card image cap"
              ></mdb-card-image>
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
    <div>{{ test }}</div>
  </div>
</template>

<script>
import { eventBus } from "../main";
import {
  mdbContainer,
  mdbRow,
  mdbCard,
  mdbCardImage,
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
    mdbCardImage,
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
      test: "Please work",
    };
  },
  created() {
    eventBus.$on("catView", (data) => {
      this.catName = data;
    });
    console.log(this.catName);
    this.test = this.catName;
  },
};
</script>
