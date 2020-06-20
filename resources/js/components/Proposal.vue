<template>
  <v-container fluid class="d-flex flex-column justify-start">
    <v-btn v-if="!isCreate" @click="isCreate=true" class="align-self-start ml-5">Предложить</v-btn>
    <v-card
      v-if="isCreate"
      width="97%"
      class="d-flex flex-column pa-6 justify-space-between"
    >
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
    <!-- <h2>Мои статьи</h2> -->
    <div v-for="getProp in getProps" :key="getProp.id">
      <v-row >
        <v-col class="d-flex justify-center align-center sm-col-12">
          <v-card class="mt-5 pa-6" min-width="80%">
            <div>
              <router-link :to="{ name: 'showProp', params: { id: getProp.id } }">
                <h3>{{ getProp.title }}</h3>
              </router-link>
              <p>
                <span v-html="getProp.body"></span>
              </p>
              <p>
                <span>Отел: {{ getProp.department }} </span>
              </p>
              <p>
                <span>Поддержали: {{ getProp.flames }} </span>
              </p>

              <v-card-actions class="d-flex flex-column justify-center align-center">
                <v-spacer></v-spacer>
                <div>
                    <v-row justify="center" align="center" >
                        <v-col cols="12" sm="4" xs="4">
                            <v-btn color="#0057B6" class="white--text " @click="deleteProp(getProp.id)">Удалить</v-btn>
                        </v-col>

                        <v-col cols="12" sm="4" xs="4">
                            <div v-if="flames > 0">
                                <v-btn color="#0057B6" class="white--text ml-10" @click="like(getProp.id)">
                                    <v-icon>fa-fire</v-icon>
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </div>
              </v-card-actions>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import store from './../store'
export default {
    data () {
    return {
        depItems: [
            'IT-отдел',
            'Бухгалтерия'
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
            dep: ''
        },
        getProps: {

        },
        user_id: '',
        isCreate: false,
        flames: JSON.parse(localStorage.getItem('user')).flames
    }
},

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
        })
    }
  }
};
</script>