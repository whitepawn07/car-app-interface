<template>
  <v-app id="login">
    <v-content >
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3 login-container">
              <v-card-text>
                <div class="layout column align-center">
                  <h1>Car App</h1>
<!--                  <img src="/static/img/logo-white.png" alt="ems" width="250" height="250">-->
                </div>
                <v-alert class="form-error" v-show="error" type="error" :value="true">
                  {{ error }}
                </v-alert>
                <v-form>
                  <v-text-field prepend-icon="person" name="email" label="Email" type="text" v-model="email"></v-text-field>
                  <v-text-field  prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn block color="info" @click="login" @keyup.enter="login" :loading="loading">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Api from '@/api/api';
export default {
  name: 'Login',
  data: () => ({
    loading: false,
    error: '',
    email: '',
    password: ''
  }),
  methods: {
    async login()  {
      try {
        this.loading = true;

        await Api().post('login', {
          email: this.email,
          password: this.password
        }).then(response => {
          console.log(response.data.access_token)
          this.loading = false;
          //
          this.$store.dispatch('setToken', response.data.access_token).then(() => {
            this.$store.dispatch('setUser', response.data.user).then(() => {
              this.$router.push('/');
            });
          });

          window.getApp.snackbar = {
            show: true,
            color: 'success',
            text: 'Successfully Logged In!'
          };
        }).catch((error) => {
          this.loading = false;
          this.error = ' ' + error.response.data.message;
        });
      } catch (error) {
        this.loading = false;
        this.error = ' ' + error.response.data.message;
      }
    }
  }
}
</script>

<style scoped lang="css">

.login-container{
  background-color: transparent !important;
}

.form-error{
  margin: 2rem 0 3rem 0;
}
</style>
