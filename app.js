const haikuBtn = document.getElementById("haikuBtn");
const limerickBtn = document.getElementById("limerickBtn");
const natureBtn = document.getElementById("natureBtn");
const iamBtn = document.getElementById("iamBtn");

var haikuFields = [
    { label: "Enter a noun", type: "text", placeholder: "Noun", name: "noun1", minlength: 2, required: true },
  { label: "Enter an adjective that describes that noun", 
    type: "text",
    placeholder: "Adjective that describes the noun",
    name: "adjective1", minlength: 2, required: true 
  },
  { label: "Enter a verb ending in ...ing",  pattern: "\b\w+ing\b", type: "text", placeholder: "Verb ending in ...ing", name: "verb1", minlength: 2, required: true },
  { label: "Enter a new noun",  type: "text", placeholder: "New noun", name: "noun2", minlength: 2, required: true },
  { label: "Enter a verb ending in ...s",  pattern: "\b\w+s\b", type: "text", placeholder: "Verb ending in ...s", name: "verb2", minlength: 2, required: true },
];

var limerickFields = [
  { type: "text", placeholder: "Enter a noun", name: "noun", minlength: 2, required: true },
  { type: "text", placeholder: "Enter an adjective", name: "adjective", minlength: 2, required: true },
  { type: "text", placeholder: "Enter a verb", name: "verb", minlength: 2, required: true },
  { type: "text", placeholder: "Enter a phrase", name: "phrase", minlength: 2, required: true },
];

var natureFields = [
  { type: "text", placeholder: "Enter a noun", name: "noun", minlength: 2, required: true },
  { type: "text", placeholder: "Enter an adjective", name: "adjective", minlength: 2, required: true },
  { type: "text", placeholder: "Enter a verb", name: "verb", minlength: 2, required: true },
  { type: "text", placeholder: "Enter a phrase", name: "phrase", minlength: 2, required: true },
];

var iamFields = [
  { type: "text", placeholder: "Enter a noun", name: "noun", minlength: 2, required: true },
  { type: "text", placeholder: "Enter an adjective", name: "adjective", minlength: 2, required: true },
  { type: "text", placeholder: "Enter a verb", name: "verb", minlength: 2, required: true },
  { type: "text", placeholder: "Enter a phrase", name: "phrase", minlength: 2, required: true },
];

var selectedFields; // Variable to store the selected array

const buttons = [
  { id: "haikuBtn", fields: haikuFields },
  { id: "limerickBtn", fields: limerickFields },
  { id: "natureBtn", fields: natureFields },
  { id: "iamBtn", fields: iamFields },
];

buttons.forEach((button) => {
  document.getElementById(button.id).addEventListener("click", function () {
    selectedFields = button.fields;
    generateform();
  });
});

function generateform() {
    const form = document.getElementById("dynamicForm");
    form.innerHTML = ""; // Clear any existing content
  
    if (selectedFields) {
      selectedFields.forEach((field) => {
        const label = document.createElement("label");
        label.textContent = field.label;
        label.setAttribute("for", field.name);
        const input = document.createElement("input");
        input.setAttribute("type", field.type);
        input.setAttribute("placeholder", field.placeholder);
        input.setAttribute("name", field.name);
        input.setAttribute("id", field.name); // add an id to the input field
        if (field.required) {
          input.setAttribute("required", "required");
        }
        if (field.minlength) {
          input.setAttribute("minlength", field.minlength);
        }
        if (field.pattern) {
            input.setAttribute("pattern", field.pattern);
          }
        form.appendChild(label); // add the label
        form.appendChild(document.createElement("br"));
        form.appendChild(input); // add the input
        form.appendChild(document.createElement("br"));
      });
  
      const submitButton = document.createElement("button");
      submitButton.setAttribute("type", "submit"); // creating a submit button
      submitButton.textContent = "Submit";
      form.appendChild(submitButton);
  
      // add an event listener to handle form submission
      form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData.entries());
        document.getElementById('wordsOutput').innerHTML = formValues; // fix the typo here
        console.log(formValues); 
      });
    }
  }


// **Haiku Template**
//      An adjective noun
//      Verb-ing through the adjective noun
//      Adjective noun sings
//
//Haiku form: adjective, noun, ing verb. adjective, noun, adjective, noun

//     const limerickPoem = `
//     The ${adjective1} ${noun1}<br>
//     ${verb1} across the ${noun2}<br>
//     ${adjective1} ${noun1} ${verb2}
// `;
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
//

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

