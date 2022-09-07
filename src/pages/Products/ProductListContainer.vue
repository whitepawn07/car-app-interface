<template>
<!--  <div class="m-5">-->
<!--    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">-->
<!--      <div v-for="product in products.lists" :key="product.id">-->
<!--        <Products  :product="product" />-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="text-center" v-if="products.length === 0">-->
<!--      <h2 class="text-2xl">{{ noProductLabel }}</h2>-->
<!--    </div>-->
<!--  </div>-->
<!--  <div-->
<!--    id="e3"-->
<!--    style="max-width: 400px; margin: auto;"-->
<!--    class="grey lighten-3"-->
<!--  >-->


    <v-card>
      <v-container
        fluid
        grid-list-lg
        class="product-list"
      >
        <v-layout row wrap>
          <v-flex xs4 v-for="product in products.lists" :key="product.id">
            <Products  :product="product" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
<!--  </div>-->
</template>



<script>
import Api from '@/api/api';
import Products from '@/pages/Products/Product';

export default {
  name: 'ProductList',
  components: {
    Products
  },
  data () {
    return {
      products: {
        selected: [],
        lists: [],
        last_page: null,
        current_page: 1,
        limit: 9,
      }
    }
  },
  computed: {
    url() {
      return `cars?limit=${this.products.limit}&page=${this.products.current_page}`
    }
  },
  methods: {
    get_products() {
      Api().get(`cars?limit=${this.products.limit}`).then(
        response => {
          this.products.lists = response.data.data
        }
      );
    },
    getNextProducts() {
      window.onscroll = () => {
        let bottomOfWindow = (document.documentElement.scrollTop + window.innerHeight) === document.documentElement.offsetHeight;

        if (bottomOfWindow) {

          if (this.products.current_page == this.products.last_page) return;
          setTimeout(() => {
            this.products.current_page++;
            Api().get(this.url).then(
              response => {
                this.products.last_page = response.data.last_page
                if (response.data.data.length > 1) {
                  response.data.data.forEach(item => this.products.lists.push(item))
                }
              }
            )
          }, 500);
        }
      }
    }
  },
  beforeMount: function() {
    this.get_products();
  },
  mounted() {
    this.getNextProducts();
  }
}
</script>

<style scoped>

</style>
