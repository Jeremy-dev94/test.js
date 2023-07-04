const notes  = [10, 28, 15, 17, 32, 5, 12, 42];
const count = 0;
const highter = 0;

function getNote(count, notes, highter){
    if(count < notes.length){
        if(highter < notes[count]){
            highter = notes[count];
        }
        count++

        return getNote(count, notes, highter);
        } else {
            return highter;
         }
    }
console.log(getNote(count, notes, highter));
