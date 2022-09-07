<template>
  <v-layout row>
    <v-flex xs12 sm12 offset-sm1>
      <v-card class="fill-height">
        <v-img
          src="https://bulma.io/images/placeholders/1280x960.png"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title v-if="this.prod">
          <div>
            <div class="headline text-truncate">{{ this.prod.name |truncate(50) }}
              <span v-for="color in this.prod.colors" :key="color.id">
                <v-chip outline small dark text-color="accent" color="color.color.name">{{ color.color.name }}</v-chip>
             </span>

            </div>
            <div>
              <div class="text--accent-1">
                <span  v-if="this.prod.manufacturer">{{this.prod.manufacturer.name}}</span>
              </div>
              <div class="text--secondary">
                <span v-if="this.prod.type">{{this.prod.type.name}}</span>
              </div>
            </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Product',
  props: ['product'],
  data () {
    return {
      prod: null,
      addToCartLabel: 'Add to cart',
      viewDetailsLabel: 'Details',
      removeFromCartLabel: 'Remove from cart',
      addToFavouriteLabel: 'Add to favourite',
      removeFromFavouriteLabel: 'Remove from favourite',
      selected: 1,
      quantityArray: []
    }
  },
  mounted() {
    this.prod = this.$props.product
  },


}
</script>

<style scoped>

</style>
