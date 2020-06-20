<template>
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
              v-model="user_dep"
              :value="user_dep"
              :items="user_deps" 
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
        <v-btn class="mr-4 mb-2" @click="submit; disabled=true" color="primary">Заполнить</v-btn>
        <v-btn class="mr-4 mb-12" @click="disabled=true">Отменить</v-btn>
      </div>      
    </form>

    <!-- <div class="mt-4">
      <v-row class="fill-height">
        <v-col>
          <v-sheet height="64" outlined>
            <v-toolbar flat color="white">
              <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
                Сегодня
              </v-btn>
              <v-btn fab text small color="grey darken-2" @click="prev">
                <v-icon small>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn fab text small color="grey darken-2" @click="next">
                <v-icon small>mdi-chevron-right</v-icon>
              </v-btn>
              <v-toolbar-title v-if="$refs.calendar">
                {{ $refs.calendar.title }}
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-menu bottom right>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    outlined
                    color="grey darken-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <span>{{ typeToLabel[type] }}</span>
                    <v-icon right>mdi-menu-down</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="type = 'day'">
                    <v-list-item-title>День</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'week'">
                    <v-list-item-title>Неделя</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'month'">
                    <v-list-item-title>Месяц</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-toolbar>
          </v-sheet>
          <v-sheet height="600">
            <v-calendar
              ref="calendar"
              v-model="focus"
              color="primary"
              :events="events"
              :event-color="getEventColor"
              :type="type"
              @click:event="showEvent"
              @click:more="viewDay"
              @click:date="viewDay"
              @change="updateRange"
            ></v-calendar>
            <v-menu
              v-model="selectedOpen"
              :close-on-content-click="false"
              :activator="selectedElement"
              offset-x
            >
              <v-card
                color="grey lighten-4"
                min-width="350px"
                flat
              >
                <v-toolbar
                  :color="selectedEvent.color"
                  dark
                >
                  <v-btn icon>
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </v-toolbar>
                <v-card-text>
                  <span v-html="selectedEvent.details"></span>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    text
                    color="secondary"
                    @click="selectedOpen = false"
                  >
                    Отмена
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </v-sheet>
        </v-col>
      </v-row>
    </div> -->

    <div>
      
    </div>

  </v-card>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
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
      user: JSON.parse(localStorage.getItem('user')),
      user_pos: JSON.parse(localStorage.getItem('user_pos')),
      user_dep: JSON.parse(localStorage.getItem('user_dep')).department,

        user_deps: [
            'Газпромбанк',
            'Другой'
        ],

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
    mounted () {
      this.$refs.calendar.checkChange()
    },
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

    methods: {
      viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = ''
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          setTimeout(() => this.selectedOpen = true, 10)
        }

        if (this.selectedOpen) {
          this.selectedOpen = false
          setTimeout(open, 10)
        } else {
          open()
        }

        nativeEvent.stopPropagation()
      },
      updateRange ({ start, end }) {
        const events = []

        const min = new Date(`${start.date}T00:00:00`)
        const max = new Date(`${end.date}T23:59:59`)
        const days = (max.getTime() - min.getTime()) / 86400000
        const eventCount = this.rnd(days, days + 20)

        for (let i = 0; i < eventCount; i++) {
          const allDay = this.rnd(0, 3) === 0
          const firstTimestamp = this.rnd(min.getTime(), max.getTime())
          const first = new Date(firstTimestamp - (firstTimestamp % 900000))
          const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
          const second = new Date(first.getTime() + secondTimestamp)

          events.push({
            name: this.names[this.rnd(0, this.names.length - 1)],
            start: first,
            end: second,
            color: this.colors[this.rnd(0, this.colors.length - 1)],
            timed: !allDay,
          })
        }

        this.events = events
      },
      rnd (a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
      },
    },
  }
</script>