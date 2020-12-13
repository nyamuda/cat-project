<template>
  <div id="">
    <cat-header></cat-header>
    <cat-list></cat-list>
    <cat-footer></cat-footer>
  </div>
</template>

<script>

import CatList from '@/components/CatList.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'


export default {
  name: 'HomePage',
  components: {
    "cat-list":CatList,
    "cat-header":Header,
    "cat-footer":Footer,
  }
}
</script>

<style>

</style>
