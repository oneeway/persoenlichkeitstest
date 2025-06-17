// Define the questions and their assigned categories
const questions = [
    { id: 1, text: "Junge Menschen haben es viel zu einfach.", category: "Y" },
    { id: 2, text: "Mir ist es sehr wichtig Dinge perfekt zu erledigen.", category: "R" },
    { id: 3, text: "Wer behauptet, der Klügere gibt nach, muss ein Feigling sein.", category: "T" },
    { id: 4, text: "Ich versuche immer meinen Kopf durchzusetzen.", category: "T" },
    { id: 5, text: "Die Gesellschaft wäre sicherlich besser bedient, wenn die Menschen nach der Regel der Goldenen Mitte leben würden.", category: "Z" },
    { id: 6, text: "Ich bin gerne lustig und verspielt.", category: "S" },
    { id: 7, text: "Ich habe eindeutige Vorstellungen von richtig und falsch. Ich bleibe jedoch neuen Ideen gegenüber aufgeschlossen.", category: "X" },
    { id: 8, text: "Mir fällt es oft schwer Fehler einzusehen und zuzugeben.", category: "T" },
    { id: 9, text: "Zeige mir deine Kleidung und ich sage dir, ob ich dich anstelle.", category: "Y" },
    { id: 10, text: "Wenn ich anderen Menschen helfe ihr Talent auszuschöpfen, bin ich sehr zufrieden.", category: "Z" },
    { id: 11, text: "Ich verliere oft die Geduld und bin ein ungestümer Mensch.", category: "S" },
    { id: 12, text: "Ich gerate nur selten aus der Fassung.", category: "X" },
    { id: 13, text: "Ich gehe ungern allein zu Veranstaltungen oder in Restaurants.", category: "R" },
    { id: 14, text: "Ich bilde mich sehr gerne weiter.", category: "X" },
    { id: 15, text: "Mit Menschen, die mich enttäuscht haben, will ich nichts mehr zu tun haben.", category: "T" },
    { id: 16, text: "Für die hilfebedürftigen der Welt wird viel zu wenig getan.", category: "Z" },
    { id: 17, text: "Dinge, die mir gefallen, möchte ich so schnell wie möglich haben.", category: "S" },
    { id: 18, text: "Ich ignoriere Befehle und mache das Gegenteil.", category: "T" },
    { id: 19, text: "Wenn jemand krank ist, bin ich fürsorglich und wohlwollend.", category: "Z" },
    { id: 20, text: "Arbeit hat noch niemand geschadet.", category: "Y" },
    { id: 21, text: "Mir fällt es oft schwer Autorität zu akzeptieren.", category: "S" },
    { id: 22, text: "Wenn ich an die Zukunft denke, habe ich oft Angst.", category: "R" },
    { id: 23, text: "Respektvolles Benehmen gegenüber Übergeordneten ist immer besser.", category: "R" },
    { id: 24, text: "Die meisten Menschen, die keine Arbeit haben, bemühen sich zu wenig darum Arbeit zu bekommen.", category: "Y" },
    { id: 25, text: "Ich habe es satt, mir Befehle geben zu lassen.", category: "T" },
    { id: 26, text: "Jeder muss selbst wissen, was er tut. Ich zwinge niemand meine Meinung auf.", category: "X" },
    { id: 27, text: "Es fällt mir schwer, mich für Alternativen zu entscheiden.", category: "R" },
    { id: 28, text: "Ich weiß immer, was ich sage, sage jedoch nicht immer, was ich meine.", category: "X" },
    { id: 29, text: "Lachen ist immer noch die beste Medizin für mich.", category: "S" },
    { id: 30, text: "Lügen haben kurze Beine.", category: "Y" },
    { id: 31, text: "Ich bin mit anderen sehr verständnisvoll und nachsichtig.", category: "Z" },
    { id: 32, text: "Regeln sind dazu da, beachtet zu werden.", category: "Y" },
    { id: 33, text: "Wenn ich Menschen mag, zeige ich es herzlich.", category: "S" },
    { id: 34, text: "Ich weiß nicht, warum ich mit anderen Nachsichtig sein soll.", category: "T" },
    { id: 35, text: "Ordnung muss sein.", category: "Y" },
    { id: 36, text: "Kinder darf man sinnvoll verwöhnen.", category: "Z" },
    { id: 37, text: "Wenn mir etwas nicht klar ist, frage ich so lange, bis es mir klar ist.", category: "X" },
    { id: 38, text: "Ich rede gerne oft vor vielen Menschen und fühle mich wohl dabei.", category: "X" },
    { id: 39, text: "Es fällt mir leicht, meine Freude anderen zu zeigen.", category: "S" },
    { id: 40, text: "Wenn ich einsehe, dass ich bei meinen Überlegungen von falschen Voraussetzungen ausgegangen bin, ändere ich meine Meinung.", category: "X" },
    { id: 41, text: "Ich spiele gerne und oft mit den Spielsachen von (meinen) Kindern.", category: "S" },
    { id: 42, text: "Auch wenn ich eine Meinung nicht teile, respektiere ich sie.", category: "X" },
    { id: 43, text: "Ich finde mich leicht in neuen Umgebungen zurecht.", category: "X" },
    { id: 44, text: "Ich bin sehr häufig spontan und intuitiv.", category: "S" },
    { id: 45, text: "Man sollte rücksichtsvoller miteinander umgehen.", category: "Z" },
    { id: 46, text: "„Liebe deinen nächsten wie dich selbst hat schon seine Bedeutung.", category: "Z" },
    { id: 47, text: "In unklaren Situationen fühle ich mich hilflos.", category: "R" },
    { id: 48, text: "Ich bin sehr offen und muss meine Gefühle nicht verbergen.", category: "S" },
    { id: 49, text: "Endlose Diskussionen sind eine Katastrophe.", category: "T" },
    { id: 50, text: "Menschen in Schwierigkeiten fragen mich oft nach Rat und Hilfe.", category: "Z" },
    { id: 51, text: "Ich übernehme oft Führung, weil ich schnell weiß, was zu tun ist.", category: "Y" },
    { id: 52, text: "Ich bin bemüht den Erwartungen anderer Menschen zu entsprechen.", category: "R" },
    { id: 53, text: "Im Umgang mit Beamten fühle ich mich hilf- und machtlos.", category: "R" },
    { id: 54, text: "Hin und wieder kann ich sehr trotzig sein.", category: "T" },
    { id: 55, text: "Ich übernehme gerne die Aufgaben anderer, mit denen sie nicht klarkommen.", category: "Z" },
    { id: 56, text: "Bei einer Fahrausweiskontrolle keinen gültigen Fahrschein zu haben, wäre mir sehr unangenehm.", category: "R" },
    { id: 57, text: "Am liebsten würde ich alles hinwerfen und auswandern", category: "T" },
    { id: 58, text: "Ich habe feste Ansichten, die ich nur wenig verändere.", category: "Y" },
    { id: 59, text: "Manchmal kaufe ich nur etwas, weil der Verkäufer sich so viel Mühe gegeben hat.", category: "R" },
    { id: 60, text: "Tradition und Bräuche sind mir sehr wichtig.", category: "Y" }
];

