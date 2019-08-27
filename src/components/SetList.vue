<template>
  <div>
    <v-rating small v-model=rating :readonly=rateDisabledStar></v-rating>
    <v-btn small color='gray' v-if=rateChanged @click=sendData>修正</v-btn>
    <v-container>
      <v-timeline dense clipped>
        <v-timeline-item fill-dot class='white--text mb-12' color='orange' large>
          <template v-slot:icon>
            <span>開演</span>
          </template>
        </v-timeline-item>

        <v-timeline-item
          class='mb-4'
          color='primary'
          icon-color='grey lighten-2'
          v-for='item in myList'
          v-bind:key='item.memo'
        >
          <v-row>
            <v-col cols='12'>
              <p v-if='item.item'>{{item.item.name}}</p>
              <div class='pa-4 pt-0 caption' v-if='item.memo'>
                <em>{{item.memo}}</em>
              </div>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item fill-dot class='white--text mb-12' color='orange' large>
          <template v-slot:icon>
            <span>終演</span>
          </template>
        </v-timeline-item>
      </v-timeline>
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
</style>
