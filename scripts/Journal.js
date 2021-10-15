//make html format to export
//journal is used to get each value of the objects
//Journal is an object with all values of journal.""
export const Journal = (journal) => {
    return `
    <section class="entry card">
    <div class="journalId">Journal Id: ${journal.id}</div>
    <div class="journalDate">Date: ${journal.date}</div>
    <div class="journalConcept">Concepts Covered: ${journal.concept}</div>
    <div class="journalMood">Mood: ${journal.mood}<br></br></div>
    <div class="journalEntry">Journal Entry: <br>${journal.entry}</br></div>
    
    </section>    
    `
}