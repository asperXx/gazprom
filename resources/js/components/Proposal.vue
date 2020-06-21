<template>
  <v-container fluid class="d-flex flex-column justify-start">

    <!------------------------------------------------------------------------------------->
    <v-btn v-if="!isCreate" @click="isCreate=true" class="align-self-center mb-5">Предложить</v-btn>
    <v-card
      v-if="isCreate"
      width="97%"
      class="d-flex flex-column pa-6 justify-space-between">
      <h2>Сформировать предложение</h2>
      <v-card-text>
        <v-form>
          <v-text-field label="Решаемая проблема" name="title" type="text" v-model="prop.title"></v-text-field>
          <p>Описание решения</p>
          <ckeditor :editor="editor" v-model="prop.body" :config="editorConfig"></ckeditor>

          <v-select
            v-model="prop.dep"
            :items="depItems"
            :error-messages="selectErrors"
            label="Отдел"
            prepend-inner-icon="mdi-domain"
            required
            :disabled="disabled"
            value="IT"
          ></v-select>

          <v-select
            v-model="prop.status"
            :items="levelItems"
            :error-messages="selectErrors"
            label="Уровень"
            prepend-inner-icon="mdi-domain"
            required
            :disabled="disabled"
            value="IT"
          ></v-select>

        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          v-if="isEdit"
          color="#0057B6"
          class="white--text"
          @click="isCreate=false;"
        >Закрыть</v-btn>

        <v-btn
          v-if="!isEdit"
          color="#0057B6"
          class="white--text"
          @click="updatePost();isCreate=false;"
          to="/proposal"
        >Изменить</v-btn>
        <v-btn
          v-if="isEdit"
          color="#0057B6"
          class="white--text"
          @click="create();isCreate=false;"
          to="/proposal"
        >Создать</v-btn>
      </v-card-actions>
      <hr />
      <br />
    </v-card> 
<!------------------------------------------------------------------------------------->


<div>
    <div class="row_wrap">
      <div v-for="(item, id) in items" :key="id" class="card_wrap" :class="openWindow[item.id]" >
        <v-card class="pa-3 card " rounded="20px" :color="item.color" @click="ggwp(item.id)">
          <v-card-title><h3>{{ item.title }}</h3></v-card-title>
          <v-card-text>
            <p>{{ item.desc }}</p>
            <div class="hide">
              <p>{{ item.full_desc}}</p>
              <v-img :src="item.img"></v-img>
              <v-btn color="#2157F4" href="#" class="talk_btn">Обсудить</v-btn>
            </div>
          </v-card-text>
          <v-card-actions align="center" class="actions">
            <v-avatar class="mr-3">
              <img :src="item.pic" :alt="item.name">
            </v-avatar>
            <div>{{item.name}}</div>
            <v-spacer></v-spacer>
            <label class="mr-3 mb-0" >
              <v-btn icon>
                <v-icon color="#fff">mdi-message-outline</v-icon>
              </v-btn>
              {{item.comments}}
            </label>
            <label class="mb-0">
              <v-btn icon>
                <v-icon v-if="item.clicked" color="red">mdi-fire</v-icon>
                <v-icon v-else color="#fff">mdi-fire</v-icon>
              </v-btn>
              {{item.likes}}
            </label>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
    
    
  </v-container>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import store from './../store'
