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

             <ckeditor :editor="editor" v-model="post.body" :config="editorConfig"></ckeditor>
            
        </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn v-if="!isEdit" color="primary" @click="updatePost" to="/shareExperience">Изменить</v-btn>
            <v-btn v-if="isEdit" color="primary" @click="create" to="/shareExperience">Создать</v-btn>
        </v-card-actions>
        <hr><br>

        <!-- <h2>Мои статьи</h2> -->
        <div v-for="(getPost, id) in getPosts" :key="getPost.id">
            <router-link :to="{ name: 'showPost', params: { id: getPost.id } }">
                <h3> {{ getPost.title }} </h3>
            </router-link>
            <p><span v-html="getPost.body"></span></p>
            <v-card-actions>
                <v-spacer></v-spacer>
                <div v-if="getPost.user_id == user_id">
                <v-btn color="primary" @click="deletePost(getPost.id)">Удалить</v-btn>
                <v-btn color="primary" @click="editPost(getPost.id)">Изменить</v-btn>
                </div>
                
                <div v-if="checkLikes(getPost.id)">
                    <v-btn color="primary" @click="like(getPost.id)">Лайк (xx)</v-btn>
                </div>
            </v-card-actions>
        </div>
    </v-card>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
    data () {
        return {
            isEdit: 'false',
            editor: ClassicEditor,
            editorConfig: {
                // The configuration of the editor.
            },
            post: {
                title: '',
                body: '',
                user_id: '',
                id: ''
            },
            getPosts: {
                title: '',
                body: '',
                user_id: '',
                id: ''
            },
            user_id: '',
            likes: {}
        }
    },

    mounted() {
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
        checkLikes(id) {
            for (let i = 0; i < this.likes.length; i++) {
                if (this.likes[i].post_id == id) {
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
            }).
            then(res => {
                console.log(this.getPosts)
                this.post.title = ""
                this.post.body = ""
                
                this.user_id = JSON.parse(localStorage.getItem('user')).id
                
                axios.put('/api/auth/getMyPosts/' + this.user_id, { 'user': this.user_id }, {
                    headers: {
                        'X-CSRF-TOKEN': window.Laravel.csrfToken
                    }
                })
                .then(res => {
                    this.getPosts = res.data.posts;
                    this.likes = res.data.likes;
                })
            })
        },
        deletePost(id) {
            axios.get('/api/auth/deletePost/' + id, {
                headers: {
                    'X-CSRF-TOKEN': window.Laravel.csrfToken
                }
            })
            .then(res => {
                console.log(res)
                this.user_id = JSON.parse(localStorage.getItem('user')).id
                
                axios.put('/api/auth/getMyPosts/' + this.user_id, { 'user': this.user_id }, {
                    headers: {
                        'X-CSRF-TOKEN': window.Laravel.csrfToken
                    }
                })
                .then(res => {
                    this.getPosts = res.data.posts;
                    this.likes = res.data.likes;
                })
            })
        },
        editPost(id) {
            this.isEdit = !this.isEdit
            axios.get('/api/auth/showPost/' + id, {
                headers: {
                    'X-CSRF-TOKEN': window.Laravel.csrfToken
                }
            }).
            then(res => {
                this.post.title = res.data.post[0].title
                this.post.body = res.data.post[0].body
                this.post.id = res.data.post[0].id
                console.log(this.post)
            }) 
        },
        updatePost() {
            axios.put('/api/auth/updatePost/' + this.post.id, {
                'title': this.post.title, 
                'body': this.post.body
                }, 
                {
                headers: {
                    'X-CSRF-TOKEN': window.Laravel.csrfToken
                }
            })
            .then(res => {
                console.log(res)
                this.post.title = ""
                this.post.body = ""
                axios.put('/api/auth/getMyPosts/' + this.user_id, { 'user': this.user_id }, {
                    headers: {
                        'X-CSRF-TOKEN': window.Laravel.csrfToken
                    }
                })
                .then(res => {
                    this.getPosts = res.data.posts;
                    this.likes = res.data.likes;
                    this.isEdit = !this.isEdit
                })
            })
        },
        like(id) {
            console.log(this.user_id)
            axios.post('/api/auth/like', { 'user': this.user_id, 'post': id }, {
                headers: {
                    'X-CSRF-TOKEN': window.Laravel.csrfToken
                }
            })
            .then(res => {
                console.log(res)

                this.user_id = JSON.parse(localStorage.getItem('user')).id
                
                axios.put('/api/auth/getMyPosts/' + this.user_id, { 'user': this.user_id }, {
                    headers: {
                        'X-CSRF-TOKEN': window.Laravel.csrfToken
                    }
                })
                .then(res => {
                    this.getPosts = res.data.posts;
                    this.likes = res.data.likes;
                })
            })
        }
    }
}
</script>