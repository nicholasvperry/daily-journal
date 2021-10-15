const journal = [
    {
        id: 1,
        date: "10/11/2021",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Great"
    },
    {
        id: 2,
        date: "10/15/2025",
        concept: "JS",
        entry: "We talked about JS functions and conditionals.",
        mood: "Good"
    }, 
    {
        id: 3,
        date: "10/24/2025",
        concept: "JS",
        entry: "We talked about Data Providers",
        mood: "Ok"
    }
]

/*
    You export a function that provides a version of the raw data in the format that you want useJournalEntries
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}
