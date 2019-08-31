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
      <v-layout>
        <Rating :rating=rate :id=1 />
      </v-layout>
    </v-container>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import Rating from '@/components/Rating.vue';

@Component({
  components: {
    Rating,
  },
})

export default class SetList extends Vue {
  public info: any = this.$attrs.value;
  public myList: any[] = this.info.items;
  private rate: number = 1;
  private id: number = 1;
}
</script>
<style scoped>
li {
  list-style-type: none;
}
</style>
