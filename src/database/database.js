import sqlite from 'sqlite3'
import { open } from 'sqlite'
import fs from 'fs'

(async () => {
    let generalDatabase = await open({
        filename: "sfl-general.sfldb",
        driver: sqlite.Database
    })
    await generalDatabase.run("CREATE TABLE IF NOT EXISTS general (setting TEXT, value BLOB)")
    let initialSettings = [
        {startYear: 1950},
        {yearsPassed: 0},
        {seasonWeeks: 18},
        {preSeasonWeeks: 3},
        {maxRosterSize: 53},
        {maxPracticeSquadSize: 16},
        {leagueAcronym: "SFL"},
        {leagueName: "Simulation Football League"},
        {conferenceOneAcronym: "ASC"},
        {conferenceOneName: "Associated Simulation Conference"},
        {conferenceTwoAcronym: "NSC"},
        {conferenceTwoName: "Nominal Simulation Conference"},
        {divisionNames: ["First","Second","Third","Fourth"]},
        {mainColor: "#000000"},
        {textOnMainColor: "#FFFFFF"},
        {backgroundColor: "#FFFFFF"},
        {fullScreen: true}
    ]

    let init = await generalDatabase.prepare("INSERT INTO general (setting, value) VALUES (?,?)")
    for(let setting of initialSettings){
        await init.bind(String(Object.keys(setting)), String(setting[Object.keys(setting)]))
        let result = await init.run()
    }

    generalDatabase.each("SELECT setting, value FROM general", (err, setting) => {
        console.log(setting)
    })

})()

let getSettings = async () => {
    let returnSettings = {
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
        mainColor: "",
        textOnMainColor: "",
        backgroundColor: "",
        fullScreen: true
    }
    let generalDatabase = await open({
        filename: "sfl-general.sfldb",
        driver: sqlite.Database
    })
    await generalDatabase.each("SELECT setting, value FROM general", (err, setting) => {
        returnSettings[setting.setting] = setting.value
    })
    return returnSettings
}

export {
    getSettings
}