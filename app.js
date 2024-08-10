const haikuBtn = document.getElementById("haikuBtn");
const limerickBtn = document.getElementById("limerickBtn");
const natureBtn = document.getElementById("natureBtn");
const iamBtn = document.getElementById("iamBtn");

var haikuFields = [
  { type: "text", placeholder: "Enter a noun", name: "noun1" },
  {
    type: "text",
    placeholder: "Enter an adjective that describes that noun",
    name: "adjective1",
  },
  { type: "text", placeholder: "Enter a verb ending in ...ing", name: "verb1" },
  { type: "text", placeholder: "Enter a new noun", name: "noun2" },
  { type: "text", placeholder: "Enter a verb ending in ...s", name: "verb2" },
];

var limerickFields = [
  { type: "text", placeholder: "Enter a noun", name: "noun" },
  { type: "text", placeholder: "Enter an adjective", name: "adjective" },
  { type: "text", placeholder: "Enter a verb", name: "verb" },
  { type: "text", placeholder: "Enter a phrase", name: "phrase" },
];

var natureFields = [
  { type: "text", placeholder: "Enter a noun", name: "noun" },
  { type: "text", placeholder: "Enter an adjective", name: "adjective" },
  { type: "text", placeholder: "Enter a verb", name: "verb" },
  { type: "text", placeholder: "Enter a phrase", name: "phrase" },
];

var iamFields = [
  { type: "text", placeholder: "Enter a noun", name: "noun" },
  { type: "text", placeholder: "Enter an adjective", name: "adjective" },
  { type: "text", placeholder: "Enter a verb", name: "verb" },
  { type: "text", placeholder: "Enter a phrase", name: "phrase" },
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
      const input = document.createElement("input");
      input.setAttribute("type", field.type);
      input.setAttribute("placeholder", field.placeholder);
      input.setAttribute("name", field.name);
      form.appendChild(input);
      form.appendChild(document.createElement("br"));
    });

    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit"); // Set button type to 'submit'
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);

    // add an event listener to handle form submission
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission
      const formData = new FormData(form);
      const formValues = Object.fromEntries(formData.entries());
      document.getElementById('wordsOutput').innerHTML = formvalues;
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

