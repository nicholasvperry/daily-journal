import { useJournalEntries } from "./JournalDataProvider.js";
import { Journal } from "./Journal.js";

export const JournalList = () => {
    //makes var journalContainer and inserts value into index
    const journalContainer = document.querySelector("#entries")

    //make var allJournals that has data from data provider
    const allJournals = useJournalEntries()

    //make var journalHTMLRepresentation
    let journalHTMLRepresentations = ""

    //loop through each single object allJournals and builds var journalHTMLRepresentation into a html string
    for (const singleJournalObject of allJournals) {
               
       journalHTMLRepresentations += Journal(singleJournalObject)
    }

    //gives journalContainer value to insert into index on line 5
    journalContainer.innerHTML += `<div>${journalHTMLRepresentations}</div>`
    
    //This line coule replace line 8 and 20
    //document.querySelector("#entries").innerHTML += `<div>${journalHTMLRepresentations}</div>`


}