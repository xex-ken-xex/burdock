<template>


  <div>
  <v-card
    class="mx-auto"
  >
<v-toolbar color="teal" dark>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>弾き語りコンサート2019</v-toolbar-title>

          <div class="flex-grow-1"></div>

          <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-toolbar>
                <v-img src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"></v-img>
        <v-card-text>
          <h2 class="title primary--text">弾き語りコンサート2019</h2>
          <v-subheader>
          2019/04/20 開演：17：30 開場：17：00
          </v-subheader>
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
      >
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
        <v-list-item-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>
      </v-list-item>
    </v-list>

          <v-rating
            :value="4"
            dense
            color="orange"
            background-color="orange"
            hover
            class="mr-2"
          ></v-rating>
          <em>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</em>
        </v-card-text>
        <v-card-title>
          <v-btn><span>松戸市文化会館：『森のホール２１』</span><v-icon>place</v-icon>
    </v-btn>
        </v-card-title>
    <SetList/>
  </v-card>
  </div>
</template>

<script lang="ts">

import {Component, Vue} from 'vue-property-decorator';
import SetList from '@/components/SetList.vue';

@Component({
components: {
    SetList,
},
})

export default class Concert extends Vue {
  public rating: number = 3;

  public items: any[] = [
          { icon: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
        ];
}
</script>

<style scoped>

</style>
