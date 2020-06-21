<template>
<div>
  <v-card class="pa-3 d-flex flex-column justify-center mb-3" width="95%">
    <v-card-title>Достижения</v-card-title>
    <v-row>
      <div class="col-md-3 d-flex-wrap justify-center" v-for="(medal, id) in medals" :key="id">
        <p style="text-align: center;">
          {{ medal.title }}
          </p><v-avatar style="display:block; margin: 0 auto;">
            <img :src="medal.href" />
          </v-avatar>
      </div>
    </v-row>
  </v-card>
  <v-card class="pa-3 d-flex flex-column justify-center" width="95%">
    <v-card-title>Анкета пользователя</v-card-title>
    <form>  
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="user.name"
              :error-messages="nameErrors"
              label="Имя"
              required
              :disabled="disabled"
              prepend-inner-icon="mdi-face"          
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>

            <v-text-field
              v-model="user.second_name"
              :error-messages="secondNameErrors"
              label="Отчество"
              prepend-inner-icon="mdi-face"
              required
              :disabled="disabled"
              @input="$v.second_name.$touch()"
              @blur="$v.second_name.$touch()"
            ></v-text-field>

            <v-text-field
              v-model="user.last_name"
              :error-messages="lastNameErrors"
              label="Фамилия"
              prepend-inner-icon="mdi-face"
              required
              :disabled="disabled"
              @input="$v.last_name.$touch()"
              @blur="$v.last_name.$touch()"
            ></v-text-field>

            <v-text-field
              v-model="user.phone"
              prepend-inner-icon="mdi-phone"
              label="Номер телефона"
              required
              :disabled="disabled"
              @change="$v.phone.$touch()"
              @blur="$v.phone.$touch()"
            ></v-text-field>

            <v-text-field
              v-model="user.email"
              :error-messages="emailErrors"
              label="E-mail"
              prepend-inner-icon="mdi-email"
              required
              :disabled="disabled"
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>

          </v-col>

          <v-col cols="12" sm="6">
              
            <v-select
              v-model="user_dep.id"
              :value="user_dep.id"
              :items="dep_all" 
              item-value="id" 
              item-text="name"

              :error-messages="filialErrors"
              label="Филиал"
              prepend-inner-icon="mdi-laptop"
              required
              :disabled="disabled"
              @change="$v.filial.$touch()"
              @blur="$v.filial.$touch()"
            ></v-select>

            <v-select
              v-model="select"
              :items="items"
              :error-messages="selectErrors"
              label="Отдел"
              prepend-inner-icon="mdi-domain"
              required
              :disabled="disabled"
              value="IT"
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
            ></v-select>

            <v-text-field
              v-model="user_pos.position"
              label="Должность"
              prepend-inner-icon="mdi-professional-hexagon"
              required
              :disabled="disabled"
              @input="$v.position.$touch()"
              @blur="$v.position.$touch()"
            ></v-text-field>

            <v-text-field
              label="Код авторизации"
              prepend-inner-icon="mdi-barcode"
              :error-messages="codeErrors"
              counter="7"        
              value="460-001"
              required
              :disabled="disabled"
              @input="$v.code.$touch()"
              @blur="$v.code.$touch()"
            ></v-text-field>

          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="user.desc"
              clearable
              prepend-inner-icon="mdi-information-variant"
              clear-icon="mdi-cancel"
              label="Обо мне"
              :disabled="disabled"
              
            ></v-text-field>

          </v-col>

        </v-row>
      
      <v-btn class="mr-4 mb-12" @click="disabled=false" v-if="disabled" color="primary">Изменить</v-btn>
      <div v-else>
        <v-btn class="mr-4 mb-12" @click="updateUser(); disabled=true" color="primary">Заполнить</v-btn>
        <v-btn class="mr-4 mb-12" @click="disabled=true">Отменить</v-btn>
      </div>      
    </form>
    <div>
      
    </div>

  </v-card>
  <v-card class="pa-3 d-flex flex-column justify-center mt-3 mb-3" width="95%">
    <v-card-title>Отправить комплимент</v-card-title>
    <form class="pb-2 mb-2">  
        <v-row>
          <v-col cols="12" sm="6" lg="3">
            <v-text-field
              v-model="getterEmail"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
            <v-col cols="12" lg="3" sm="6">
              <v-select
              v-model="quality"
                :items="filter"
                label="Качество"
                ></v-select>
              </v-col>
            <v-col cols="12" lg="3" sm="6">
              <v-text-field
              v-model="getterFires"
              label="Кол-во огоньков"
              required
              append-icon="fa-fire"
            ></v-text-field>
            </v-col>
            <v-col cols="12" lg="3" sm="12">
              <v-btn class="mt-3" @click="sendFlame" v-if="disabled" color="primary">Отправить</v-btn>
            </v-col>
        </v-row>
      </form>
  </v-card>
