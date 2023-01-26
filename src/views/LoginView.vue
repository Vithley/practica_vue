<template>
    <section class="vh-100" style="background-color: #9A616D;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" style="border-radius: 1rem;">
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src="../assets/logo.png"
                alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem;" />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form @submit.prevent="token">

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
                    <span class="h1 fw-bold mb-0">Login</span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign into your account</h5>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="email">Email</label>
                    <input v-model.lazy="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required>
                    
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="password">Password</label>
                    <input v-model.lazy="password" type="password" class="form-control" id="exampleInputPassword1" required>
                    
                  </div>

                  <div class="pt-1 mb-4">
    
                    <button class="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { ref } from 'vue';
import useAuth from '../composables/useAuth';

export default defineComponent ({
  
  
  name: "LoginView",

  setup(){

    const { fecthAuth } = useAuth();

    let email = ref("")
    let password = ref("")

    const token = () => {
      fecthAuth({email: email.value, password: password.value})
    }
      
      return {
        email, 
        password,
        token
        
            
      }
    
      
      
     
  }
      
      
     
});


  


</script>

<style scoped>

</style>>