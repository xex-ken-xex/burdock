<template>
  <div>
    <v-card class="mx-auto">

      <v-toolbar color="teal" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>{{concert.name}}</v-toolbar-title>
        <em>{{concert.description}}</em>
        <div class="flex-grow-1"></div>
        <v-btn icon><v-icon>more_vert</v-icon></v-btn>
      </v-toolbar>

        <h2 class="title primary--text">{{concert.name}}</h2>
        <div>
            <p><v-rating :value="4" dense color="orange" background-color="orange" hover class="mr-2"></v-rating></p>
          <v-subheader>
            <p>{{concert.date}} 開演：{{concert.start_at}} 開場：{{concert.open_at}}</p>
          </v-subheader>
          <v-btn v-if="concert.location">
            <span>{{concert.location}}</span><v-icon>place</v-icon>
          </v-btn>
        </div>
      <v-card-text>
        <v-list>
          <v-list-item v-for="performe in concert.performer " :key="performe.name">
            <v-list-item-content>
              <v-list-item-avatar><v-img :src="performe.avatar"></v-img></v-list-item-avatar>
              <v-list-item-title v-text="performe.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <SetList v-model="concert.setlist"/>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SetList from "@/components/SetList.vue";
import ConcertJSON from "./ConcertJSON";

@Component({
  components: {
    SetList
  }
})
export default class Concert extends Vue {
  public rating: number = 3;
  public concert: ConcertJSON = {
    type: "concert",
    id: "28987",
    name: "猫森集会 2019 Aプログラム",
    date: "2019-09-17",
    open_at: "17:00:00",
    start_at: "17:30:00",
    description: "",
    performer: [],
    location: "",
    setlist: {
      id: 899,
      items: [
        {
          type: "song",
          item: {
            type: "song",
            id: "298",
            name: "おはようございますの帽子屋さん"
          },
          memo: ""
        },
        {
          type: "note",
          memo: "開演の挨拶"
        },
        {
          type: "song",
          item: {
            type: "song",
            id: "111",
            name: "電波塔の少年"
          },
          memo: "少年の恋の歌 1曲/3曲"
        },
        {
          type: "song",
          item: {
            type: "song",
            id: "212",
            name: "ボクハ・キミガ・スキ"
          },
          memo: "少年の恋の歌 2曲/3曲"
        },
        {
          type: "song",
          item: {
            type: "song",
            id: "124",
            name: "海の時間"
          },
          memo: "少年の恋の歌 3曲/3曲"
        }
      ],
      rates: {
        value: "3",
        state: "evaluation"
      }
    },
    rates: {
      value: "21",
      state: "credible"
    }
  };
}
</script>

<style scoped>
</style>
