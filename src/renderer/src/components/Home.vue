<script>
  export default {
    data(){
      return {
        existingGames: [],
        settings: null
      }
    },
    methods: {
      emitScreenChange(newScreen){
        this.$emit("screen-change", newScreen)
      },

      async getSettings(){
        let settingsRequest = new Request("http://localhost:4000/api/settings")
        let settingsResponse = await fetch(settingsRequest)
        let settingsJson = await settingsResponse.json()
        let r = document.querySelector(':root')
        r.style.setProperty('--main-color', settingsJson.mainColor)
        r.style.setProperty('--text-on-main-color', settingsJson.textOnMainColor)
        r.style.setProperty('--third-color', settingsJson.thirdColor)
        r.style.setProperty('--fourth-color', settingsJson.fourthColor)
        r.style.setProperty('--fifth-color', settingsJson.fifthColor)
      }
    },
    async mounted(){
      this.getSettings()
    },
  }
</script>

<template>
    <div class="home-container">
      <div class="home-header">FOOTBALL</div>
      <div class="home-header">SIMULATION</div>
      <div class="home-buttons">
        <div class="home-button" @click="emitScreenChange('newgame')">NEW GAME</div>
        <div class="home-button" :class="{disabled: !existingGames.length}">LOAD GAME</div>
        <div class="home-button" @click="emitScreenChange('settings')">SETTINGS</div>
      </div>
    </div>
</template>