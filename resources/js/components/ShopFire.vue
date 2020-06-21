<template>
    <div style="width:100%;"> 
         <v-row class="align-items-center justify-content-between">
           <v-col cols="4">
             <h2>Магазин поощрений</h2>
             </v-col>
             <v-col cols="4">
               <v-select
      :items="items"
      label="Сортировка"
      v-model="itemGoods"
      @change="sortGoods"
      ></v-select>
             </v-col>
         </v-row>
        <v-row>
            <v-col v-for="good in goods" :key="good.id" cols="12" lg="6">
              <v-card class="card">
                <v-img>
                  <img height="200px" src="https://avatars.mds.yandex.net/get-bunker/128809/2242b0f7baf7f84a7d0d6cd6020acd311fba9df8/orig">
                </v-img>
                <div class=""></div>
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
        </div>
</template>

<script>
export default {
    
    data() {
        return {
            itemGoods: '',
            items: ['По возрастанию цены', 'По убыванию цены'],
            goods: [],
            sortedGoods:[],
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
            this.goods.sort((a, b) =>  a.price < b.price ? 1 : -1)
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
  .card {position: relative; min-width: 400px; margin: 0px;}
  .text {color: #fff !important}
  .button {bottom:15px; position: absolute; right: 15px}
  .pic {display:block; position: relative; box-sizing: border-box; width:100%; height:200px; background-size: contain; background-position: center center;}
  .desc_wrap {height: 50px; position: relative; overflow: hidden;}
</style>