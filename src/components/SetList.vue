<template>
<div>

<v-container>
  <v-timeline dense clipped>
      <v-timeline-item
        fill-dot
        class="white--text mb-12"
        color="orange"
        large
      >
        <template v-slot:icon>
          <span>開演</span>
        </template>
      </v-timeline-item>

      <v-timeline-item
        class="mb-6"
        hide-dot
      >
        <span>第一部</span>
      </v-timeline-item>

      <v-timeline-item class="mb-4" color="primary" icon-color="grey lighten-2" >
        <v-row justify="start">
          <v-col cols="5">『カントリーガール』
            <div class="pa-4 pt-0 caption"><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</em>
            </div><v-btn small color="gray">修正</v-btn>
          </v-col>
          <v-col cols="3">コメントです。よろしくおねがいします</v-col>
          <v-col right cols="2"><v-rating small v-model="rating"></v-rating></v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item class="mb-4" color="primary" icon-color="grey lighten-2" >
        <v-row justify="start">
          <v-col cols="5">『小さな魚』
            <div class="pa-4 pt-0 caption"><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</em>
            </div><v-btn small color="gray">修正</v-btn>
          </v-col>
          <v-col cols="3"></v-col>
          <v-col right cols="2"><v-rating small v-model="rating"></v-rating></v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item class="mb-4" color="primary" icon-color="grey lighten-2" >
        <v-row justify="start">
          <v-col cols="5">『バザール』
            <div class="pa-4 pt-0 caption"><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</em>
            </div><v-btn small color="gray">修正</v-btn>
          </v-col>
          <v-col cols="3"></v-col>
          <v-col right cols="2"><v-rating small v-model="rating"></v-rating></v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item class="mb-4" color="primary" icon-color="grey lighten-2" >
        <v-row justify="start">
          <v-col cols="5">『まっくら森の歌』</v-col>
          <v-col cols="3"></v-col>
          <v-col right cols="2"><v-rating small v-model="rating"></v-rating></v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item class="mb-4" color="primary" icon-color="grey lighten-2" >
        <v-row justify="start">
          <v-col cols="5">『土曜日のタマネギ』</v-col>
          <v-col cols="3"></v-col>
          <v-col right cols="2"><v-rating small v-model="rating"></v-rating></v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item class="mb-4" color="secondary" icon-color="grey lighten-2" >
        <v-row justify="start">
          <v-col cols="5">『ＫＩ・RA・RA』</v-col>
          <v-col cols="3">1階－う列－18番 男性</v-col>
          <v-col right cols="2"><v-rating small v-model="rating"></v-rating></v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item class="mb-4" color="secondary" icon-color="grey lighten-2" >
        <v-row justify="start">
          <v-col cols="5">『向こう側の王国』</v-col>
          <v-col cols="3">1階－R3列－4番 女性</v-col>
          <v-col right cols="2"><v-rating small v-model="rating"></v-rating></v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item class="mb-4" color="secondary" icon-color="grey lighten-2" >
        <v-row justify="start">
          <v-col cols="5">『DESERT MOON』</v-col>
          <v-col cols="3">2階－う列－15番 男性 </v-col>
          <v-col right cols="2"><v-rating small v-model="rating"></v-rating></v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item class="mb-4" color="secondary" icon-color="grey lighten-2" >
        <v-row justify="start">
          <v-col cols="5">『しっぽのきもち』
            <div class="pa-4 pt-0 caption"><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</em>
            </div><v-btn small color="gray">修正</v-btn>
          </v-col>
          <v-col cols="3">1階－あ列－11番 女性 </v-col>
          <v-col right cols="2"><v-rating small v-model="rating"></v-rating></v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item
        class="mb-6"
        hide-dot
      >
        <span>第二部</span>
      </v-timeline-item>

      <v-timeline-item class="mb-4" color="primary" icon-color="grey lighten-2" >
        <v-row justify="start">
          <v-col cols="5">『花さかニャンコ』</v-col>
          <v-col cols="3"> </v-col>
          <v-col right cols="2"><v-rating small v-model="rating"></v-rating></v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item class="mb-4" color="primary" icon-color="grey lighten-2" >
        <v-row justify="start">
          <v-col cols="5">『約束』</v-col>
          <v-col cols="3"> </v-col>
          <v-col right cols="2"><v-rating small v-model="rating"></v-rating></v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item class="mb-4" color="primary" icon-color="grey lighten-2" >
        <v-row justify="start">
          <v-col cols="5">『銀河通信』
            <div class="pa-4 pt-0 caption"><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</em>
            </div><v-btn small color="gray">修正</v-btn>
          </v-col>
          <v-col cols="3"> </v-col>
          <v-col right cols="2"><v-rating small v-model="rating"></v-rating></v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item class="mb-4" color="primary" icon-color="grey lighten-2" >
        <v-row justify="start">
          <v-col cols="5">『竜』</v-col>
          <v-col cols="3"> </v-col>
          <v-col right cols="2"><v-rating small v-model="rating"></v-rating></v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item class="mb-4" color="primary" icon-color="grey lighten-2" >
        <v-row justify="start">
          <v-col cols="5">『のらねこ』
            <div class="pa-4 pt-0 caption"><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</em>
            </div><v-btn small color="gray">修正</v-btn>
          </v-col>
          <v-col cols="3"> </v-col>
          <v-col right cols="2"><v-rating small v-model="rating"></v-rating></v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item class="mb-4" color="primary" icon-color="grey lighten-2" >
        <v-row justify="start">
          <v-col cols="5">『わたしは淋しい水でできてる』
            <div class="pa-4 pt-0 caption"><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</em>
            </div><v-btn small color="gray">修正</v-btn>
          </v-col>
          <v-col cols="3"> </v-col>
          <v-col right cols="2"><v-rating small v-model="rating"></v-rating></v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item class="mb-4" color="primary" icon-color="grey lighten-2" >
        <v-row justify="start">
          <v-col cols="5">『ねこの森には帰れない』
            <div class="pa-4 pt-0 caption"><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</em>
            </div><v-btn small color="gray">修正</v-btn>
          </v-col>
          <v-col cols="3"> </v-col>
          <v-col right cols="2"><v-rating small v-model="rating"></v-rating></v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item
        class="mb-6"
        hide-dot
      >
        <span>アンコール</span>
      </v-timeline-item>

      <v-timeline-item class="mb-4" color="accent" icon-color="grey lighten-2" >
        <v-row justify="start">
          <v-col cols="5">『さよならのかわりに』
            <div class="pa-4 pt-0 caption"><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</em>
            </div><v-btn small color="gray">修正</v-btn>
          </v-col>
          <v-col cols="3"> </v-col>
          <v-col right cols="2"><v-rating small v-model="rating"></v-rating></v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item class="mb-4" color="accent" icon-color="grey lighten-2" >
        <v-row justify="start">
          <v-col cols="5">『おひさま』（岩男潤子Ver.）
            <div class="pa-4 pt-0 caption"><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</em>
            </div><v-btn small color="gray">修正</v-btn>
          </v-col>
          <v-col cols="3"> </v-col>
          <v-col right cols="2"><v-rating small v-model="rating"></v-rating></v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item
        fill-dot
        class="white--text mb-12"
        color="orange"
        large
      >
        <template v-slot:icon>
          <span>終演</span>
        </template>
      </v-timeline-item>

    </v-timeline>
  </v-container>
</div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class SetList extends Vue {
    public rating: number = 3;
  }
</script>
<style scoped>

</style>
