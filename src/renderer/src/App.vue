<script>
  export default {
    data(){
      return {
        currentStage: 'splash'
      }
    },
    methods: {
      ipcHandle(){
        window.electron.ipcRenderer.send('ping')
      },

      setStage(dest){
        this.currentStage = dest
      }
    },
    mounted(){
      setTimeout(() => {
        if(this.currentStage == 'splash') this.setStage('home')
      }, 5000)
    }
  }
</script>

<script setup>
import Home from './components/Home.vue'
import Settings from './components/Settings.vue'
</script>

<template>
  <div class="splash-block" v-if="currentStage == 'splash'" @click="setStage('home')">
    <div class="splash-block-container">
      <div class="splash-heading">FOOTBALL SIMULATION</div>
      <div class="splash-blurb">Company Unknown</div>
      <div class="splash-version">Version 0.0.2</div>
    </div>
  </div>
  <div class="home-block" v-else-if="currentStage == 'home'">
    <Home @screen-change="setStage"/>
  </div>
  <div class="settings-block" v-else-if="currentStage == 'settings'">
    <Settings @screen-change="setStage"/>
  </div>
</template>
