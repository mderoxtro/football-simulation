import * as locations from '../data/locations.js'
import * as mascots from '../data/mascots.js'
import * as sponsors from '../data/sponsors.js'
import * as names from '../data/names.js'

let calcStateTeams = (teams, state) => {
    let inThisState = 0
    for(let team of teams){
        if(team.state == state) inThisState++
    }
    return inThisState
}

let generateTeams = (count) => {
    let allTeams = []
    while(allTeams.length < count){
        let homeTown = locations.selectTown()
        while(calcStateTeams(allTeams, homeTown.state) > 2){
            homeTown = locations.selectTown()
        }

        let mascot = mascots.selectTeamMascot()
        while(mascotExists(allTeams, mascot)){
            mascot = mascots.selectTeamMascot()
        }

        let stadiumTypes = ["Dome", "Field", "Stadium", "Arena"]
        let sponsorStadium = Math.random() < 0.5
        let stadiumNameString = ""
        if(sponsorStadium) stadiumNameString = sponsors.selectSponsor() + " " + stadiumTypes[Math.floor(Math.random() * stadiumTypes.length)]
        else stadiumNameString = names.selectName().firstName + " " + names.selectName().lastName + " " + stadiumTypes[Math.floor(Math.random() * stadiumTypes.length)]

        allTeams.push({
            nameString: homeTown.city + " " + mascot,
            state: homeTown.state,
            stateShort: homeTown.stateShort,
            city: homeTown.city,
            mascot: mascot,
            stadiumNameString: stadiumNameString
        })
    }
    return allTeams
}
  
let mascotExists = (teams, mascot) => {
    for(let team of teams){
        if(team.mascot == mascot)return true
    }
    return false
}

export {
    generateTeams
}