</div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    props: ['flame'],

    mixins: [validationMixin],
    validations: {
      name: { required },
      email: { required, email },
      select: { required },
      second_name: { required },
      last_name: { required },
      filial: { required },
      code: { required, maxLength: maxLength(7) },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({
      medals: [],
      filter: ['Динамичность', 'Надежность', 'Компетентность', 'Командность', 'Ответственность' ],
      user: JSON.parse(localStorage.getItem('user')),
      user_pos: JSON.parse(localStorage.getItem('user_pos')),
      user_dep: JSON.parse(localStorage.getItem('user_dep')),
      getterFires: 1,
      getterEmail: '',
      quality: 'Динамичность',
      dep_all: [
        // 'Газпромбанк',
        // 'Газпромбанк СПб'
      ],

      // user_deps: [
      //       'Газпромбанк',
      //       'Другой'
      //   ],

      select: null,
      disabled: true,
      items: [
        'HR',
        'IT',
        'Финансовый отдел',
        'Кредитный отдел',
      ],
      filial_items: [
        'Северный',
        "Южный",
        "Восточный",
        "Западный"
      ],
      focus: '',
      type: 'month',
      typeToLabel: {
        month: 'Месяц',
        week: 'Неделя',
        day: 'День',
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: ['Встреча', 'Праздник', 'PTO', 'Пустешествие', 'Событие', 'День рождения', 'Конференция', 'Вечеринка'],
    }),

    computed: {
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Выберете Ваш отдел!')
        return errors
      },
      filialErrors () {
        const errors = []
        if (!this.$v.filial.$dirty) return errors
        !this.$v.filial.required && errors.push('Выберете Ваш филиал!')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.required && errors.push('Вы не заполнили поле с именем!')
        return errors
      },
      secondNameErrors () {
        const errors = []
        if (!this.$v.second_name.$dirty) return errors
        !this.$v.second_name.required && errors.push('Вы не заполнили поле с отчеством!')
        return errors
      },
      lastNameErrors () {
        const errors = []
        if (!this.$v.last_name.$dirty) return errors
        !this.$v.last_name.required && errors.push('Вы не заполнили поле с фамилией!')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Неверный адрес электронной почты!')
        !this.$v.email.required && errors.push('Введите адрес электронной почты!')
        return errors
      },
      codeErrors () {
        const errors = []
        if (!this.$v.code.$dirty) return errors
        !this.$v.code.maxLength && errors.push('Вы не ввели неверный код авторизации!')
        !this.$v.code.required && errors.push('Вы не ввели код авторизации!')
        return errors
      },
    },
    
    created() {
      axios.get('/api/auth/depAll')
      .then(res => {

        for (let i = 0; i < res.data.dep_all.length; i++) {
          this.dep_all.push(res.data.dep_all[i].department)
        }

      });

      for (let i = 0; i < this.user_dep.length; i++) {
        this.user_deps.push(this.user_dep[i].department);
      }

      axios.get('/api/auth/getMedals/' + this.user.id)
      .then(res => {
        this.medals = res.data.user_medals
        console.log(this.medals)
      })
    },

    methods: {
      updateUser() {

        var data = {
          user: this.user,
          user_dep: this.user_dep,
          user_pos: this.user_pos
        }

        axios.put('/api/auth/updateUser/' + this.user.id, data)
        .then(res => {
          localStorage.setItem('user', JSON.stringify(res.data.user[0]))
        })
      },

      sendFlame() {
        axios.post('/api/auth/sendFlame/', {user: JSON.parse(localStorage.getItem('user')).id, email: this.getterEmail, flames: this.getterFires })
        .then(res => {
          console.log(res.data.user[0])
          this.getterEmail = ""
          localStorage.setItem('user', JSON.stringify(res.data.user[0]))
          // this.$root.flame = res.data.user[0].flame
          // this.$emit('getFlame', flame);
        })
      }
    }
  }
</script>