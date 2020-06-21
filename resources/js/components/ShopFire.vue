<template>
    <v-container flex-column>
      <v-row>
        <v-dialog
      v-model="dialog"
      width="500"
      class="text-center buttonRules"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Правила
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Политика использования Огоньков
        </v-card-title>

        <v-card-text>
            <ol>
                <li>Каждому сотруднику за вход в систему выдаётся по 1 огоньку 1 раз в день.</li>
                <li>Валюта может быть использована сотрудниками в качестве комплемента своим коллегам. Сотрудник выбирает качество коллеги, характеризующее его работу (компетентность, надежность, динамичность, командность, ответственность), и указывает количество огоньков для передачи.</li>
                <li>При внесении статьи в пункт «Предложения», сотруднику начисляются огоньки, в зависимости от типа статьи:
• решение проблемы - 50 огоньков, в случае, если же идея принимается ответственным подразделением (решение остается на сайте, но голосование закрывается) сотрудник получает общую сумму огоньков, равную количеству огоньков, которым проголосовали за его статью (блок предложения выделяется синим градиентом в зависимости от количества набранных огоньков).</li>
                <li>Проблема – 25 огоньков, в случае же, если проблема признана сотрудниками актуальной (блок проблемы выделяется красным градиентом при 100 набранных огоньков), то огоньки набранные статьей и последующие начисляются автору.</li>
                <li>При написании статьи в пункте «Делимся опытом», пользователь получает фиксированную сумму – 50 огоньков + лайки за статью, конвертированные в огоньки в соотношении 1:1.
Огоньки можно тратить во внутреннем магазине, где представлены различные мерчи, купоны и сертификаты от партнеров.</li>
                <li>В случае, когда пользователь проголосовал огоньками за решение проблемы, которое было принято ответственным подразделением к исполнению – пользователь получает удвоенное количество огоньков, инвестированных в статью.</li>
            </ol> 
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Закрыть
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
      </v-row>
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
          dialog: false,
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
  .card {position: relative; min-width: 400px; margin: 30px}
  .text {color: #fff !important}
  .button {bottom:6px;}
  .pic {display:block; position: relative; box-sizing: border-box; width:100%; height:200px; background-size: contain; background-position: center center;}
  .desc_wrap {height: 50px; position: relative; overflow: hidden;}
</style>