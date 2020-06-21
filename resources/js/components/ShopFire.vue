<template>
    <v-container flex-column>
        <h2>Магазин поощрений</h2>
        <v-row class="row_row">
            <v-col cols="12" sm="6" md="4" lg="3" v-for="good in goods" :key="good.id">
              <v-card class="card pa-3">
                <v-card-title>{{ good.title }}</v-card-title>
                <v-card-text>
                  <!-- <div :style="getBack(item.pic)" width="100%" class="pic"></div> -->
                  <p class="desc_wrap">{{ good.description }}</p>
                </v-card-text>
                <v-card-actions class="alCenter">
                  <v-btn color="#0D356C" class="button" @click="buy(good.id)">
                    <v-icon color="red">mdi-fire</v-icon>
                    <v-card-text class="text">{{ good.price }}</v-card-text>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
        </v-row>
      
    <hr>
    <h3>Мои товары</h3>

        <v-row >
          <v-col class="d-flex  justify-center align-center sm-col-12" >
            <v-card class="mt-5 pa-6" max-width="900" v-for="mygood in mygoods" :key="mygood.id">
              <div>{{ mygood.title }}</div>
              <p>{{ mygood.description }}</p>
              <p>Цена: {{ mygood.price }}</p>
            </v-card>
          </v-col>
        </v-row>
     
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

<style scoped>
  .card {position: relative; min-width: 400px;}
  .text {color: #fff !important}
  .button {margin: 0 auto}
  .pic {display:block; position: relative; box-sizing: border-box; width:100%; height:200px; background-size: contain; background-position: center center;}
  .desc_wrap {height: 50px; position: relative; overflow: hidden;}
</style>