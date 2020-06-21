<template>
<div class="container">
<div class="block">
<v-card class="elevation-12">
<v-toolbar
color="primary"
dark
flat
>
<v-toolbar-title>Вход</v-toolbar-title>
<v-spacer></v-spacer>

    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Логин"
          name="login"
          prepend-icon="mdi-account"
          type="text"
          v-model="email"
          placeholder="admin@admin.com"
        ></v-text-field>

        <v-text-field
          id="password"
          label="Пароль"
          name="password"
          prepend-icon="mdi-lock"
          type="password"
          v-model="password"
          placeholder="123456"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="login" v-on:keypress.enter="login">Войти</v-btn>
    </v-card-actions>
  </v-card>
</div>
</div>


</template>

<script>
import store from './../store'

export default {
data () {
return {
email: '',
password: ''
}
},

methods: {
  login: function () {

    let email = this.email 
    let password = this.password

    this.$store.dispatch('login', { email, password })

   .then(() => this.$router.push({name: 'mainContent'}))
   .catch(err => console.log(err))
  },
},
props: {
  source: String,
},
}
</script>

<style>
  .container {display: flex; align-items: center; justify-content: center; height: 100vh}
  .block {max-width: 500px; width: 100%}
</style>