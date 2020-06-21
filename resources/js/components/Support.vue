<template>
    <div class="wrap_form">
      <v-card class="pa-5 ma-2">
        <v-card-title>Поддержка</v-card-title>
        <!-- <hr> -->
        <div>
          <!-- <h3>Мои обращения</h3> -->
          <div v-for="(feedback, id) in feedbacks" :key="id">
            <p>{{ feedback.created_at }}</p>
            <p>{{ feedback.feedback }}</p>
          </div>
        </div>
        <hr>
        <h3>Отправить обращение</h3>
        <ValidationObserver ref="observer" v-slot="{ validate, reset }">
            <form>
                <ValidationProvider v-slot="{ errors }" name="title" rules="required|min:10">
                    <v-text-field
                    v-model="name"
                    :error-messages="errors"
                    label="Тема обращения"
                    required
                    ></v-text-field>
                </ValidationProvider>
                <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
                    <v-text-field
                    v-model="email"
                    :error-messages="errors"
                    label="E-mail для обратной связи"
                    required
                    ></v-text-field>
                </ValidationProvider>
                <ValidationProvider v-slot="{ errors }" name="text" rules="required">
                    <v-textarea
                        v-model="text"
                        label="Текст обращения"
                        :error-messages="errors"
                        aria-required=""
                    ></v-textarea>
                </ValidationProvider>
                <v-btn class="mr-4 but" color="#0D356C" @click="submit">Отправить</v-btn>
            </form>
        </ValidationObserver>
      </v-card>

    </div>
  
</template>

<script>
  import { required, email, min } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('required', {
    ...required,
    message: 'Поле не может быть пустым!',
  })

  extend('min', {
    ...min,
    message: 'Название обращение не может быть короче 10 символов!',
  })

  extend('email', {
    ...email,
    message: 'Неверный адрес электронной почты!',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      name: '',
      email: '',
      text: '',
      feedbacks: []
    }),

    created() {
      axios.get('api/auth/getMyFeedbacks/' + JSON.parse(localStorage.getItem('user')).id)
      .then(res => {
        console.log(res.data.feedbacks[0])
        this.feedbacks = res.data.feedbacks
      })
    },

    methods: {
      submit () {
        // if (this.$refs.observer.validate()) {
          axios.post('/api/auth/postFeedback', {feedback: this.text, user_id: JSON.parse(localStorage.getItem('user')).id})
          .then(res => console.log(res))
        // }
      },
      clear () {
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = null
        this.$refs.observer.reset()
      },
    },
  }
</script>

<style scoped>
    .wrap_form {width: 100%;}
    .but {color:#fff}
</style>