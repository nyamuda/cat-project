<template>
    <div class="vld-parent">
        <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :on-cancel="onCancel"
        :is-full-page="fullPage"></loading>
        
    </div>
</template>
 
<script>
//import {eventBus} from '../main'
    // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
    
    export default {
        name:"Loader",
        props:['active'],
        data() {
            return {
                isLoading:false,
                fullPage: true
            }
        },
        components: {
            Loading
        },
        methods: {
            onCancel() {
              console.log('User cancelled the loader.')
            }
        },
       created() {
           /*
            eventBus.$on('myLoader',val=> {
                this.isLoading=val;
                console.log(this.isLoading +'heeee' )}) */
       },
    }
</script> 