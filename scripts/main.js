//-------------Links all js files to index and console(optional)


//import function that uses data from array
import { useJournalEntries } from "./JournalDataProvider.js";

//import function that lists all data from array
import { JournalList } from "./JournalList.js";

//create a copy of use"" naming
const allTheJournals = useJournalEntries()

//loop through arrray and console.log. Only necessary to see information in the console not the DOM

for(const journal of allTheJournals) {
    console.log(journal)
}

JournalList()