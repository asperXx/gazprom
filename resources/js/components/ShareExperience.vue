<template>
  <v-container fluid class="d-flex flex-column justify-start">
    <v-btn v-if="!isCreate" @click="isCreate=true" class="align-self-center">Создать статью</v-btn>
    <v-select :items="items" label="Сортировать по дате" v-model="item" @change="sort"></v-select>
    <v-container>

    <v-card v-if="isCreate" min-width="97%" class="d-flex flex-column pa-6 justify-start">
      <v-card-text>
        <v-form>
          <v-text-field label="Название" name="title" type="text" v-model="post.title"></v-text-field>
          <ckeditor :editor="editor" v-model="post.body" :config="editorConfig"></ckeditor>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          v-if="isEdit"
          color="#0057B6"
          class="white--text"
          @click="isCreate=false;"
          to="/shareExperience"
        >Закрыть</v-btn>
        <v-btn
          v-if="!isEdit"
          color="#0057B6"
          class="white--text"
          @click="updatePost();isCreate=false;"
          to="/shareExperience"
        >Сохранить</v-btn>
        <v-btn
          v-if="isEdit"
          color="#0057B6"
          class="white--text"
          @click="create();isCreate=false;"
          to="/shareExperience"
        >Создать</v-btn>
      </v-card-actions>
      <hr />
      <br />
    </v-card>

    </v-container>
    
    <!-- <h2>Мои статьи</h2> -->
    <div v-for="getPost in getPosts" :key="getPost.id">
      <v-row v-if="!isLoad">
        <v-col class="d-flex justify-center align-center sm-col-12">
          <v-card class="ma-5 pa-10" max-width="1000">
            <div>
              <router-link :to="{ name: 'showPost', params: { id: getPost.id } }">
                <h3>{{ getPost.title }}</h3>
              </router-link>
              <p>
                <span v-html="getPost.body"></span>
              </p>
              <v-card-actions class="d-flex flex-column justify-center align-center">
                <v-spacer></v-spacer>
                <div>
                  <v-row justify="center" align="center">
                    <v-col cols="12" sm="4" xs="4" v-if="getPost.user_id == user_id">
                      <v-btn
                        color="#0057B6"
                        class="white--text"
                        @click="deletePost(getPost.id)"
                      >Удалить</v-btn>
                    </v-col>
                    <v-col cols="12" sm="4" xs="4" v-if="getPost.user_id == user_id">
                      <v-btn
                        color="#0057B6"
                        class="white--text"
                        @click="editPost(getPost.id); isCreate=true"
                      >Изменить</v-btn>
                    </v-col>
                    <v-col cols="12" sm="4" xs="4">
                      <div v-if="checkLikes(getPost.id)">
                        <v-btn color="#0057B6" class="white--text" @click="like(getPost.id)">
                          <v-icon>fa-thumbs-up</v-icon>
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
    <div class="text-center">
    <v-pagination
      v-model="page"
      :length="4"
      circle
      class="mb-12"
    ></v-pagination>
  </div>
  </v-container>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data() {
    return {
      page: 1,
      isLoad: false,
      item:'',
      items: ['По возрастанию', 'По убыванию'],
      isCreate: false,
      isEdit: "false",
      editor: ClassicEditor,
      editorConfig: {
        // The configuration of the editor.
      },
      post: {
        title: "",
        body: "",
        user_id: "",
        id: ""
      },
      getPosts: {
        title: "",
        body: "",
        user_id: "",
        id: ""
      },
      user_id: "",
      likes: {}
    };
  },

  mounted() {
    
    this.user_id = JSON.parse(localStorage.getItem("user")).id;
    console.log("USer id " + this.user_id);
    this.isLoad = true;
    axios
      .put(
        "/api/auth/getMyPosts/" + this.user_id,
        { user: this.user_id },
        {
          headers: {
            "X-CSRF-TOKEN": window.Laravel.csrfToken
          }
        }
      )
      .then(res => {
        this.getPosts = res.data.posts.data;
        this.likes = res.data.likes;
        this.isLoad = false;
      });
  },
  methods: {
      sort() {
          if (this.itemGoods === 'По возрастанию') {
            this.getPosts.sort((a, b) =>  a.price > b.price ? 1 : -1)
          } else {
            this.getPosts.sort((a, b) =>  a.price < b.price ? 1 : -1)
          }
        },
    checkLikes(id) {
      for (let i = 0; i < this.likes.length; i++) {
        if (this.likes[i].post_id == id) {
          return false;
        }
      }
      return true;
    },
    create() {
      this.post.user_id = JSON.parse(localStorage.getItem("user")).id;
      console.log(this.prop);
      axios
        .post("/api/auth/createPost", this.post, {
          headers: {
            "X-CSRF-TOKEN": window.Laravel.csrfToken
          }
        })
        .then(res => {
          console.log(this.getPosts);
          this.post.title = "";
          this.post.body = "";

          this.user_id = JSON.parse(localStorage.getItem("user")).id;

          axios
            .put(
              "/api/auth/getMyPosts/" + this.user_id,
              { user: this.user_id },
              {
                headers: {
                  "X-CSRF-TOKEN": window.Laravel.csrfToken
                }
              }
            )
            .then(res => {
              this.getPosts = res.data.posts;
              this.likes = res.data.likes;
            });
        });
    },
    deletePost(id) {
      axios
        .get("/api/auth/deletePost/" + id, {
          headers: {
            "X-CSRF-TOKEN": window.Laravel.csrfToken
          }
        })
        .then(res => {
          console.log(res);
          this.user_id = JSON.parse(localStorage.getItem("user")).id;

          axios
            .put(
              "/api/auth/getMyPosts/" + this.user_id,
              { user: this.user_id },
              {
                headers: {
                  "X-CSRF-TOKEN": window.Laravel.csrfToken
                }
              }
            )
            .then(res => {
              this.getPosts = res.data.posts;
              this.likes = res.data.likes;
            });
        });
    },
    editPost(id) {
      this.isEdit = !this.isEdit;
      axios
        .get("/api/auth/showPost/" + id, {
          headers: {
            "X-CSRF-TOKEN": window.Laravel.csrfToken
          }
        })
        .then(res => {
          this.post.title = res.data.post[0].title;
          this.post.body = res.data.post[0].body;
          this.post.id = res.data.post[0].id;
          console.log(this.post);
        });
    },
    updatePost() {
      axios
        .put(
          "/api/auth/updatePost/" + this.post.id,
          {
            title: this.post.title,
            body: this.post.body
          },
          {
            headers: {
              "X-CSRF-TOKEN": window.Laravel.csrfToken
            }
          }
        )
        .then(res => {
          console.log(res);
          this.post.title = "";
          this.post.body = "";
          axios
            .put(
              "/api/auth/getMyPosts/" + this.user_id,
              { user: this.user_id },
              {
                headers: {
                  "X-CSRF-TOKEN": window.Laravel.csrfToken
                }
              }
            )
            .then(res => {
              this.getPosts = res.data.posts;
              this.likes = res.data.likes;
              this.isEdit = !this.isEdit;
            });
        });
    },
    like(id) {
      console.log(this.user_id);
      axios
        .post(
          "/api/auth/like",
          { user: this.user_id, post: id },
          {
            headers: {
              "X-CSRF-TOKEN": window.Laravel.csrfToken
            }
          }
        )
        .then(res => {
          console.log(res);

          this.user_id = JSON.parse(localStorage.getItem("user")).id;

          axios
            .put(
              "/api/auth/getMyPosts/" + this.user_id,
              { user: this.user_id },
              {
                headers: {
                  "X-CSRF-TOKEN": window.Laravel.csrfToken
                }
              }
            )
            .then(res => {
              this.getPosts = res.data.posts;
              this.likes = res.data.likes;
            });
        });
    }
  }
};
</script>

<style> 
.v-card__text, .v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>