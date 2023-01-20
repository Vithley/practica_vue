<template>
  
  <NavBar/>
  <router-view/>
  <div>
   
  </div>
  
  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue"





export default defineComponent({
  name: "AppComponent",
  components: {
    NavBar,
    
  

  
    // DetailView
  },
  setup() {
    
    return{}
  },
})
</script>

<style>

</style>
