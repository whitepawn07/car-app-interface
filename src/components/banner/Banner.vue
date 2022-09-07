<template>
  <v-parallax
    dark
    :src="imgSrc"
  >
    <v-layout
      align-center
      column
      justify-center
    >
      <h2 class="display-2 font-weight-regular mb-3 text--primary">Car App</h2>
      <h4 class="subheading text--secondary">Virtual Car Showroom</h4>
    </v-layout>
  </v-parallax>
</template>

<script>
export default {
  name: 'PageBanner',
  data () {
    return {
      imgSrc: "https://img.freepik.com/premium-photo/modern-interior-design-showroom-with-empty-floor_42251-69.jpg?w=2000"
    }
  }
}
</script>

<style scoped>

</style>