export default {
  data: () => ({
    depItems: [
            'IT-отдел',
            'Бухгалтерия'
        ],

        levelItems: [
          'Уровень отдела',
          'Уровень филиала',
          'Уровень региона'
        ],

        isEdit: "false",
        editor: ClassicEditor,
        editorConfig: {
            // The configuration of the editor.
        },
        prop: {
            title: '',
            body: '',
            user_id: '',
            dep: '',
            status: ''
        },
        getProps: {

        },
        user_id: '',
        isCreate: false,
        flames: JSON.parse(localStorage.getItem('user')).flames,
        openWindow: {},

        items: [
        {'id':'1','title': 'Blablabla', 'desc': 'Et exercitation nisi laboris ea proident eu proident quis deserunt. Minim culpa fugiat voluptate elit nostrud duis culpa non anim. Consectetur pariatur do qui eiusmod non nulla anim exercitation voluptate eu cillum.', 'comments':24, 'likes':16, "pic":"https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg", "name": "Просто Сережа", 'clicked':false, 'color': '#0057B6', 'full_desc' : 'Tempor voluptate commodo elit enim sit. Nisi deserunt adipisicing laborum ut in qui nulla cupidatat do Lorem non do voluptate officia. Do duis do quis irure adipisicing minim minim ipsum. Occaecat dolor do nostrud exercitation tempor veniam consectetur proident aliqua aliquip pariatur.', 'img' : 'https://www.sostav.ru/images/news/2019/09/01/a2pzjhck.jpg'},
        {'id':'2','title': 'Blablabla', 'desc': 'Et exercitation nisi laboris ea proident eu proident quis deserunt. Minim culpa fugiat voluptate elit nostrud duis culpa non anim. Consectetur pariatur do qui eiusmod non nulla anim exercitation voluptate eu cillum.', 'comments':24, 'likes':16, "pic":"https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg", "name": "Просто Сережа", 'clicked':true, 'color': '#65CC7B', 'full_desc' : 'Tempor voluptate commodo elit enim sit. Nisi deserunt adipisicing laborum ut in qui nulla cupidatat do Lorem non do voluptate officia. Do duis do quis irure adipisicing minim minim ipsum. Occaecat dolor do nostrud exercitation tempor veniam consectetur proident aliqua aliquip pariatur.', 'img' : 'https://www.sostav.ru/images/news/2019/09/01/a2pzjhck.jpg'},
        {'id':'3','title': 'Blablabla', 'desc': 'Et exercitation nisi laboris ea proident eu proident quis deserunt. Minim culpa fugiat voluptate elit nostrud duis culpa non anim. Consectetur pariatur do qui eiusmod non nulla anim exercitation voluptate eu cillum.', 'comments':24, 'likes':16, "pic":"https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg", "name": "Просто Сережа", 'clicked':false, 'color': '#F5984E', 'full_desc' : 'Tempor voluptate commodo elit enim sit. Nisi deserunt adipisicing laborum ut in qui nulla cupidatat do Lorem non do voluptate officia. Do duis do quis irure adipisicing minim minim ipsum. Occaecat dolor do nostrud exercitation tempor veniam consectetur proident aliqua aliquip pariatur.', 'img' : 'https://www.sostav.ru/images/news/2019/09/01/a2pzjhck.jpg'},
        {'id':'4','title': 'Blablabla', 'desc': 'Et exercitation nisi laboris ea proident eu proident quis deserunt. Minim culpa fugiat voluptate elit nostrud duis culpa non anim. Consectetur pariatur do qui eiusmod non nulla anim exercitation voluptate eu cillum.', 'comments':24, 'likes':16, "pic":"https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg", "name": "Просто Сережа", 'clicked':true, 'color': '#0057B6', 'full_desc' : 'Tempor voluptate commodo elit enim sit. Nisi deserunt adipisicing laborum ut in qui nulla cupidatat do Lorem non do voluptate officia. Do duis do quis irure adipisicing minim minim ipsum. Occaecat dolor do nostrud exercitation tempor veniam consectetur proident aliqua aliquip pariatur.', 'img' : 'https://www.sostav.ru/images/news/2019/09/01/a2pzjhck.jpg'},
        {'id':'5','title': 'Blablabla', 'desc': 'Et exercitation nisi laboris ea proident eu proident quis deserunt. Minim culpa fugiat voluptate elit nostrud duis culpa non anim. Consectetur pariatur do qui eiusmod non nulla anim exercitation voluptate eu cillum.', 'comments':24, 'likes':16, "pic":"https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg", "name": "Просто Сережа", 'clicked':false, 'color': '#0D356C', 'full_desc' : 'Tempor voluptate commodo elit enim sit. Nisi deserunt adipisicing laborum ut in qui nulla cupidatat do Lorem non do voluptate officia. Do duis do quis irure adipisicing minim minim ipsum. Occaecat dolor do nostrud exercitation tempor veniam consectetur proident aliqua aliquip pariatur.', 'img' : 'https://www.sostav.ru/images/news/2019/09/01/a2pzjhck.jpg'},
        {'id':'6','title': 'Blablabla', 'desc': 'Et exercitation nisi laboris ea proident eu proident quis deserunt. Minim culpa fugiat voluptate elit nostrud duis culpa non anim. Consectetur pariatur do qui eiusmod non nulla anim exercitation voluptate eu cillum.', 'comments':24, 'likes':16, "pic":"https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg", "name": "Просто Сережа", 'clicked':true, 'color': '#F5984E', 'full_desc' : 'Tempor voluptate commodo elit enim sit. Nisi deserunt adipisicing laborum ut in qui nulla cupidatat do Lorem non do voluptate officia. Do duis do quis irure adipisicing minim minim ipsum. Occaecat dolor do nostrud exercitation tempor veniam consectetur proident aliqua aliquip pariatur.', 'img' : 'https://www.sostav.ru/images/news/2019/09/01/a2pzjhck.jpg'},
        {'id':'7','title': 'Blablabla', 'desc': 'Et exercitation nisi laboris ea proident eu proident quis deserunt. Minim culpa fugiat voluptate elit nostrud duis culpa non anim. Consectetur pariatur do qui eiusmod non nulla anim exercitation voluptate eu cillum.', 'comments':24, 'likes':16, "pic":"https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg", "name": "Просто Сережа", 'clicked':false, 'color': '#0D356C', 'full_desc' : 'Tempor voluptate commodo elit enim sit. Nisi deserunt adipisicing laborum ut in qui nulla cupidatat do Lorem non do voluptate officia. Do duis do quis irure adipisicing minim minim ipsum. Occaecat dolor do nostrud exercitation tempor veniam consectetur proident aliqua aliquip pariatur.', 'img' : 'https://www.sostav.ru/images/news/2019/09/01/a2pzjhck.jpg'},
        {'id':'8','title': 'Blablabla', 'desc': 'Et exercitation nisi laboris ea proident eu proident quis deserunt. Minim culpa fugiat voluptate elit nostrud duis culpa non anim. Consectetur pariatur do qui eiusmod non nulla anim exercitation voluptate eu cillum.', 'comments':24, 'likes':16, "pic":"https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg", "name": "Просто Сережа", 'clicked':true, 'color': '#F5984E', 'full_desc' : 'Tempor voluptate commodo elit enim sit. Nisi deserunt adipisicing laborum ut in qui nulla cupidatat do Lorem non do voluptate officia. Do duis do quis irure adipisicing minim minim ipsum. Occaecat dolor do nostrud exercitation tempor veniam consectetur proident aliqua aliquip pariatur.', 'img' : 'https://www.sostav.ru/images/news/2019/09/01/a2pzjhck.jpg'},
        {'id':'9','title': 'Blablabla', 'desc': 'Et exercitation nisi laboris ea proident eu proident quis deserunt. Minim culpa fugiat voluptate elit nostrud duis culpa non anim. Consectetur pariatur do qui eiusmod non nulla anim exercitation voluptate eu cillum.', 'comments':24, 'likes':16, "pic":"https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg", "name": "Просто Сережа", 'clicked':false, 'color': '#0057B6', 'full_desc' : 'Tempor voluptate commodo elit enim sit. Nisi deserunt adipisicing laborum ut in qui nulla cupidatat do Lorem non do voluptate officia. Do duis do quis irure adipisicing minim minim ipsum. Occaecat dolor do nostrud exercitation tempor veniam consectetur proident aliqua aliquip pariatur.', 'img' : 'https://www.sostav.ru/images/news/2019/09/01/a2pzjhck.jpg'},
        {'id':'10','title': 'Blablabla', 'desc': 'Et exercitation nisi laboris ea proident eu proident quis deserunt. Minim culpa fugiat voluptate elit nostrud duis culpa non anim. Consectetur pariatur do qui eiusmod non nulla anim exercitation voluptate eu cillum.', 'comments':24, 'likes':16, "pic":"https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg", "name": "Просто Сережа", 'clicked':true, 'color': '#65CC7B', 'full_desc' : 'Tempor voluptate commodo elit enim sit. Nisi deserunt adipisicing laborum ut in qui nulla cupidatat do Lorem non do voluptate officia. Do duis do quis irure adipisicing minim minim ipsum. Occaecat dolor do nostrud exercitation tempor veniam consectetur proident aliqua aliquip pariatur.', 'img' : 'https://www.sostav.ru/images/news/2019/09/01/a2pzjhck.jpg'},
        {'id':'11','title': 'Blablabla', 'desc': 'Et exercitation nisi laboris ea proident eu proident quis deserunt. Minim culpa fugiat voluptate elit nostrud duis culpa non anim. Consectetur pariatur do qui eiusmod non nulla anim exercitation voluptate eu cillum.', 'comments':24, 'likes':16, "pic":"https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg", "name": "Просто Сережа", 'clicked':false, 'color': '#0D356C', 'full_desc' : 'Tempor voluptate commodo elit enim sit. Nisi deserunt adipisicing laborum ut in qui nulla cupidatat do Lorem non do voluptate officia. Do duis do quis irure adipisicing minim minim ipsum. Occaecat dolor do nostrud exercitation tempor veniam consectetur proident aliqua aliquip pariatur.', 'img' : 'https://www.sostav.ru/images/news/2019/09/01/a2pzjhck.jpg'},
        {'id':'12','title': 'Blablabla', 'desc': 'Et exercitation nisi laboris ea proident eu proident quis deserunt. Minim culpa fugiat voluptate elit nostrud duis culpa non anim. Consectetur pariatur do qui eiusmod non nulla anim exercitation voluptate eu cillum.', 'comments':24, 'likes':16, "pic":"https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg", "name": "Просто Сережа", 'clicked':true, 'color': '#0057B6', 'full_desc' : 'Tempor voluptate commodo elit enim sit. Nisi deserunt adipisicing laborum ut in qui nulla cupidatat do Lorem non do voluptate officia. Do duis do quis irure adipisicing minim minim ipsum. Occaecat dolor do nostrud exercitation tempor veniam consectetur proident aliqua aliquip pariatur.', 'img' : 'https://www.sostav.ru/images/news/2019/09/01/a2pzjhck.jpg'},
      ],
      colors: ['primary', 'purple', 'deep-purple', 'cyan', 'green', 'orange', '#0057B6', '#0D356C'],
  }),

  created() {
        axios.get('/api/auth/getMyProps/', {
            headers: {
                'X-CSRF-TOKEN': window.Laravel.csrfToken
            }
        })
        .then(res => {
            this.getProps = res.data.tickets
            console.log(this.getProps)
        })
    },
  methods: {
    ggwp(id) {
      if (this.openWindow[id] == "openWind") {
        return this.openWindow = {}
      }
      this.openWindow= {}
      let len = Object.keys(this.items).length
      for (let i=0; i < len; i++) {
        this.openWindow[this.items[i].id] = 'nonfloat'
      }
      let elem = this.items.find(item => item.id == id)
      //Я не придумал как убрать элемент из массива, но придумал как встаить его вперед
      //я все равно молодец (с) Антоша
      this.items.unshift(elem)
      this.openWindow[id] = "openWind"
    },
      create() {
        if (this.prop.title != "" && this.prop.body != "" && this.prop.dep != "") {
            this.prop.user_id = JSON.parse(localStorage.getItem('user')).id
            
            axios.post('/api/auth/createProp', this.prop, {
                headers: {
                    'X-CSRF-TOKEN': window.Laravel.csrfToken
                }
            })
            .then(res => {
                this.prop.title = ""
                this.prop.body = ""
                axios.get('/api/auth/getMyProps/', {
                    headers: {
                        'X-CSRF-TOKEN': window.Laravel.csrfToken
                    }
                })
                .then(res => {
                    this.getProps = res.data.tickets;
                })
            })
        }
    },

    deleteProp(id) {
        axios.get('/api/auth/deleteProp/' + id, {
            headers: {
                'X-CSRF-TOKEN': window.Laravel.csrfToken
            }
        })
        .then(res => {
            axios.get('/api/auth/getMyProps/', {
                headers: {
                    'X-CSRF-TOKEN': window.Laravel.csrfToken
                }
            })
            .then(res => {
                this.getProps = res.data.tickets;
            })
        })
    },
    like(id) {
        axios.post('/api/auth/propLike/', {'user_id': JSON.parse(localStorage.getItem('user')).id, 'ticket_id': id})
        .then(res => {
            console.log(res.data.user[0])
            var user = JSON.stringify(res.data.user[0])
            localStorage.setItem('user', user)
            axios.get('/api/auth/getMyProps/', {
                headers: {
                    'X-CSRF-TOKEN': window.Laravel.csrfToken
                }
            })
            .then(res => {
                this.getProps = res.data.tickets;
            })
        })
    }
  }
};
</script>

<style>
  .hide {display: none; text-align: center;}
  .hide p {text-align: justify;}
  .talk_btn {text-decoration: none !important; color: #fff !important; margin-top: 20px;}
  .row_wrap {position: relative; overflow: hidden; margin-right: -15px;}
  .card_wrap {position: relative; box-sizing: border-box; padding-right: 15px; width: 50%; margin-bottom: 15px; float: left;}
  .card {height: 250px; color: #fff !important; }
  .card p {color: #fff;}
  .actions {position: absolute; width: 100%; left: 0; bottom: 0; padding: 16px; box-sizing: border-box;}
  .nonfloat {float: right;}
  .openWind.card_wrap { width: 100%; height: auto;}
  .openWind.card_wrap .card { padding-bottom: 70px !important; height: auto; }
  .openWind .hide {display: block;}

  @media (max-width: 670px) {
    .card_wrap {width: 100%; float: none;}
  }
</style>