// Variables
let currentQuestionIndex = 0;
const totalQuestions = questions.length;
let answers = {};
let categoryCounts = {
    'X': 0,
    'Y': 0,
    'Z': 0,
    'R': 0,
    'S': 0,
    'T': 0
};


// Elements
const understandCheckbox = document.getElementById('understand-checkbox');
const startBtn = document.getElementById('start-btn');
const introSection = document.getElementById('intro');
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const progressBar = document.getElementById('progress-bar');
const progressPercentage = document.getElementById('progress-percentage');
const options = document.querySelectorAll('.option');
const resultsSection = document.getElementById('results');

// Update total questions display
totalQuestionsSpan.textContent = totalQuestions;

// Initialize the start button based on checkbox state
understandCheckbox.addEventListener('change', function() {
    startBtn.disabled = !this.checked;
    // Update button styling to reflect disabled state
    if (this.checked) {
        startBtn.style.backgroundColor = 'var(--primary)';
        startBtn.style.cursor = 'pointer';
    } else {
        startBtn.style.backgroundColor = 'var(--gray)';
        startBtn.style.cursor = 'not-allowed';
    }
});

// Start the test button click handler
startBtn.addEventListener('click', function() {
    if (!understandCheckbox.checked) {
        alert("Bitte bestätigen Sie, dass Sie die Anleitung verstanden haben.");
        return;
    }
    
    introSection.style.display = 'none';
    questionContainer.style.display = 'block';
    showQuestion(currentQuestionIndex);
});

