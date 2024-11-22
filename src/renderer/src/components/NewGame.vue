<script>
  export default {
    data(){
      return {
        newGameStage: 'team',
        selectedTeam: null,
        settings: null,
        teams: [],
      }
    },
    methods: {
      emitScreenChange(newScreen){
        this.$emit("screen-change", newScreen)
      },

      async generateTeams(){
        let teamsRequest = new Request("http://localhost:4000/api/gen/teams", {
          method: "POST",
          body: JSON.stringify({count: 32}),
          headers: {'Content-Type': 'application/json'}
        })
        let teamsResponse = await fetch(teamsRequest)
        let teamsJson = await teamsResponse.json()
        this.teams = teamsJson
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
        this.settings = settingsJson
      },

      selectTeam(team){
        this.selectedTeam = team
        this.newGameStage = 'role'
      }
    },
    async mounted(){
      await this.getSettings()
      await this.generateTeams()
    },
  }
</script>

<template>
    <div class="new-game-container">
        <div class="new-game-team-select" v-if="newGameStage == 'team'">
            <div class="new-game-header">SELECT TEAM</div>
            <div class="new-game-team-grid">
                <div class="team-card" v-for="team of teams" @click="selectTeam(team)">
                    <div class="team-card-line">
                        <div class="team-card-label">Name:</div>
                        <div class="team-card-value">{{ team.nameString }}</div>
                    </div>
                    <div class="team-card-line">
                        <div class="team-card-label">City:</div>
                        <div class="team-card-value">{{ team.city }}</div>
                    </div>
                    <div class="team-card-line">
                        <div class="team-card-label">State:</div>
                        <div class="team-card-value">{{ team.state }}</div>
                    </div>
                    <div class="team-card-line">
                        <div class="team-card-label">Mascot:</div>
                        <div class="team-card-value">{{ team.mascot }}</div>
                    </div>
                    <div class="team-card-line">
                        <div class="team-card-label">Stadium:</div>
                        <div class="team-card-value">{{ team.stadiumNameString }}</div>
                    </div>
                </div>
            </div>
            <div class="new-game-team-buttons">
                <div class="new-game-home-button" @click="emitScreenChange('home')">BACK</div>
                <div class="new-game-home-button" @click="generateTeams()">RE-GENERATE TEAMS</div>
            </div>
        </div>
    </div>
</template>