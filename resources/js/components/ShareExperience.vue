<template>
    <v-card width="95%" class="pa-6">
        <h2>Мои статьи</h2>
        <div v-for="(getPost, id) in getPosts" :key="getPost.id">
            <router-link :to="{ name: 'showPost', params: { title: getPost.title } }">
                <h3> {{ getPost.title }}</h3>
            </router-link>
            <p>{{ getPost.body }}</p>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="deletePost(getPost.title)">Удалить</v-btn>
                <v-btn color="primary" @click="editPost(getPost.title)">Изменить</v-btn>
            </v-card-actions>
        </div>
        <hr>
        <h2>Создать статью</h2>
        <v-card-text>
        <v-form>
            <v-text-field
            label="Название"
            name="title"
            type="text"
            v-model="post.title"
            ></v-text-field>

            <v-text-field
            id="body"
            label="Текст"
            name="body"
            type="text"
            v-model="post.body"
            ></v-text-field>
        </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="create" v-on:keypress.enter="login">Создать</v-btn>
        </v-card-actions>
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
            },
            user_id: '',
        }
    },

    created() {
        const user_id = JSON.parse(localStorage.getItem('user')).id
        axios.get('/api/auth/getMyPosts/' + user_id, {
            headers: {
                'X-CSRF-TOKEN': window.Laravel.csrfToken
            }
        })
        .then(res => {
            this.getPosts = res.data.posts;
        })
    },
    methods: {
        create() {
            this.post.user_id = JSON.parse(localStorage.getItem('user')).id
            console.log(this.prop)
            axios.post('/api/auth/createPost', this.post, {
                headers: {
                    'X-CSRF-TOKEN': window.Laravel.csrfToken
                }
            })
            // .then(res => console.log(res))
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

        }
    }
}
</script>