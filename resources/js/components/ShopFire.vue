<template>
    <v-container flex-column>
      <v-select
      :items="items"
      label="Сортировка"
      v-model="itemGoods"
      @change="sortGoods"
      ></v-select>
        <h2>Магазин поощрений</h2>
        <v-row class="row_row">
            <v-col cols="12" md="8" lg="4" class="d-flex flex-row">
              <v-card class="card pa-3" v-for="good in goods" :key="good.id">
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
            itemGoods: '',
            items: ['По возрастанию цены', 'По убыванию цены'],
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
        sortGoods() {
          if (this.itemGoods === 'По возрастанию цены') {
            this.goods.sort((a, b) =>  a.price > b.price ? 1 : -1)
          } else {
            this.goods.sort((a, b) =>  a.price < b.price ? 1 : -1)
          }
        },
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
  .card {position: relative; min-width: 400px; margin: 30px}
  .text {color: #fff !important}
  .button {bottom:6px;}
  .pic {display:block; position: relative; box-sizing: border-box; width:100%; height:200px; background-size: contain; background-position: center center;}
  .desc_wrap {height: 50px; position: relative; overflow: hidden;}
</style>