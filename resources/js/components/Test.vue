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
      <div v-for="(getProp, id) in getProps" :key="id" class="card_wrap" :class="openWindow[getProp.id]" >
        <v-card class="pa-3 card " rounded="20px" color='#0057B6'>
          <v-card-title>
            <router-link :to="{ name: 'showTicket', params: { id: getProp.id } }">
              <h3 style="color: black;" v-html="getProp.title"></h3>
              </router-link>
            </v-card-title>
          <v-card-text>
            <p style="color: black;" v-html="getProp.body.substr(0, 100)"></p>
          </v-card-text>
          
          <p class="text-left mt-15 buttext">
              {{ users[id][0].last_name }} {{ users[id][0].name }}
          </p>

          <v-card-actions align="center" class="actions">
            <!-- <v-avatar class="mr-3"> -->
              <!-- <img :src="item.pic" :alt="item.name"> -->
            <!-- </v-avatar> -->
            <!-- <div>{{item.name}}</div> -->
            <v-spacer></v-spacer>
            <label class="mr-3 mb-0">
              <v-btn icon>
                <v-icon>mdi-message-outline</v-icon>
              </v-btn>
              <!-- {{item.comments}} -->
            </label>
            <label class="mb-0">
              <v-btn @click="like(getProp.id, id)" icon>
                <v-icon v-if="getProp.clicked == 1" color="red">mdi-fire</v-icon>
                <v-icon v-else>mdi-fire</v-icon>
              </v-btn>
              {{ getProp.flames }}
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
    users: [],

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

        getProps: {},

        user_id: '',
        isCreate: false,
        flames: JSON.parse(localStorage.getItem('user')).flames,
        openWindow: {},

        
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
            this.users = res.data.users
            console.log(this.users[0][0].last_name)
        })
    },
  methods: {
    ggwp(id) {
      if (this.openWindow[id] == "openWind") {
        return this.openWindow= {}
      }
      this.openWindow= {}
      let len = Object.keys(this.items).length
      for (let i=0; i < len; i++) {
        this.openWindow[this.items[i].id] = 'nonfloat'
      }
      this.openWindow[id] = "openWind"
      console.log(this.openWindow)
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
    
    checkLikes(id) {
      for (let i = 0; i < this.likes.length; i++) {
        if (this.likes[i].post_id == id) {
          return false;
        }
      }
      return true;
    },

    like(id, num) {
        console.log(id)

        this.getProps[num].clicked = true
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
  .talk_btn {text-decoration: none !important; color: rgb(0, 0, 0) !important; margin-top: 20px;}
  .row_wrap {position: relative; overflow: hidden; margin-right: -15px;}
  .card_wrap {position: relative; box-sizing: border-box; padding-right: 15px; width: 33.333333%; margin-bottom: 15px; float: left;}
  .card {height: 250px; color: rgb(0, 0, 0) !important; }
  .card p {color: black;}
  .actions {position: absolute; width: 100%; left: 0; bottom: 0; padding: 16px; box-sizing: border-box;}
  .nonfloat {float: right;}
  .openWind.card_wrap { width: 66.6666666%; height: auto;}
  .openWind.card_wrap .card { padding-bottom: 70px !important; height: 150vh;}
  .openWind .hide {display: block;}
  .buttext{position: absolute; bottom: 6px;}

  @media (max-width: 1000px) {
    .card_wrap {width: 50%;}
    .openWind.card_wrap{width: 100%;}
  }
  @media (max-width: 670px) {
    .card_wrap {width: 100%; float: none;}
  }
</style>