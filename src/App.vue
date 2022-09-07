/* eslint-disable */
<template>
  <div id="appRoot">
    <template v-if="$route.meta.route != 'login'">
      <v-app id="inspire" class="app">
        <v-content>
          <!-- Page Header -->
          <page-header ></page-header>
          <div class="page-wrapper">
            <router-view></router-view>
          </div>
        </v-content>
        <!-- App Footer -->
        <v-footer height="auto" class="white pa-3 app--footer">
          <span class="caption">Car App. &copy; {{ new Date().getFullYear() }}</span>
          <v-spacer></v-spacer>
        </v-footer>
      </v-app>
    </template>
    <template v-else>
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </template>
  </div>
</template>

<script>
import PageHeader from './components/header/PageHeader'
export default {
  name: 'App',
  components: {
    PageHeader
  },
  data: () => ({
    snackbar: {
      show: false,
      text: '',
      color: '',
    }
  }),
  created () {
    window.getApp = this;
  },
};
</script>
<style lang="stylus" scoped>
.setting-fab
  top:50%!important;
  right:0;
  border-radius:0
.page-wrapper
  min-height:calc(100vh - 64px - 50px - 81px );

</style>

