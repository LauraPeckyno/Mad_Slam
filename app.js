// notes for the future: I'd like to set up local storage for this so you can save your slams. I don't have time to implement that. 
// I have no idea what's wrong with the word based regex patterns. I can't seem to get them to trigger the right way. I've commented them out for the phrase-based answers.
// The template literals could use some tweaks. Most of the generated poems are clunky 
// I am not sure what else I could do with this apart from coming up with new poem styles and making the templates better.
// maybe a battle option where saved poems could be rated and a winner declared?

document.body.style.cursor = "url(https://www.pecknotes.com/handpoint2.cur), pointer"; 
/// sets a custom cursor for the page (yep, I borrowed an image and made a cursor. yep, that's mickey's hand)

// declaring constants for the buttons
const haikuBtn = document.getElementById("haikuBtn");
const limerickBtn = document.getElementById("limerickBtn");
const natureBtn = document.getElementById("natureBtn");
const iamBtn = document.getElementById("iamBtn");

// the arrays for the form fields
var haikuFields = [
  { poem: "HAIKU"},
  { label: "Enter a noun", 
    title: "enter a noun", 
    type: "text", 
    placeholder: "Noun", 
    name: "noun1", 
    minlength: 2, 
    required: true },
  { label: "Enter an adjective that describes that noun", 
    title:"Enter an adjective that describes that noun", 
    type: "text",
    placeholder: "Adjective that describes the noun",
    name: "adjective1", 
    minlength: 2, 
    required: true },
  { label: "Enter a verb ending in ...ing",  
    title: "Please enter a verb ending in ...ing", 
    type: "text", 
    placeholder: "Verb ending in ...ing", 
    name: "verb1", 
    pattern: ".*ing$", 
    minlength: 2, 
    required: true },
  { label: "Enter a new noun",  
    title: "Enter a new noun", 
    type: "text", 
    placeholder: "New noun", 
    name: "noun2", 
    minlength: 2, 
    required: true },
  { label: "Enter an adjective that describes that second noun", 
    title:"Enter an adjective that describes the new noun", 
    type: "text",
    placeholder: "Adjective that describes the noun",
    name: "adjective2", 
    minlength: 2, 
    required: true },
  { label: "Enter a verb ending in ...s",  
    title: "Enter a verb ending in ...s",
    type: "text", 
    placeholder: "Verb ending in ...s", 
    name: "verb2", 
    pattern: ".*s$", 
    minlength: 2, 
    required: true },
];

var limerickFields = [
  {poem: "LIMERICK"},
  { label: "Enter a noun", 
    title: "Enter a noun",
    type: "text", 
    placeholder: "Noun", 
    name: "noun1", 
    minlength: 2, 
    required: true },
  { label: "Enter an adjective describing your noun",  
    title: "Enter an adjective describing your noun",
    type: "text", 
    placeholder: "Adjective", 
    name: "adjective", 
    minlength: 2, 
    required: true },
  { label: "Enter a place (a city or country would work)", 
    title: "Enter a place (a city or country would work)", 
    type: "text",
    placeholder: "Place",
    name: "place1", 
    minlength: 2, 
    required: true },
  { label: "Enter a verb ending in ...ed",  
    title: "Please enter a verb ending in ...ed", 
    type: "text", 
    placeholder: "Verb ending in ...ed", 
    name: "verb1", 
    pattern: ".*ed$",
    minlength: 2, 
    required: true },
];

var natureFields = [
  {poem: "NATURE"},
  { label: "Enter a noun", 
    title: "Enter a noun", 
    type: "text", 
    placeholder: "Noun", 
    name: "noun1", 
    minlength: 2, 
    required: true },
  { label: "Enter an adjective that describes that noun", 
    title: "Enter an adjective that describes that noun", 
    type: "text",
    placeholder: "Adjective that describes the noun",
    name: "adjective1", 
    minlength: 2, 
    required: true 
  },
  { label: "Enter a verb ending in ...ing",  
    title: "Please enter a verb ending in ...ing", 
    type: "text", 
    placeholder: "Verb ending in ...ing", 
    name: "verb1", 
    pattern: ".*ing$", 
    minlength: 2, 
    required: true },
  { label: "Enter a new noun (something you'd see in the sky)",  
    title: "Enter a new noun (something you'd see in the sky)",  
    type: "text", 
    placeholder: "New noun", 
    name: "noun2", 
    minlength: 2, 
    required: true },
  { label: "Enter an adjective that relates to the sun",  
    title: "Enter an adjective that relates to the sun",  
    type: "text", 
    placeholder: "Adjective", 
    name: "adjective2", 
    minlength: 2, 
    required: true },
];

