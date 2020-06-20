require('./bootstrap');

window.Vue = require('vue');

import router from './router';
import Vuetify from '../plugins/vuetify';
import App from './App.vue'
import store from './store';

import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';

import CKEditor from '@ckeditor/ckeditor5-vue';

Vue.use( CKEditor );

VueMarkdownEditor.use(vuepressTheme);

Vue.use(VueMarkdownEditor);



new Vue({
	vuetify: Vuetify,
	render: h => h(App),
    router,
    store
}).$mount('#app')