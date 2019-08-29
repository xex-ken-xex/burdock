<template>
  <div>
    <v-container>
      <p>演目</p>
      <ul>
        <li v-for="(item, i) in myList" :key="i" v-if='item.item'><v-icon>music_note</v-icon>{{item.item.name}}</li>
        <li v-else><v-icon>face</v-icon>{{item.memo}}</li>
      </ul>
    </v-container>
    <v-container>
      <v-rating small v-model=rating :readonly=rateDisabledStar></v-rating>
      <v-btn small color='gray' v-if=rateChanged @click=sendData>修正</v-btn>
    </v-container>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import SetlistJSON from './ConcertJSON';

@Component
export default class SetList extends Vue {
  public info: any = this.$attrs.value;
  public myList: any[] = this.info.items;
  public rating: number = parseInt(this.info.rates.value, 10);

  get rateChanged() {
    return this.rating !== parseInt(this.info.rates.value, 10);
  }
  get rateDisabledStar() {
    // credible 信頼できる→凍結
    // evaluation 評価
    return this.info.rates.state === 'credible';
  }
  public sendData() {
    alert( 'ID:' + this.info.id + 'に対して、評価値:' + this.rating + 'で更新する');
    this.info.rates.value = '' + this.rating;
  }
}
</script>
<style scoped>
li {
  list-style-type: none;
}
</style>
