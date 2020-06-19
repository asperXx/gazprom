<template>
    <div>
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
            }
        }
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
            // .then(res => console.log(res))
        }
    }
}
</script>