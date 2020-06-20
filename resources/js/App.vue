<template> 
	<v-app> 
    <component :is="layout"></component>
    </v-app>
</template>

<script> 

import LoginLayout from './views/LoginLayout'
import MainLayout from './views/MainLayout'

import store from './store.js'
import "bootstrap/dist/css/bootstrap.css";

const Survey = () => import(/* webpackChunkName: "survey" */ "./views/Survey.vue");
export default {

    computed: {
        layout() {
            return (this.$route.meta.layout || 'login') + '-layout'
        }
    },
    components: {
        LoginLayout, MainLayout
    }
}
</script>