<template>
    <v-container class="flex-column">
        <survey />
    <div class="sobaka">
      <h2>Проголосовали</h2>
      <v-progress-linear
      color="blue-grey"
      height="25"
      class="mb-2"
      :value="item1p"
      >
      <strong>Удовлетворен: {{ item1p }}%</strong>
      </v-progress-linear>
      <v-progress-linear
      color="blue-grey"
      height="25"
      class="mb-2"
      :value="item2p"
      >
      <strong>Скорее удовлетворен: {{ item2p }}%</strong>
      </v-progress-linear>
      <v-progress-linear
      color="blue-grey"
      height="25"
      class="mb-2"
      :value="item3p"
      >
      <strong>Скорее не удовлетворен: {{ item3p }}%</strong>
      </v-progress-linear>
      <v-progress-linear
      color="blue-grey"
      height="25"
      class="mb-2"
      :value="item4p"
      >
      <strong>Неудовлетворен: {{ item4p }}%</strong>
      </v-progress-linear>
    </div>
  <br>
    </v-container>
</template>

<script>
import survey from './Survey'
export default {
    components: {
        survey
    },
    data() {
        return{
            item1: 0,
            item2: 0,
            item3: 0,
            item4: 0,
            item1p: 0,
            item2p: 0,
            item3p: 0,
            item4p: 0,
        }
    },
    created() {
        axios.get('api/auth/checkStat')
        .then(res => {
            // console.log(res.data.results[7].result)

            for(let i = 0; i < res.data.results.length; i++) {
                if (res.data.results[i].result == 'item1') {
                    this.item1++;
                }
                else if (res.data.results[i].result == 'item2') {
                    this.item2++;
                }
                else if (res.data.results[i].result == 'item3') {
                    this.item3++;
                }
                else if (res.data.results[i].result == 'item4') {
                    this.item4++;
                }
            }
            this.item1p = this.item1/(this.item1 + this.item2 + this.item3 + this.item4) * 100; 
            this.item2p = this.item2/(this.item1 + this.item2 + this.item3 + this.item4) * 100; 
            this.item3p = this.item3/(this.item1 + this.item2 + this.item3 + this.item4) * 100;
            this.item4p = this.item4/(this.item1 + this.item2 + this.item3 + this.item4) * 100;
        })

    }
}
</script>

<style scoped>
    .sobaka {
        width: 80%;
        margin-top: 10%;
    }
</style>