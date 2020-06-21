<template>
  <div>
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
      <v-col cols="12" sm="6" md="4" v-for="(good, id) in goods" :key="id">
        <v-card class="card pa-3" elevation="5">
          <v-card-title>{{good.title}}</v-card-title>
          <v-card-text>
            <div :style="getBack(good.img)" width="100%" class="pic"></div>
            <p class="desc_wrap">{{good.description}}</p>
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

    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(mygood, id) in mygoods" :key="id">
        <v-card class="card pa-3" elevation="5">
          <v-card-title>{{mygood.title}}</v-card-title>
          <v-card-text>
            <div :style="getBack(mygood.img)" width="100%" class="pic"></div>
            <p class="desc_wrap">{{mygood.description}}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

  </div>
</template>

<script>
export default {
  data() {
    return {
      itemGoods: "",
      items: ["По возрастанию цены", "По убыванию цены"],
      goods: [],
      sortedGoods: [],
      user: JSON.parse(localStorage.getItem("user")),
      mygoods: []
    };
  },

  created() {
    axios.get("/api/auth/getGoods").then(res => {
      console.log(res)
      this.goods = res.data.shop;
    });

    axios.get("/api/auth/getMyGoods/" + this.user.id)
    .then(res => {
      this.mygoods = res.data.goods;
    })

  },

  methods: {
    getBack(pic) {
      let style = "background-image: url(" + pic + ");";
      return style;
    },

    sortGoods() {
      if (this.itemGoods === "По возрастанию цены") {
        this.goods.sort((a, b) => (a.price > b.price ? 1 : -1));
      } else {
        this.goods.sort((a, b) => (a.price < b.price ? 1 : -1));
      }
    },
    buy(id) {
      axios.post("/api/auth/buygood", { user_id: this.user.id, good_id: id })
      .then(res => {
        localStorage.setItem('user', JSON.stringify(res.data.user[0]))
      });

      axios.get("/api/auth/getGoods").then(res => {
        this.goods = res.data.shop;
      });

      axios.get("/api/auth/getMyGoods/" + this.user.id).then(res => {
        this.mygoods = res.data.goods;
      });
    }
  }
};
</script>

<style scoped>
/* .card {
  position: relative;
  min-width: 400px;
  margin: 0px;
} */
.text {
  color: #fff !important;
}
.button {
  bottom: 15px;
  position: absolute;
  right: 15px;
}
.pic {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  background-size: contain;
  background-position: center center;
}
.desc_wrap {
  height: 50px;
  position: relative;
  overflow: hidden;
}
</style>