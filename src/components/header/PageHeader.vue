<template>
  <v-toolbar >
    <div class="page-header-left">
      <h3 class="pr-3 pl-3">{{appTitle}}</h3>
    </div>
    <v-breadcrumbs divider="-">
      <v-breadcrumbs-item >
        <v-icon @click="go_to_path('/dashboard')" small>home</v-icon>
      </v-breadcrumbs-item>
      <v-breadcrumbs-item v-for="(item,key) in breadcrumbs" :key="key">
        <div @click="go_to_path(item.path)">{{ item.name }} </div>
      </v-breadcrumbs-item>
    </v-breadcrumbs>

    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down" v-for="(item, index) in items" :key="index">
      <v-btn v-if="item.show" :to="!item.href ? {name: item.name}: null" :href="item.href" @click="item.click" ripple="ripple" :disabled="item.disabled" :target="item.target" rel="noopener"> <v-icon>{{ item.icon }}</v-icon>{{ item.title }}</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import store from '@/store/store';
import router from '../../router';
export default {
  name: 'PageHeader',
  data () {
    return {
      store: store,
      appTitle: 'Car App',
      title: '',
      is_child: false,
      breadcrumbs: [],
      items: [
        {
          icon: 'login',
          title: 'Login',
          href: '/login',
          show: !store.state.isUserLogged,
          click: (e) => {
            router.replace({path: '/login'});
          }
        },
        {
          icon: 'input',
          title: 'Register',
          href: '/register',
          show: !store.state.isUserLogged,
          click: (e) => {

          }
        },
        {
          icon: 'logout',
          title: 'Logout',
          href: '/',
          show: store.state.isUserLogged,
          click: (e) => {
            store.dispatch('setToken', null);
            store.dispatch('setUser', null);
            this.snackbar = {
              show: true,
              color: 'green',
              text: 'Logout successfully.'
            };
          }
        },
      ]
    };
  },
  computed: {
    route_name () {
      return this.$route.name;
    }
  },
  watch: {
    route_name: function () {
      this.get_breadcrumbs();
    }
  },
  created () {
    this.get_breadcrumbs();
  },
  methods: {
    get_breadcrumbs () {
      this.breadcrumbs = [];
      this.$router.options.routes.filter(function (route) {
        if (this.$route.name === route.name) {
          if (route.name === this.$route.name) {
            this.title = route.name;

            if (route.items) {
              this.is_child = true;
              route.items.filter(function (route) {
                let date = {
                  name: route.name,
                  path: route.path
                };

                this.breadcrumbs.push(date);
                return true;
              }.bind(this));
            }

            this.breadcrumbs.push({ name: route.name });
          }
        }
      }.bind(this));
    },
    go_to_path (path) {
      this.$router.push(path);
    }
  }
}
</script>

<style scoped>

</style>
