document.getElementById('wordForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const adjective1 = document.getElementById('adjective1').value;
    const noun1 = document.getElementById('noun1').value;
    const noun2 = document.getElementById('noun2').value;
    const verb1 = document.getElementById('verb1').value;
    const verb2 = document.getElementById('verb2').value;

    const poem = `
        The ${adjective1} ${noun1}<br>
        ${verb1} across the ${noun2}<br>
        ${adjective1} ${noun1} ${verb2}
    `;

    document.getElementById('wordsOutput').innerHTML = poem;
});


// poem styles: haiku, I am, free verse, limerick
// moods: love, silly, nature, myself, ???
// need templates for each

// **I am Template**
//      I am a _ (2 words to describe self)
//      I wonder _ (something you are curious about)
//      I hear _ (a sound)
//      I see _ (a sight)
//      I want _ (something you want)
//      I am _ (repeat of first line)
// note: these need to be phrases rather than single words
// addtl stanzas are I pretend, I feel, I touch, I worry, I try, I am / I understand, I say, I dream, I try, I hope, I am
//

// **Haiku Template**
//      An adjective noun
//      Verb-ing through the adjective noun
//      Adjective noun sings
//     
//Haiku form: adjective, noun, ing verb. adjective, noun, adjective, noun

// **Limerick Template**
//      There once was a noun from place
//      Who verb-ed with a funny face
//      The adjective noun
//      Verb-ed around
//      And left without a trace
//
//Limerick form: noun, place, verb(ed), adjective, noun, verb(ed)     

// **Nature Poem Template**
//      The adjective noun sways in the breeze,
//      Verb-ing softly among the trees.
//      With a noun in the sky,
//      I watch it fly high,
//      As the adjective sun sets with ease.
//        

// **Seasonal Poem Template**
//      In the adjective summer, the noun blooms,
//      While the adjective sun chases away glooms.
//      We verb and we play,
//      In the bright light of day,
//      Enjoying the warmth that resumes.
//     
