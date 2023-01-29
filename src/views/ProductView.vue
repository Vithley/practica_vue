<template>
  <div>
    <NavBarLinks />
    <div v-if="!isLoading" class="detailView">
      <ProfileCard>
        <template v-slot:image>
          <div v-if="!viewPictures" class="profile">
            <div class="picture">
              <img :src="product.images[0]" class="card-img-top" alt="" />
            </div>
          </div>
          <div v-else>
            <div class="picture">
              <img :src="viewPictures" class="card-img-top" alt="" />
            </div>
          </div>
          <div class="pictures">
            <div v-for="(image, index) in product.images" :key="index">
              <img
                :src="image"
                class="card-img-top"
                @click="changePictures(index)"
              />
            </div>
          </div>
        </template>

        <template v-slot:header>
          <h2 class="card-title">{{ product.id }}. {{ product.title }}</h2>
        </template>
        <template v-slot:body>
          <p class="card-text">{{ product.description }}</p>
        </template>
        <template v-slot:footer>
          <h2>Price: {{ product.price }}$</h2>
        </template>
      </ProfileCard>

    

    </div>
    <div v-else>Cargando...</div>
  </div>
</template>

<script lang="ts">
import useProducts from "@/composables/useProducts";
import { defineComponent, ref } from "vue";
import ProfileCard from "@/components/ProfileCard.vue";
import NavBarLinks from "@/components/NavBarLinks.vue";


export default defineComponent({
  name: "ProfileView",

  components: {
    ProfileCard,
    NavBarLinks,
  },

  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    const { product, fetchProductId, isLoading } = useProducts();
    fetchProductId(props.id);
    let viewPictures = ref();

    const changePictures = (index: number) => {
      viewPictures.value = product.value.images[index];
    };

    const carouselSlides = ["bg-1", "bg-2", "bg3"];

    return {
      product,
      isLoading,
      changePictures,
      viewPictures,
      carouselSlides,
    };
  },
});
</script>

<style scoped>
body {
  background-color: #eee;
}
.detailView {
  margin-top: 40px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
}
.buttons {
  display: flex;
  justify-content: center;
}

.pictures {
  width: 900px;
  display: flex;
}

.pictures img {
  width: 150px;
  margin: 5px;
  border-radius: 8px;
}
</style>
>
