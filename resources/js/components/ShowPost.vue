<template>
  <v-container>
    <v-card class="pl-5 pr-5 pt-3 pb-3" min-width="100%">
    <v-card-title>{{ post.title }}</v-card-title>
    <p v-html="post.body"></p>
    <p>Лайков: {{ likes }}</p>
    <hr />
    <h3>Комментарии</h3>
    <div v-for="(comment, id) in comments" :key="id">
      <v-alert text color="info">
          <div>{{ comment.created_at }}</div>
        <div>{{ comment.comment }}</div>
        <v-divider class="my-4 info" style="opacity: 0.22"></v-divider>
        <v-row align="center" no-gutters>
          <v-col class="grow">Пользователь: {{ users[id][0].last_name }} {{ users[id][0].name }}</v-col>
        </v-row>
      </v-alert>
    </div>
    <hr>
    <v-form>
        <v-text-field label="Оставить комментарий" name="title" type="text" v-model="comment"></v-text-field>
        <v-btn
          color="#0057B6"
          class="white--text mb-12"
          @click="postComment(comment.id)"

        >Отправить
        </v-btn>

    </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
        post: {},
        users: [],
        likes: 0,
        comments: [],
        comment: ''
    };
  },

    methods: {
        postComment (id) {
            axios.post('/api/auth/postCommentBlog', { comment: this.comment, user: JSON.parse(localStorage.getItem('user')), post_id: this.post.id})
            .then(res => console.log(res))

            this.comment = ""
            axios
            .get("/api/auth/showPost/" + this.$route.params.id, {
                headers: {
                "X-CSRF-TOKEN": window.Laravel.csrfToken
                }
            })
            .then(res => {
                this.post = res.data.post[0];
                this.comments = res.data.comments;
                this.users = res.data.users;
                this.likes = res.data.likes.length;
            });
        }
    },

  created() {
    console.log("Created");
    console.log(this.$route.params.id);
    axios
      .get("/api/auth/showPost/" + this.$route.params.id, {
        headers: {
          "X-CSRF-TOKEN": window.Laravel.csrfToken
        }
      })
      .then(res => {
        this.post = res.data.post[0];
        this.likes = res.data.likes.length;
        this.comments = res.data.comments;
        this.users = res.data.users;
      });
  }
};
</script>