var iamFields = [
  { poem: "I AM..."},
  { label: "Enter two words about yourself", 
    type: "text", 
    placeholder: "Two words about me", 
    // pattern: "^\w+\s\w+$", 
    name: "twowords", 
    minlength: 3, 
    required: true },
  { label: "Enter up to 6 words that describe something you wonder about", 
    type: "text",
    placeholder: "I wonder... (up to 6 words)",
    name: "iwonder", 
    // pattern: "^(\b\w+\b\s*){1,6}$", 
    minlength: 2, 
    required: true },
  { label: "Enter a noun (something you hear)",  
    type: "text", 
    title: "Please enter a word for a sound", 
    placeholder: "I hear...", 
    name: "sound", 
    minlength: 2, 
    required: true },
  { label: "Enter a word for something you see",  
    title: "Enter a word for something you see",  
    type: "text", 
    placeholder: "I see...", 
    name: "isee", 
    minlength: 2, 
    required: true },
  { label: "Enter a word or phrase for something you want",  
    title: "Enter a word or phrase for something you want",  
    type: "text", 
    placeholder: "I want...", 
    name: "iwant", 
    minlength: 2, 
    required: true },
];

// attaching the poem style button ids to the button constants
const buttons = [
  { id: "haikuBtn", fields: haikuFields },
  { id: "limerickBtn", fields: limerickFields },
  { id: "natureBtn", fields: natureFields },
  { id: "iamBtn", fields: iamFields },
];

let selectedFields; // Variable to store the selected arrays

buttons.forEach((button) => {   // event listeners for the poem style buttons
  document.getElementById(button.id).addEventListener("click", function () {
    selectedFields = button.fields;
    generateform();
  });
});

