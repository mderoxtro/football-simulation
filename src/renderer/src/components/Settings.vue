<script>
  export default {
    emits: ["screenChange"],
    data(){
      return {
        settings: null,
        selectedSettings: 'league',
        availableThemes: [
          {
            name: "Default",
            mainColor: "#01161E",
            textOnMainColor: "#EFF6E0",
            thirdColor: "#124559",
            fourthColor: "#598392",
            fifthColor: "#AEC3B0"
          },
          {
            name: "Dark",
            mainColor: "#EFF6E0",
            textOnMainColor: "#01161E",
            thirdColor: "#AEC3B0",
            fourthColor: "#598392",
            fifthColor: "#124559",
          },
          {
            name: "Navy",
            mainColor: "#FFD60A",
            textOnMainColor: "#000814",
            thirdColor: "#FFC300",
            fourthColor: "#003566",
            fifthColor: "#001D3D",
          },
          {
            name: "Battleship",
            mainColor: "#C5C5C5",
            textOnMainColor: "#2C423F",
            thirdColor: "#949B96",
            fourthColor: "#829191",
            fifthColor: "#4C5B61"
          },
          {
            name: "Dracula",
            mainColor: "#0A0908",
            textOnMainColor: "#5E503F",
            thirdColor: "#49111C",
            fourthColor: "#F2F4F3",
            fifthColor: "#A9927D"
          },
          {
            name: "Forest",
            mainColor: "#041F1E",
            textOnMainColor: "#F7DBA7",
            thirdColor: "#1E2D2F",
            fourthColor: "#C57B57",
            fifthColor: "#F1AB86"
          },
          {
            name: "Icy",
            mainColor: "#3590F3",
            textOnMainColor: "#F1E3F3",
            thirdColor: "#62BFED",
            fourthColor: "#8FB8ED",
            fifthColor: "#C2BBF0"
          }
        ]
      }
    },
    methods: {
      emitScreenChange(newScreen){
        this.$emit("screenChange", newScreen)
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
      },

      async setSelectedTheme(theme){
        let newThemeSettings = {
          mainColor: theme.mainColor,
          textOnMainColor: theme.textOnMainColor,
          thirdColor: theme.thirdColor,
          fourthColor: theme.fourthColor,
          fifthColor: theme.fifthColor
        }
        let settingsRequest = new Request("http://localhost:4000/api/settings", {
          method: "POST",
          body: JSON.stringify(newThemeSettings),
          headers: {'Content-Type': 'application/json'}
        })
        let settingsResponse = await fetch(settingsRequest)
        await this.getSettings()
      }
    },
    async mounted(){
      this.getSettings()
    },
  }
</script>

<template>
    <div class="settings-heading">SETTINGS</div>
    <div class="settings-container">
      <div class="settings-sidebar">
        <div class="settings-sidebar-button" @click="emitScreenChange('home')">BACK</div>
        <div class="settings-sidebar-button" :class="{selected: selectedSettings == 'league'}" @click="selectedSettings = 'league'">LEAGUE</div>
        <div class="settings-sidebar-button" :class="{selected: selectedSettings == 'theme'}" @click="selectedSettings = 'theme'">THEME</div>
      </div>
      <div class="settings-league" v-if="selectedSettings == 'league'">
        <span> League Settings </span>
      </div>
      <div class="settings-theme" v-if="selectedSettings == 'theme'">
        <div class="theme-choice" v-for="theme of availableThemes">
          <div class="theme-choice-container" :style="{backgroundColor: theme.textOnMainColor,}">
            <div class="theme-choice-button" :style="{backgroundColor: theme.mainColor, color: theme.textOnMainColor}" @click="setSelectedTheme(theme)">{{  theme.name }}</div>
            <div class="theme-choice-heading" :style="{color: theme.mainColor, fontWeight: 'bolder'}">Main Text</div>
            <div class="theme-choice-third" :style="{color: theme.thirdColor}">Other Text</div>
            <div class="theme-choice-fourth" :style="{color: theme.fourthColor}">Accent</div>
            <div class="theme-choice-fifth" :style="{color: theme.fifthColor}">Disabled</div>
          </div>
        </div>
      </div>
    </div>
</template>