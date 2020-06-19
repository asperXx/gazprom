<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <!-- /* Аватар и данные в навбаре*/ -->
        <div class="profile__navbar">
          <v-avatar class="profile" color="grey" size="150" tile>
            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
          </v-avatar>
          <v-list-item-content>
            <v-list-item-title class="title"> {{ user.last_name}} {{ user.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ user_dep.department }}</v-list-item-subtitle>
            <!-- Уровень -->
            <v-progress-linear 
              class="mt-4" 
              v-model="skill" 
              color="primary" 
              height="20" 
              striped
              >
                <template v-slot="{ value }">
                  <strong>{{ Math.ceil(value) }}%</strong>
                </template>
            </v-progress-linear>

          </v-list-item-content>
        </div>

        <v-list-item link :to="'/rules'">
          <v-list-item-action>
            <v-icon>fa-book</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Устав</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="'/culture'">
          <v-list-item-action>
            <v-icon>fa-users</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Культура</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="'/proposal'">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Предложения</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="'/shareExperience'">
          <v-list-item-action>
            <v-icon>fa-people-arrows</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Делимся опытом</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="'/questioning'">
          <v-list-item-action>
            <v-icon>fa-question-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Анкетирование</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="'/profile'">
          <v-list-item-action>
            <v-icon>fa-id-card</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Профиль</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="'/shop'">
          <v-list-item-action>
            <v-icon>fa-shopping-bag</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Магазин поощрений</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list-item link @click="logout">
          <v-list-item-action>
            <v-icon>fa-window-close</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Выйти</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-app-bar app clipped-left class="blue lighten-1">
      <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link to="/" class="white--text ml-4"><v-toolbar-title class="logo">Газпромбанк</v-toolbar-title> </router-link>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <router-view />
        </v-row>
      </v-container>
    </v-main>
    <v-footer class="mainFooter" app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios'
import store from './../store'
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    skill: 20,
    user: {},
    user_dep: {},
    email: '',
    isLoggedIn: ''
  }),

  created() {
    this.$vuetify.theme.dark = false;
  },

  mounted() {
    this.isLoggedIn = store.state.isLoggedIn
    
    this.user = JSON.parse(localStorage.getItem('user'))
    this.user_dep = JSON.parse(localStorage.getItem('user_dep'))

    console.log(this.user_dep)
  },

  methods: {
    async logout() {
      this.$router.push({ name: 'logout'})
    }
  }
};
</script>


<style scoped>
.profile__navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  flex-direction: column;
}
@import url(https://fonts.googleapis.com/css?family=Arimo:400,400italic|Playfair+Display+SC:400,700&subset=latin,cyrillic);

.logo {
  font-family: 'Playfair Display SC', serif;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 24px;
}
* {
  text-decoration: none !important;
}
</style>