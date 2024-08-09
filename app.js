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