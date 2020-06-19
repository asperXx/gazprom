<template>
    <v-card width="95%" class="pa-6">

        <h2>Создать статью</h2>
        <v-card-text>
        <v-form>
            <v-text-field
            label="Название"
            name="title"
            type="text"
            v-model="post.title"
            ></v-text-field>

            <v-textarea
            id="body"
            label="Текст"
            name="body"
            type="text"
            v-model="post.body"
            ></v-textarea>
        </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="create" v-on:keypress.enter="login">Создать</v-btn>
        </v-card-actions>
        <hr><br>
        <h2>Мои статьи</h2>
        <div v-for="(getPost, id) in getPosts" :key="getPost.id">
            <router-link :to="{ name: 'showPost', params: { title: getPost.title } }">
                <h3> {{ getPost.title }}</h3>
            </router-link>
            <p>{{ getPost.body }}</p>
            <v-card-actions>
                <v-spacer></v-spacer>
                <div v-if="getPost.user_id == user_id">
                <v-btn color="primary" @click="deletePost(getPost.title)">Удалить</v-btn>
                <v-btn color="primary" @click="editPost(getPost.title)">Изменить</v-btn>
                </div>
                
                <div v-if="checkLikes(getPost.title)">
                    <v-btn color="primary" @click="like(getPost.title)">Лайк (xx)</v-btn>
                </div>
            </v-card-actions>
        </div>
    </v-card>
</template>

<script>
export default {
    data () {
        return {
            post: {
                title: '',
                body: '',
                user_id: '',
            },
            getPosts: {
                title: '',
                body: '',
                user_id: '',
            },
            user_id: '',
            likes: {}
        }
    },

    created() {
        this.user_id = JSON.parse(localStorage.getItem('user')).id
        console.log("USer id " + this.user_id)
        axios.put('/api/auth/getMyPosts/' + this.user_id, { 'user': this.user_id }, {
            headers: {
                'X-CSRF-TOKEN': window.Laravel.csrfToken
            }
        })
        .then(res => {
            this.getPosts = res.data.posts;
            this.likes = res.data.likes;
        })
    },
    methods: {
        checkLikes(title) {
            for (let i = 0; i < this.likes.length; i++) {
                if (this.likes[i].post_id == title) {
                    return false;
                }
            }
            return true
        },
        create() {
            this.post.user_id = JSON.parse(localStorage.getItem('user')).id
            console.log(this.prop)
            axios.post('/api/auth/createPost', this.post, {
                headers: {
                    'X-CSRF-TOKEN': window.Laravel.csrfToken
                }
            })
            then(res => {
                this.post.title = ""
                this.post.body = ""
            })
        },
        deletePost(title) {
            axios.get('/api/auth/deletePost/' + title, {
                headers: {
                    'X-CSRF-TOKEN': window.Laravel.csrfToken
                }
            })
            .then(res => {
                console.log(res)
            })
        },
        editPost(title) {

        },
        like(title) {
            console.log(this.user_id)
            axios.post('/api/auth/like', { 'user': this.user_id, 'post': title }, {
                headers: {
                    'X-CSRF-TOKEN': window.Laravel.csrfToken
                }
            })
            .then(res => console.log(res))
        }
    }
}
</script>