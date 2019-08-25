<template>
  <div>
    <v-card class="mx-auto">

      <v-toolbar color="teal" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>{{concert.name}}</v-toolbar-title>
        <div class="flex-grow-1"></div>
        <v-btn icon><v-icon>more_vert</v-icon></v-btn>
      </v-toolbar>

        <h2 class="title primary--text">{{concert.name}}</h2>
        <div>
          <em>{{concert.description}}</em>
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
        <v-divider />
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
    description: "一見幼稚園の先生の様な外見をしている。だがその標的は社会に出た大人たちである。「やさしい時代を置き去りに やがて街へとび出した僕には 教室の窓がもう見えない 夢の行き場がどこにもない」大人たちに音声信号によってその事を認識させることで深い哀しみを現出させる。特に心に陰のある人程効き易い。しかも156を遥かに上回るレパートリーを持ち、多彩なトラウマを演出してくれる。特に彼女を振った男達への「この恨みはらさでおくべきか！」という怨念は数々の殺人ソングを編み出している。みんなの（畏怖する）うたとして知られる「まっくら森の歌」は最強最悪の召喚魔法で、これを詠唱すると周囲一帯が数々の超常現象が当り前の「まっくら森」となり特に月夜にご用心である。「まっくら森の歌」は子供にも安心して見せられる番組の中に織り込まれて発動されたため、多くの子供がトラウマを刻み込む事となった。彼らのトラウマは彼らが大人になった時に鏡音リンによる対抗ワクチン「なっとく森の歌」がようやく発明されるまで癒えることはなかった。 出典：アンサイクロペディア",
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
