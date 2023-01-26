<template>
  <div v-if="!isLoading">
    <div class="container py-3">
      <div class="title h1 text-center">{{ product.title }}</div>
      <!-- Card Start -->
      <div class="card">
        <div class="row">
          <div class="col-md-7 px-3">
            <div class="card-block px-6">
              <p class="card-text">
                {{ product.description }}
              </p>
              <br />
              <p>{{ product.price }}€</p>
            </div>
          </div>
          <!-- Carousel start -->
          <div class="col-md-5">
            <div id="CarouselTest" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li
                  data-target="#CarouselTest"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#CarouselTest" data-slide-to="1"></li>
                <li data-target="#CarouselTest" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    v-for="item in product"
                    :key="item.images"
                    class="d-block"
                    :src="product.images"
                    alt=""
                  />
                </div>
                <a
                  class="carousel-control-prev"
                  href="#CarouselTest"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only"></span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#CarouselTest"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import useProducts from "@/composables/useProducts";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ProfileView",

  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    const { product, fetchProductId, isLoading } = useProducts();
    fetchProductId(props.id);
    const images = ref([{}]);

    return {
      product,
      isLoading,
      images,
    };
  },
});
</script>

<style scoped>
body {
  background-color: #eee;
}
.title {
  margin-bottom: 50px;
  text-transform: uppercase;
}

.card-block {
  font-size: 1em;
  position: relative;
  margin: 0;
  padding: 1em;
  border: none;
  border-top: 1px solid rgba(34, 36, 38, 0.1);
  box-shadow: none;
}
.card {
  font-size: 1em;
  overflow: hidden;
  padding: 5;
  border: none;
  border-radius: 0.28571429rem;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  margin-top: 20px;
}

.carousel-indicators li {
  border-radius: 12px;
  width: 12px;
  height: 12px;
  background-color: #404040;
}
.carousel-indicators li {
  border-radius: 12px;
  width: 12px;
  height: 12px;
  background-color: #404040;
}
.carousel-indicators .active {
  background-color: white;
  max-width: 12px;
  margin: 0 3px;
  height: 12px;
}

.btn {
  margin-top: auto;
}
</style>
>