// fucntion for creating the dynamic forms
function generateform() {
  const form = document.getElementById("dynamicForm");
  form.innerHTML = ""; // Clear any existing content

  const formContainer = document.getElementById("form-Container");
  formContainer.innerHTML = ""; // Clear any existing content

  const slamContainer = document.getElementById("slamContainer");
  slamContainer.innerHTML = ""; // Clear any existing content

  const printBtn = document.getElementById("printBtn");
  printBtn.innerHTML = ""; // Clear any existing content

  if (selectedFields) {
    const poemType = selectedFields[0].poem; //getting the poem type from the array
    const poemTitle = document.createElement("h1"); // creating an h1 to put the poem type abve the form fields
    poemTitle.textContent = poemType;
    poemTitle.className = "permanent-marker-regular"; // styling the h1 title
    formContainer.appendChild(poemTitle); //appending the title to the form container

    selectedFields.slice(1).forEach((field) => {  // I realized I needed to remove the poem type from this or it would end up as a form field
        const label = document.createElement("label"); // so I've created a new array without the first item
        label.textContent = field.label;
        label.setAttribute("for", field.name);

        const input = document.createElement("input"); // getting the form fields from the arrays
        input.setAttribute("type", field.type);
        input.setAttribute("placeholder", field.placeholder);
        input.setAttribute("name", field.name);
        input.id = field.name;

        if (field.required) input.required = true; // some simple form verifications (note: some didn't work and I've commented those out)
        if (field.minlength) input.minLength = field.minlength;
        if (field.pattern) input.pattern = field.pattern;

        form.appendChild(label); // appending the form input labels
        form.appendChild(document.createElement("br"));  // line breaks to make this legible
        form.appendChild(input);  // appending the form input fields themselves
        form.appendChild(document.createElement("br")); // line breaks
    });

    const submitButton = document.createElement("button"); // creating the submit button
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Submit";
    form.appendChild(submitButton); // appending the submit button to the form


    form.addEventListener("submit", function (event) {  // event listener for the submit button
        event.preventDefault(); // prevent default on the submit button

        // it was at about this time I started to think the whole thing was a bad idea. I had no clue how to get this to work. My initial test of the concept was fine, but that was sending the values straight to a template literal underneath. This was so much more complex than it needed to be.
        const formData = new FormData(form);  // collecting the form data
        const formValues = Object.fromEntries(formData.entries());  //I had to look this one up and ask for help. This returns the key value pairs data and will convert the data to a JS object. the data is then stored in the formValues variable.

        let poemOutput = ""; // creating the peom output variable
        if (poemType === "HAIKU") {  // checking to see which output type it is
            poemOutput = `
              An ${formValues.adjective1} ${formValues.noun1} <br>
              ${formValues.verb1} through the ${formValues.adjective2} ${formValues.noun2} <br>
              the ${formValues.adjective1} ${formValues.noun1} ${formValues.verb2}
            `;
        } else if (poemType === "LIMERICK") { // once the poem style is matched, the values are run into a template literal
            poemOutput = `
              There once was a ${formValues.noun1} from ${formValues.place1} <br>
              Who ${formValues.verb1} with a funny face <br>
              The ${formValues.adjective} ${formValues.noun1} <br>
              ${formValues.verb1} around <br>
              And left without a trace.
            `;
        } else if (poemType === "NATURE") { // I was originally trying to do this the same way I did the form, but it just never worked right and I ran out of time.
            poemOutput = `
              The ${formValues.adjective1} ${formValues.noun1} sways in the breeze, <br>
              ${formValues.verb1} softly among the trees. <br>
              With a ${formValues.noun2} in the sky, <br>
              I watch it fly high, <br>
              as the ${formValues.adjective2} sun sets with ease.
            `;
        } else if (poemType === "I AM...") {  // but this seems to work!
            poemOutput = `
              I am ${formValues.twowords}. <br>
              I wonder ${formValues.iwonder}. <br>
              I hear ${formValues.sound}. <br>
              I see ${formValues.isee}. <br>
              I want ${formValues.iwant}. <br>
              I am ${formValues.twowords}.
            `;
        }

        slamContainer.innerHTML = poemOutput;  // sending the poem output to the slam container as inn HTML
        slamContainer.style.display = "block"; // making the slam container visible
        formContainer.style.display = "none"; // making the form container invisible

        // Remove any existing print button (first child)
        while (printBtn.firstChild) {
          printBtn.removeChild(printBtn.firstChild);
        }
        
        // creating a fresh print button
        const printButton = document.createElement("button");
        printButton.textContent = "PRINT!";
        printButton.addEventListener("click", function() { // event listener for the print button click event
          window.print();
        });

        // adding the print button to the correct div below the output. note: I tried inside the output but had trouble styling it.
        printBtn.appendChild(printButton);
        printBtn.style.display = "block";  // making the print button visible
    });

    formContainer.appendChild(form); // sending everything from the form event listener to the form container
    formContainer.style.display = "block";  // making the form container visible
    slamContainer.style.display = "none";  // making sure the slam container (the output) is not visible
    printBtn.style.display = "none"; // Hide the print button initially
  }
}

/////////////////////////////////////////////////
///// notes for the poem templates /////////////

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

    // const naturePoem = `
    // The ${adjective1} ${noun1}<br>
    // ${verb1} across the ${noun2}<br>
    // ${adjective1} ${noun1} ${verb2}
    // `; 
    
// **Nature Poem Template**
//      The adjective noun sways in the breeze,
//      Verb-ing softly among the trees.
//      With a noun in the sky,
//      I watch it fly high,
//      As the adjective sun sets with ease.
//Nature form: noun, adjective, verb (ing), noun (something that flys), adjective (something that describes the sun)

    // const iamPoem = `
    // The ${adjective1} ${noun1}<br>
    // ${verb1} across the ${noun2}<br>
    // ${adjective1} ${noun1} ${verb2}
    // `;
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
// the template literals for the poem outputs
// nature
// const naturePoem = `
// The ${adjective1} ${noun1} sways in the breeze, <br>
// ${verb1} softly among the trees. <br>
// With a ${noun2} in the sky, <br>
// I watch it fly high, <br>
// as the ${adjective2} sun sets with ease.
// `; 

// // I am...
// const iamPoem = `
// I am ${twowords}. <br>
// I wonder ${iwonder}. <br>
// I hear ${sound}. <br>
// I see ${isee}. <br>
// I want ${iwant}. <br>
// I am ${twowords}.
// `;

// // limerick
// const limerickPoem = `
// There once was a ${noun1} from ${place1} <br>
// Who ${verb1} with a funny face <br>
// The ${adjective} ${noun1} <br>
//   ${verb1} around <br>
// And left without a trace.
// `;

// // haiku
// const haikuPoem = `
// An ${adjective1} ${noun1} <br>
// ${verb1} through the ${adjective2} ${noun2} <br>
// the ${adjective1} ${noun1} ${verb2}
// `;