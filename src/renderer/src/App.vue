<script>
  export default {
    data(){
      return {
        currentStage: 'splash'
      }
    },
    methods: {
      setStage(dest){
        this.currentStage = dest
      }
    },
    mounted(){
      setTimeout(() => {
        if(this.currentStage == 'splash') this.setStage('home')
      }, 3000)
    }
  }
</script>

<script setup>
import Home from './components/Home.vue'
import Settings from './components/Settings.vue'
import NewGame from './components/NewGame.vue'
</script>

<template>
  <div class="splash-block" v-if="currentStage == 'splash'" @click="setStage('home')">
    <div class="splash-block-container">
      <div class="splash-heading">FOOTBALL SIMULATION</div>
      <div class="splash-blurb">Company Unknown</div>
      <div class="splash-version">Version 0.0.4</div>
    </div>
  </div>
  <div class="home-block" v-else-if="currentStage == 'home'">
    <Home @screen-change="setStage"/>
  </div>
  <div class="settings-block" v-else-if="currentStage == 'settings'">
    <Settings @screen-change="setStage"/>
  </div>
  <div class="new-game-block" v-else-if="currentStage == 'newgame'">
    <NewGame @screen-change="setStage"/>
  </div>
</template>
