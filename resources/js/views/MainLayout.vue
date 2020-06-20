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
            <v-list-item-title class="title">{{ user.last_name}} {{ user.name }}</v-list-item-title>
            <v-list-item-subtitle :onFlames="onFlames" >{{ user_dep.department }} <div class="fa fa-fire"> {{ flames }}  
              </div></v-list-item-subtitle>
          </v-list-item-content>
        </div>

        <v-list-item link :to="'/profile'">
          <v-list-item-action>
            <v-icon>fa-id-card</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Профиль</v-list-item-title>
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
            <v-icon>fa-id-card</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Опросы</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="'/support'">
          <v-list-item-action>
            <v-icon>fa-question-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Поддержка</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="'/shop'">
          <v-list-item-action>
            <v-icon>fa-question-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Магазин</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

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

    <v-app-bar app clipped-left color="#0057B6">
      <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link to="/" class="white--text ml-4">
        <v-toolbar-title class="logo">
          <img class="mt-2" src="./../../img/white-logo.svg" width="90%" height="90%" />
        </v-toolbar-title>
      </router-link>
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
import axios from "axios";
import store from "./../store";
export default {
    data: () => ({
    drawer: null,
    skill: 20,
    user: {},
    user_dep: {},
    email: "",
    isLoggedIn: "",
    flames: JSON.parse(localStorage.getItem('user')).flames || ''
  }),

  created() {
    // console.log(JSON.parse(localStorage.getItem('user')).flames);
    this.$vuetify.theme.dark = false;
  },

  mounted() {
    this.isLoggedIn = store.state.isLoggedIn;

    this.user = JSON.parse(localStorage.getItem("user"));
    this.user_dep = JSON.parse(localStorage.getItem("user_dep"));
  },

  methods: {
    async logout() {
      this.$router.push({ name: "logout" });
    },
    onFlames(data) {
      console.log(data)
    }
  },
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
@import url(
  https://fonts.googleapis.com/css?family=Arimo:400,400italic|Playfair+Display+SC:400,700&subset=latin,cyrillic
);

.logo {
  font-family: "Playfair Display SC", serif;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 24px;
}
* {
  text-decoration: none !important;
}
</style>