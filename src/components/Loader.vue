<template>
  <div class="vld-parent">
    <loading
      :active.sync="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
      :loader="loader"
      :color="color"
    ></loading>
  </div>
</template>

<script>
//import {eventBus} from '../main'
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "Loader",
  data() {
    return {
      //isLoading:false,
      fullPage: true,
      color: "rgb(135,28,107)",
      loader: "dots",
    };
  },
  components: {
    Loading,
  },
  methods: {
    onCancel() {
      console.log("User cancelled the loader.");
    },
  },
  computed: {
    isLoading() {
      //getting a value(true/false) from the state
      return this.$store.getters.getLoad;
    },
  },
};
</script>
