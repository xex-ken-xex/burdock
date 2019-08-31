<template>
  <span>
    <div>
      <v-container>
        <div @click="onClicked" >
          <v-rating small v-model=rating :readonly=true :length=maxrate ></v-rating> ({{rating}})
        </div>
      </v-container>
    </div>
  </span>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit} from 'vue-property-decorator';

@Component
export default class Rate extends Vue {
  @Prop({ default: 0 }) public rating!: number;
  public maxrate: number = 5;
  private fixednumber = 10;

@Emit()
  private evaluation( ) {
    //
  }
  private isDisabled(): boolean {
    if ( this.rating < this.fixednumber ) {
      return false;
    } else {
      return true;
    }
  }

  private onClicked() {
    if ( false === this.isDisabled() ) {
      this.evaluation( );
    } else {
      alert( 'rate' + this.fixednumber + '以上はfix済みです.');
    }
  }
}
</script>

<style scoped>
div {
  display:inline;
}
</style>