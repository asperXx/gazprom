<template>
  <v-container fluid class="d-flex flex-column justify-start">
    <div v-for="good in goods" :key="good.id">
      <v-row >
        <v-col class="d-flex justify-center align-center sm-col-12">
          <v-card class="mt-5 pa-6" max-width="900">
            <div>{{ good.title }}</div>
            <p>{{ good.description }}</p>
            <p>Цена: {{ good.price }}</p>
            <v-btn @click="buy(good.id)">Купить</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <hr>
    <h3>Мои товары</h3>
    <div v-for="mygood in mygoods" :key="mygood.id">
      <v-row >
        <v-col class="d-flex justify-center align-center sm-col-12">
          <v-card class="mt-5 pa-6" max-width="900">
            <div>{{ mygood.title }}</div>
            <p>{{ mygood.description }}</p>
            <p>Цена: {{ mygood.price }}</p>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
    
    data() {
        return {
            goods: [],
            user: JSON.parse(localStorage.getItem('user')),
            mygoods: [],
        }
    },

    created() {
        axios.get('/api/auth/getGoods')
        .then(res => {
            this.goods = res.data.shop
        })

        axios.get('/api/auth/getMyGoods/' + this.user.id)
        .then(res => {
            this.mygoods = res.data.goods
        })
    },

    methods: {
        buy(id) {
            axios.post('/api/auth/buygood', {'user_id': this.user.id, 'good_id': id})

            axios.get('/api/auth/getGoods')
            .then(res => {
                this.goods = res.data.shop
            })

            axios.get('/api/auth/getMyGoods/' + this.user.id)
            .then(res => {
                this.mygoods = res.data.goods
            })
        }
    }
};
</script>