// Handle option selection
options.forEach(option => {
    option.addEventListener('click', function() {
        // Remove selected class from all options
        options.forEach(opt => opt.classList.remove('selected'));
        
        // Add selected class to clicked option
        this.classList.add('selected');
        
        // Save the answer
        const answer = this.getAttribute('data-value') === 'stimmt';
        answers[currentQuestionIndex] = answer;
        
        // If it's "stimmt", increment the category counter
        if (answer) {
            const category = questions[currentQuestionIndex].category;
            categoryCounts[category]++;
        }
        
        // Short delay before moving to next question
        setTimeout(() => {
            if (currentQuestionIndex < totalQuestions - 1) {
                currentQuestionIndex++;
                showQuestion(currentQuestionIndex);
            } else {
                showResults();
            }
        }, 300);
    });
});

// Function to show a question
function showQuestion(index) {
    const question = questions[index];
    questionText.textContent = question.text;
    currentQuestionSpan.textContent = index + 1;
    
    // Reset option selection
    options.forEach(opt => opt.classList.remove('selected'));
    
    // Update progress
    const progress = ((index + 1) / totalQuestions) * 100;
    progressBar.style.width = `${progress}%`;
    progressPercentage.textContent = Math.round(progress);
}

// Function to show results
function showResults() {
    questionContainer.style.display = 'none';
    resultsSection.style.display = 'block';
    
    // Calculate the scores as percentages of total possible for each category
    const categoryMaxValues = {};
    questions.forEach(q => {
        if (!categoryMaxValues[q.category]) {
            categoryMaxValues[q.category] = 0;
        }
        categoryMaxValues[q.category]++;
    });
    
    // Normalize scores to 0-10 scale
    const normalizedScores = {};
    for (const category in categoryCounts) {
        const maxPossible = categoryMaxValues[category] || 1; // Avoid division by zero
        // Scale to 0-10
        normalizedScores[category] = Math.round((categoryCounts[category] / maxPossible) * 10);
    }
    
    // Update the chart
    updateChart(normalizedScores);
}

// Function to update the chart with scores
function updateChart(scores) {
    for (const category in scores) {
        const barElement = document.getElementById(`${category.toLowerCase()}-bar`);
        const valueElement = document.getElementById(`${category.toLowerCase()}-value`);
        
        if (barElement && valueElement) {
            // Set width based on score (0-10 scale)
            const percentage = scores[category] * 10; // Convert to percentage (0-100)
            
            // Animate the bar filling
            setTimeout(() => {
                barElement.style.width = `${percentage}%`;
                valueElement.textContent = scores[category];
            }, 200);
        }
    }
}

// Immediately disable the start button if the checkbox is unchecked initially
startBtn.disabled = !understandCheckbox.checked;

if (!understandCheckbox.checked) {
    startBtn.style.backgroundColor = 'var(--gray)';
    startBtn.style.cursor = 'not-allowed';
}
document.getElementById('download-pdf').addEventListener('click', () => {
// Temporär sichtbar machen
document.querySelectorAll('.pdf-only').forEach(el => {
el.style.display = 'block';
});

// Leicht verzögert rendern
setTimeout(() => {
const element = document.getElementById('pdf-content');

const opt = {
margin: 0.5,
filename: 'Persönlichkeitsergebnis.pdf',
image: { type: 'jpeg', quality: 0.98 },
html2canvas: { scale: 2 },
jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
};

html2pdf().set(opt).from(element).save().then(() => {
// Nach dem PDF-Export: Rückgängig machen & Feedback anzeigen
document.querySelectorAll('.pdf-only').forEach(el => {
el.style.display = 'none';
});

// Erfolgsanzeige (grüner Button + Upsell)
const btn = document.getElementById('download-pdf');
btn.innerText = '✔️ Erfolgreich heruntergeladen!';
btn.style.backgroundColor = '#28a745';
btn.disabled = true;

const upsell = document.createElement('div');
upsell.innerHTML = `
<div class="upsell-box">
  <h3>🔒 Deine Ergebnisse sind sicher!</h3>
  <p>Wir speichern keine Daten. Bringe dein PDF zur <strong>Erstberatung</strong> mit.</p>
  <p>Buche jetzt eine persönliche Einschätzung für nur <strong>79 €</strong> und erhalte wertvolle Impulse für ein leichteres Leben.</p>
  <a class="upsell-button" href="https://dein-coaching-link.de" target="_blank">🧠 Jetzt Beratung sichern</a>
</div>
`;
document.getElementById('download-section').appendChild(upsell);
});
}, 200); // Etwas mehr Zeit für sicheres DOM-Rendering
});