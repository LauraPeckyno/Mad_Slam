document.body.style.cursor = "url(http://www.pecknotes.com/handpoint2.cur), pointer";
const haikuBtn = document.getElementById("haikuBtn");
const limerickBtn = document.getElementById("limerickBtn");
const natureBtn = document.getElementById("natureBtn");
const iamBtn = document.getElementById("iamBtn");

var haikuFields = [
  { poem: "HAIKU"},
    { label: "Enter a noun", type: "text", placeholder: "Noun", name: "noun1", minlength: 2, required: true },
  { label: "Enter an adjective that describes that noun", 
    type: "text",
    placeholder: "Adjective that describes the noun",
    name: "adjective1", minlength: 2, required: true 
  },
  { label: "Enter a verb ending in ...ing",  pattern: ".*ing$", type: "text", title: "Please enter a verb ending in ...ing", placeholder: "Verb ending in ...ing", name: "verb1", minlength: 2, required: true },
  { label: "Enter a new noun",  type: "text", placeholder: "New noun", name: "noun2", minlength: 2, required: true },
  { label: "Enter a verb ending in ...s",  pattern: ".*s$", type: "text", placeholder: "Verb ending in ...s", name: "verb2", minlength: 2, required: true },
];
//Haiku form: adjective, noun, ing verb. adjective, noun, adjective, noun

var limerickFields = [
  {poem: "LIMERICK"},
    { label: "Enter a noun", type: "text", placeholder: "Noun", name: "noun1", minlength: 2, required: true },
    { label: "Enter an adjective describing your noun",  type: "text", placeholder: "Adjective", name: "adjective", minlength: 2, required: true },
    { label: "Enter a place (a city or country would work)", 
    type: "text",
    placeholder: "Place",
    name: "place1", minlength: 2, required: true 
  },
  { label: "Enter a verb ending in ...ed",  pattern: ".*ed$", type: "text", title: "Please enter a verb ending in ...ed", placeholder: "Verb ending in ...ed", name: "verb1", minlength: 2, required: true },
 //Limerick form: noun, place, verb(ed), adjective
];

var natureFields = [
  {poem: "NATURE"},
    { label: "Enter a noun", type: "text", placeholder: "Noun", name: "noun1", minlength: 2, required: true },
  { label: "Enter an adjective that describes that noun", 
    type: "text",
    placeholder: "Adjective that describes the noun",
    name: "adjective1", minlength: 2, required: true 
  },
  { label: "Enter a verb ending in ...ing",  pattern: ".*ing$", type: "text", title: "Please enter a verb ending in ...ing", placeholder: "Verb ending in ...ing", name: "verb1", minlength: 2, required: true },
  { label: "Enter a new noun (something you'd see in the sky)",  type: "text", placeholder: "New noun", name: "noun2", minlength: 2, required: true },
  { label: "Enter an adjective that relates to the sun",  type: "text", placeholder: "Adjective", name: "adjective2", minlength: 2, required: true },
];
//Nature form: noun, adjective, verb (ing), noun (something that flys), adjective (something that describes the sun)

var iamFields = [
  {poem: "I AM..."},
    { label: "Enter two words about yourself", type: "text", placeholder: "Two words about me", pattern: "^\w+\s\w+$", name: "2words", minlength: 3, required: true },
  { label: "Enter an adjective that describes that noun", 
    type: "text",
    placeholder: "Adjective that describes the noun",
    name: "adjective1", minlength: 2, required: true 
  },
  { label: "Enter a verb ending in ...ing",  pattern: ".*ing$", type: "text", title: "Please enter a verb ending in ...ing", placeholder: "Verb ending in ...ing", name: "verb1", minlength: 2, required: true },
  { label: "Enter a new noun (something you'd see in the sky)",  type: "text", placeholder: "New noun", name: "noun2", minlength: 2, required: true },
  { label: "Enter an adjective that relates to the sun",  type: "text", placeholder: "Adjective", name: "adjective2", minlength: 2, required: true },
];
//      I am a _ (2 words to describe self)
//      I wonder _ (something you are curious about)
//      I hear _ (a sound)
//      I see _ (a sight)
//      I want _ (something you want)
//      I am _ (repeat of first line)

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
  const formContainer = document.getElementById("form-Container");
  formContainer.innerHTML = ""; // Clear any existing content

  if (selectedFields) {
    const poem = document.createElement("h1");
    poem.textContent = selectedFields[0].poem;
    poem.setAttribute("class", "permanent-marker-regular");
    formContainer.appendChild(poem);

    selectedFields.slice(1).forEach((field) => {
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
      formContainer.appendChild(label); // add the label
      formContainer.appendChild(document.createElement("br"));
      formContainer.appendChild(input); // add the input
      formContainer.appendChild(document.createElement("br"));
    });

    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit"); // creating a submit button
    submitButton.textContent = "Submit";
    formContainer.appendChild(submitButton);

    // add an event listener to handle form submission
    formContainer.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission
      const formData = new FormData(form);
      const formValues = Object.fromEntries(formData.entries());
      // document.getElementById('wordsOutput').innerHTML = formValues; 
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
