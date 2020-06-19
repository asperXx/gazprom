<template>
    <div>
        <div v-for="(getProp, id) in getProps" :key="getProp.id">
            <router-link :to="{ name: 'showTicket', params: { title: getProp.title } }">
            <h3>{{ getProp.title }}</h3>
            </router-link>
            <p>{{ getProp.body }}</p>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="deleteProp(getProp.title)">Удалить</v-btn>
            </v-card-actions>
        </div>
        <v-card-text>
        <v-form>
            <v-text-field
            label="Название"
            name="title"
            type="text"
            v-model="prop.title"
            ></v-text-field>

            <v-text-field
            id="body"
            label="Текст"
            name="body"
            type="text"
            v-model="prop.body"
            ></v-text-field>
        </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="create" v-on:keypress.enter="login">Создать</v-btn>
        </v-card-actions>
    </div>
</template>

<script>
export default {
    data () {
        return {
            prop: {
                title: '',
                body: '',
                user_id: '',
            },
            getProps: {
                title: '',
                body: '',
            },
            user_id: '',
        }
    },

    created() {
        const user_id = JSON.parse(localStorage.getItem('user')).id
        axios.get('/api/auth/getMyProps/' + user_id, {
            headers: {
                'X-CSRF-TOKEN': window.Laravel.csrfToken
            }
        })
        .then(res => {
            this.getProps = res.data.tickets;
        })
    },
    methods: {
        create() {
            this.prop.user_id = JSON.parse(localStorage.getItem('user')).id
            console.log(this.prop)
            axios.post('/api/auth/createProp', this.prop, {
                headers: {
                    'X-CSRF-TOKEN': window.Laravel.csrfToken
                }
            })
        },
        deleteProp(title) {
            axios.get('/api/auth/deleteProp/' + title, {
                headers: {
                    'X-CSRF-TOKEN': window.Laravel.csrfToken
                }
            })
            .then(res => {
                console.log(res)
                this.$router.push("/proposal").catch(()=>{});
            })
        }
    }
}
</script>