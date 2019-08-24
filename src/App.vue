<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>セットリスト</span>
        <span class="font-weight-light">on でじたる＜モックアップ＞</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <Concert v-model="rating"/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Concert from '@/components/Concert.vue';
import SetList from '@/components/SetList.vue';

@Component({
  components: {
      Concert,
      SetList,
  },
})

export default class Home extends Vue {
  public rating: number = 3;
}
</script>
<style scoped>

</style>
