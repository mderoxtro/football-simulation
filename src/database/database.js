import sqlite from 'sqlite3'
import { open } from 'sqlite'
import fs from 'fs'

(async () => {
    sqlite.verbose()
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
        {mainColor: "#01161E"},
        {textOnMainColor: "#EFF6E0"},
        {thirdColor: "#124559"},
        {fourthColor: "#598392"},
        {fifthColor:"#AEC3B0"},
        {fullScreen: true}
    ]

    let databaseRows = []
    await generalDatabase.each("SELECT setting, value FROM general", (err, setting) => {
        databaseRows.push(setting)
    })
    if(!databaseRows.length){
        let init = await generalDatabase.prepare("INSERT INTO general (setting, value) VALUES (?,?)")
        for(let setting of initialSettings){
            await init.bind(String(Object.keys(setting)), String(setting[Object.keys(setting)]))
            let result = await init.run()
        }
    }
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

let setSettings = async (settings) => {
    let generalDatabase = await open({
        filename: "sfl-general.sfldb",
        driver: sqlite.Database
    })
    // generalDatabase.on('trace', (data) => {
    //     console.log(data)
    // })
    for(let setting in settings){
        let thisRowId = await generalDatabase.get(`SELECT rowid FROM general WHERE setting = '${setting}'`)
        let result = await generalDatabase.run(`UPDATE general SET setting = '${setting}', value = '${settings[setting]}' WHERE rowid = ${thisRowId.rowid}`)
    }
}

export {
    getSettings,
    setSettings
}