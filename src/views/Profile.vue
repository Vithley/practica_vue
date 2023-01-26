<template>
    <div>
      <div v-if="!isLoading" class="profileUser">
        <ProfileCard>
          <template v-slot:image>
            <div class="picture"><img :src="getUser.avatar" class="card-img-top" alt=""></div>
          </template>
          <template v-slot:header>
            <h2 class="card-title">{{ getUser.name }}</h2>
          </template>
          <template v-slot:body>
            <p class="card-text">{{ getUser.email }}</p>
          </template>
          <template v-slot:footer>
            <h2>Role: {{ getUser.role }}</h2>
          </template>
        </ProfileCard>
      </div>
      <div v-else>Cargando...</div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import ProfileCard from "../components/ProfileCard.vue"
    import useAuth from '@/composables/useAuth';
  
  
  export default defineComponent({
    name: 'ProfileView',
    components: {

          ProfileCard
    },
    setup() {
      const { auth, getUser, isLoading, fetchUser } = useAuth();
      fetchUser(auth.value);
  
      return{
        getUser, 
        isLoading, 
        fetchUser
      }
    },
  })
  </script>
  
  <style scoped>
  .profileUser{
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
      
      
  }
  </style>
  