<template>
  <div id="">
    <cat-header></cat-header>

    <h1>Cats - sassy and adorbale at the same time. Look at our colourful collection of cat pictures capture the amazing-ness of cats.</h1>
    <cat-list></cat-list>
    <cat-footer></cat-footer>
    <Loader></Loader>
  </div>
</template>

<script>

import CatList from '@/components/CatList.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Loader from '@/components/Loader.vue';


export default {
  name: 'HomePage',
  components: {
    Loader,
    "cat-list":CatList,
    "cat-header":Header,
    "cat-footer":Footer,
  }
}
</script>

<style scoped>
h1 {
  width: 80%;
  position: relative;
  text-align: center;
  margin: auto;
  top: 3rem;
}

</style>
