<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">評価ダイアログ</v-card-title>
          <v-divider />
          <div style="padding: 1.5em">
            <ul>
              <li>★1  記憶にある.</li>
              <li>★2  二次資料を確認した.</li>
              <li>★3  一次資料を確認した.</li>
            </ul>
          </div>
          <div><center><v-rating v-model="rate" :length=3></v-rating> </center></div>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="green darken-1" text @click="oncancel">キャンセル</v-btn>
          <v-btn color="green darken-1" text @click="onok">評価</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <Rate :rating=setlistrate @evaluation="evaluation" />
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import Rate from '@/components/Rate.vue';

@Component({
  components: {
    Rate,
  },
})

export default class Rating extends Vue {
  @Prop({}) public rating!: number;
  @Prop({}) public id!: number;

  public dialog: boolean = false;
  private rate: number = 1 ;
  private setlistrate: number = 0;

  public mounted() {
    this.setlistrate = this.rating;
  }

  public evaluation( ) {
    this.dialog = true;
  }
  private oncancel() {
    this.dialog = false;
  }
  private onok() {
    this.dialog = false;
    this.setlistrate += this.rate;
    this.rate = 1;
  }
}
</script>
<style scoped>
li {
  list-style-type: none;
}
</style>
