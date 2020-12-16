import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        myLoaderStatus: "",
        catInformation: "",
        allCatsData: "",
    },

    getters: {
        //getting the cat state
        getCats: state => {
            return state.allCatsData;
        },
        //getting the loader state
        getLoad: state => {
            return state.myLoaderStatus
        }
    },
    mutations: {
        //this mutation will mutate the allCatsData property in the state
        myCats: (state, payload) => {
            state.allCatsData = payload;
            console.log(state.allCatsData);

            //deactivating the loader since fetching data from the server has ended
            state.myLoaderStatus = false;
        },
        //this mututation will mutate the catInformation property in the state
        saveClickedCat: (state, payload) => {
            state.catInformation = payload
        },
        //change the state of myLoaaderStatus property
        loader: (state, payload) => {
            state.myLoaderStatus = payload;
        }
    },

    actions: {
        //making our API request using the fetchCatsData action.
        fetchCatsData: (context) => {
            let catsURL =
                "https://thecatapi.com/api/images/get?format=json&results_per_page=6&size=small&type=png";
            axios
                .get(catsURL)
                .then((response) => {
                    console.log(response.data);
                    //commiting the myCats mutation and passing the fetched data to it.
                    let payload = response.data;

                    context.commit("myCats", payload);

                    //disable the loader
                    // this.$store.getters.hiddenLoader;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        //the action for the saveClikedCat mutation --purpose is to store cat data to the state
        clickedCat: (context, payload) => {
            context.commit('saveClickedCat', payload)
        },
        //the action for the loader mutation --purpose is to active/deactive the loader
        loader: (context, payload) => {
            context.commit('loader', payload)
        }
    },
});