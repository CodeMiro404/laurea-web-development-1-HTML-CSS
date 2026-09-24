// Harjoitus 1
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const example = document.getElementById("example");

button1.addEventListener("click", function() {
    alert("Painoit minua!");
});

button2.onclick = showTable;

function showTable() {
    const animal = "Tiikeri";
    const habitat = "Metsä";
    const diet = "Liha";
    const animal2 = "Norsu";
    const habitat2 = "Savanni";
    const diet2 = "Kasvit";

    const table = `
        <table>
            <thead>
                <tr>
                    <th>Eläin</th>
                    <th>Elinympäristö</th>
                    <th>Ruokavalio</th>
                    </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${animal}</td>
                    <td>${habitat}</td>
                    <td>${diet}</td>
                </tr>
                <tr>
                    <td>${animal2}</td>
                    <td>${habitat2}</td>
                    <td>${diet2}</td>
                </tr>
            </tbody>
        </table>
    `;

   // console.log(table);

    document.querySelector("#tableContainer").innerHTML = table;
}

// Harjoitus 2
const mouseover = document.querySelector("#mouseover");

mouseover.addEventListener("mouseover", function() {
    console.log("Stepped over me with a mouse!");
});

const harjoitus1 = document.querySelector("#harjoitus1");

harjoitus1.addEventListener("click", function() {
    harjoitus1.textContent = "Bye bye mouse!";
    harjoitus1.style.color = "red";
});

// Harjoitus 3
const feedback = document.querySelector("#feedback");
const status = document.querySelector("#status");
const charcount = document.querySelector("#charcount");
const preview = document.querySelector("#preview");

feedback.addEventListener("focus", function() {
    status.textContent = "Kirjoita palautteesi...";
    feedback.style.backgroundColor = "#ffffe0";
});

feedback.addEventListener("blur", function() {
    status.textContent = "";
    feedback.style.backgroundColor = "";
});

feedback.addEventListener("input", function() {
    charcount.textContent = `${feedback.value.length}/200`;
    preview.textContent = feedback.value;
});

// Harjoitus 4
const feedbackForm = document.querySelector("#feedbackForm");

feedbackForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const text = feedback.value.trim();

    if (text.length < 10 || text.length > 200) {
        status.textContent = "Palautteen tulee olla 10-200 merkkiä pitkä.";
        status.style.color = "red";
    } else {
        feedback.value = "";
        charcount.textContent = "0/200";
        preview.textContent = "";
        status.textContent = "Kiitos palautteestasi!";
        status.style.color = "green";
    }
});

// Harjoitus 5
const keybox = document.querySelector("#keybox");
const keyinfo = document.querySelector("#keyinfo");

document.addEventListener("keydown", function(event) {
    console.log(event);

    keyinfo.textContent = `Paina näppäintä: ${event.key} (koodi: ${event.code})`;

    keybox.textContent = event.key;
    keybox.style.fontsize = "4em";
});