<template>
  <div id="cat-list">

<div class="my-cards" v-for="(cat,index) in catsData" :key="cat.id">
	<mdb-container>
		<mdb-row>
			<mdb-card-group deck>
				<mdb-card id="test">
					<mdb-view hover>
						<a href="#!">
					<!--		<img :src="cat.url" alt="Card image cap" class="cat-img"> -->
          <img :src="cat.url" alt="thumbnail" class="img-thumbnail cat-img"
  style="width: 500px">
							<mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
						</a>
					</mdb-view>
					<mdb-card-body>
						<mdb-card-title>Cat {{index+1}} </mdb-card-title>
						<mdb-card-text>Some quick example text to build on the card title and make up the bulk of the
							card's content.</mdb-card-text>
						<mdb-btn :id="cat.id" color="primary">Read more</mdb-btn>
					</mdb-card-body>
				</mdb-card>
			</mdb-card-group>
		</mdb-row>
	</mdb-container>

</div>
  </div>
</template>

<script>
import axios from 'axios';
import { mdbContainer, mdbRow,mdbCard,mdbCardBody, mdbCardTitle, mdbCardText,mdbCardGroup, mdbBtn, mdbView, mdbMask} from 'mdbvue';
export default {
  name: 'ListComponent',
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
        catsData:"",
          
      }
  },
  created() {
      let catsURL="https://thecatapi.com/api/images/get?format=json&results_per_page=10&size=small&type=png";
      axios
      .get(catsURL)
      .then(response=> {
          console.log(response.data);
          this.catsData=response.data

      })
      .catch(err=> {
          console.log(err)
      })
  },
}
</script>

<style scoped>
#test {
  display: flex;
  flex-direction: row;
  align-items: center;

}
#cat-list {
  width:90%;
  display: flex;
  flex-direction:column;
  position: relative;
  margin: auto;
  align-items: center;
  row-gap: 1rem;
  flex-grow: inherit;
}
.my-cards {
  width: 40rem;
  position: relative;
}
.cat-img {
  object-fit: cover;
}
</style>
