<template>
    <div>
        <h2>Магазин поощрений</h2>
        <v-row class="row_row">
            <v-col cols="12" sm="6" md="4" lg="3" v-for="(item, id) in items" :key="id">
              <v-card class="card pa-3">
                <v-card-title>{{item.name}}</v-card-title>
                <v-card-text>
                  <div :style="getBack(item.pic)" width="100%" class="pic"></div>
                  <p class="desc_wrap">{{item.desc}}</p>
                </v-card-text>
                <v-card-actions class="alCenter">
                  <v-btn color="#0D356C" class="button">
                    <v-icon color="red">mdi-fire</v-icon>
                    <v-card-text class="text">{{item.price}}</v-card-text>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods : {
      getBack(pic) {
        let style = 'background-image: url(' + pic + ');'
        return style
      }
    }
}
</script>

<style scoped>
  .card {position: relative;}
  .text {color: #fff !important}
  .button {margin: 0 auto}
  .pic {display:block; position: relative; box-sizing: border-box; width:100%; height:200px; background-size: contain; background-position: center center;}
  .desc_wrap {height: 50px; position: relative; overflow: hidden;}
</style>

