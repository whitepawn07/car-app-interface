<template>
<div>
 <page-banner/>
  <page-products-container/>
</div>
</template>

<script>
import PageBanner from '@/components/banner/banner'
import PageProductsContainer from '@/pages/Products/ProductListContainer'
export default {
  name: 'index',
  components: {
    PageBanner,
    PageProductsContainer
  }
}
</script>

<style scoped>

</style>
