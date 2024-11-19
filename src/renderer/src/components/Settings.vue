<script>
  export default {
    emits: ["screenChange"],
    computed: {
      settingsNotification(){
        return this.notificationText
      }
    },
    data(){
      return {
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
        ],
        notificationText: "",
        selectedSettings: 'league',
        settings: {
          startYear: 0,
          yearsPassed: 0,
          seasonWeeks: 0,
          preSeasonWeeks: 0,
          maxRosterSize: 0,
          maxPracticeSquadSize: 0,
          leagueAcronym: "",
          leagueName: "",
          conferenceOneAcronym: "",
          conferenceOneName: "",
          conferenceTwoAcronym: "",
          conferenceTwoName: "",
          divisionNames: [],
        },
        supportedYears: Array.from({length:100}, (value, index) => index + 1950),
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
        this.settings.startYear = parseInt(settingsJson.startYear)
        this.settings.yearsPassed = parseInt(settingsJson.yearsPassed)
        this.settings.seasonWeeks = parseInt(settingsJson.seasonWeeks)
        this.settings.preSeasonWeeks = parseInt(settingsJson.preSeasonWeeks)
        this.settings.maxRosterSize = parseInt(settingsJson.maxRosterSize)
        this.settings.maxPracticeSquadSize = parseInt(settingsJson.maxPracticeSquadSize)
        this.settings.leagueAcronym = settingsJson.leagueAcronym
        this.settings.leagueName = settingsJson.leagueName
        this.settings.conferenceOneAcronym = settingsJson.conferenceOneAcronym
        this.settings.conferenceOneName = settingsJson.conferenceOneName
        this.settings.conferenceTwoAcronym = settingsJson.conferenceTwoAcronym
        this.settings.conferenceTwoName = settingsJson.conferenceTwoName
        this.settings.divisionNames = settingsJson.divisionNames
      },

      async restoreLeagueSettings(){
        let newLeagueSettings = {
          startYear: 1950,
          yearsPassed: 0,
          seasonWeeks: 18,
          preSeasonWeeks: 3,
          maxRosterSize: 53,
          maxPracticeSquadSize: 16,
          leagueAcronym: "SFL",
          leagueName: "Simulation Football League",
          conferenceOneAcronym: "ASC",
          conferenceOneName: "Associated Simulation Conference",
          conferenceTwoAcronym: "NSC",
          conferenceTwoName: "Nominal Simulation Conference",
          divisionNames: "First,Second,Third,Fourth",
        }
        let settingsRequest = new Request("http://localhost:4000/api/settings", {
          method: "POST",
          body: JSON.stringify(newLeagueSettings),
          headers: {'Content-Type': 'application/json'}
        })
        let settingsResponse = await fetch(settingsRequest)
        await this.getSettings()
        this.notificationText = "League Settings Restored"
        setTimeout(() => {
          this.notificationText = ""
        }, 5000)
      },

      async setLeagueSettings(){
        let newLeagueSettings = {
          startYear: this.settings.startYear,
          yearsPassed: this.settings.yearsPassed,
          seasonWeeks: this.settings.seasonWeeks,
          preSeasonWeeks: this.settings.preSeasonWeeks,
          maxRosterSize: this.settings.maxRosterSize,
          maxPracticeSquadSize: this.settings.maxPracticeSquadSize,
          leagueAcronym: this.settings.leagueAcronym,
          leagueName: this.settings.leagueName,
          conferenceOneAcronym: this.settings.conferenceOneAcronym,
          conferenceOneName: this.settings.conferenceOneName,
          conferenceTwoAcronym: this.settings.conferenceTwoAcronym,
          conferenceTwoName: this.settings.conferenceTwoName,
          divisionNames: this.settings.divisionNames,
        }
        let settingsRequest = new Request("http://localhost:4000/api/settings", {
          method: "POST",
          body: JSON.stringify(newLeagueSettings),
          headers: {'Content-Type': 'application/json'}
        })
        let settingsResponse = await fetch(settingsRequest)
        await this.getSettings()
        this.notificationText = "League Settings Saved"
        setTimeout(() => {
          this.notificationText = ""
        }, 5000)
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
        <div class="settings-league-grid">
          <div class="settings-league-item">
            <div class="settings-league-item-line">
              <div class="settings-league-item-label">Start Year</div>
              <select class="settings-league-item-select" v-model="settings.startYear">
                <option v-for="year of supportedYears">{{  year }}</option>
              </select>
            </div>
            <div class="settings-league-item-line">
              <div class="settings-league-item-description">The year that the league was founded.  This serves as the start point of the simulation.</div>
            </div>
          </div>
          <div class="settings-league-item">
            <div class="settings-league-item-line">
              <div class="settings-league-item-label">Years Passed</div>
              <input class="settings-league-item-input" v-model="settings.yearsPassed" type="number" min="0" max="100">
            </div>
            <div class="settings-league-item-line">
              <div class="settings-league-item-description">The number of years that have passed since the league was founded.  These years will be simulated.</div>
            </div>
          </div>
          <div class="settings-league-item">
            <div class="settings-league-item-line">
              <div class="settings-league-item-label">Season Weeks</div>
              <input class="settings-league-item-input" v-model="settings.seasonWeeks" type="number" min="1" max="18">
            </div>
            <div class="settings-league-item-line">
              <div class="settings-league-item-description">The number of Regular Season weeks for a league year.</div>
            </div>
          </div>
          <div class="settings-league-item">
            <div class="settings-league-item-line">
              <div class="settings-league-item-label">Pre-Season Weeks</div>
              <input class="settings-league-item-input" v-model="settings.preSeasonWeeks" type="number" min="1" max="4">
            </div>
            <div class="settings-league-item-line">
              <div class="settings-league-item-description">The number of Pre-Season weeks for a league</div>
            </div>
          </div>
          <div class="settings-league-item">
            <div class="settings-league-item-line">
              <div class="settings-league-item-label">Max Roster Size</div>
              <input class="settings-league-item-input" v-model="settings.maxRosterSize" type="number" min="48" max="60">
            </div>
            <div class="settings-league-item-line">
              <div class="settings-league-item-description">The maximum number of players that can be on a team's roster.</div>
            </div>
          </div>
          <div class="settings-league-item">
            <div class="settings-league-item-line">
              <div class="settings-league-item-label">Max Practice Squad Size</div>
              <input class="settings-league-item-input" v-model="settings.preSeasonWeeks" type="number" min="0" max="20">
            </div>
            <div class="settings-league-item-line">
              <div class="settings-league-item-description">The maximum number of players that can be on a team's practice squad.</div>
            </div>
          </div>
          <div class="settings-league-item">
            <div class="settings-league-item-line">
              <div class="settings-league-item-label">League Acronym</div>
              <input class="settings-league-item-input" v-model="settings.leagueAcronym">
            </div>
            <div class="settings-league-item-line">
              <div class="settings-league-item-description">The acronym to use for this league, ex: SFL</div>
            </div>
          </div>
          <div class="settings-league-item">
            <div class="settings-league-item-line">
              <div class="settings-league-item-label">League Name</div>
              <input class="settings-league-item-input" v-model="settings.leagueName">
            </div>
            <div class="settings-league-item-line">
              <div class="settings-league-item-description">The full name for this league, ex: Simulation Football League</div>
            </div>
          </div>
          <div class="settings-league-item">
            <div class="settings-league-item-line">
              <div class="settings-league-item-label">Conference One Acronym</div>
              <input class="settings-league-item-input" v-model="settings.conferenceOneAcronym">
            </div>
            <div class="settings-league-item-line">
              <div class="settings-league-item-description">The acronym for the first conference in this league, ex: ASC</div>
            </div>
          </div>
          <div class="settings-league-item">
            <div class="settings-league-item-line">
              <div class="settings-league-item-label">Conference One Name</div>
              <input class="settings-league-item-input" v-model="settings.conferenceOneName">
            </div>
            <div class="settings-league-item-line">
              <div class="settings-league-item-description">The full name for the first conference, ex: Associated Simulation Conference</div>
            </div>
          </div>
          <div class="settings-league-item">
            <div class="settings-league-item-line">
              <div class="settings-league-item-label">Conference Two Acronym</div>
              <input class="settings-league-item-input" v-model="settings.conferenceTwoAcronym">
            </div>
            <div class="settings-league-item-line">
              <div class="settings-league-item-description">The acronym for the second conference in this league, ex: NSC</div>
            </div>
          </div>
          <div class="settings-league-item">
            <div class="settings-league-item-line">
              <div class="settings-league-item-label">Conference Two Name</div>
              <input class="settings-league-item-input" v-model="settings.conferenceTwoName">
            </div>
            <div class="settings-league-item-line">
              <div class="settings-league-item-description">The full name for the second conference, ex: Nominal Simulation Conference</div>
            </div>
          </div>
          <div class="settings-league-item">
            <div class="settings-league-item-line">
              <div class="settings-league-item-label">Division Names</div>
              <input class="settings-league-item-input" v-model="settings.divisionNames">
            </div>
            <div class="settings-league-item-line">
              <div class="settings-league-item-description">The names for the divisions inside each conference.  Requires 4, separated by commas, ex: North,South,East,West</div>
            </div>
          </div>
        </div>
        <div class="settings-league-notification">{{ settingsNotification }}</div>
        <div class="settings-league-save">
          <div class="settings-league-save-button" @click="restoreLeagueSettings()">RESTORE DEFAULTS</div>
          <div class="settings-league-save-button" @click="setLeagueSettings()">SAVE LEAGUE SETTINGS</div>
        </div>
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