//add event listener for submit on click
// pull name from document and save under variable
// pull birthdate from document, save as variable, 
// compare dates to zodiac signs
//(name + "you are a/ an " + zodiac), print to dom


// document.querySelector('#name')
// console.log(Name + "you are a/an " + dob)

const form = document.querySelector(".horoscope-form");
const output = document.querySelector("#output");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  const nameInput = document.querySelector("#name").value.trim();
  const dob = new Date(document.querySelector("#dob").value);

  //  name
  if (!nameInput) {
    output.textContent = "Please enter your name.";
    return;
  }

  // Capitalize first letter of name
  const name = nameInput.charAt(0).toUpperCase() + nameInput.slice(1);

  //  date
  if (!dob || isNaN(dob)) {
    output.textContent = "Please enter a valid date of birth.";
    return;
  }

  const month = dob.getMonth() + 1; 
  const day = dob.getDate();

  function getZodiac(month, day) {
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Aquarius ♒";
    if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Pisces ♓";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries ♈";
    if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Taurus ♉";
    if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Gemini ♊";
    if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cancer ♋";
    if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo ♌";
    if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo ♍";
    if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra ♎";
    if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Scorpio ♏";
    if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagittarius ♐";
    return "Capricorn ♑"; // Dec 22 – Jan 19
  }

  const zodiac = getZodiac(month, day);

  // message
  const messages = {
    "Aquarius ♒": "Innovation and surprises are on your side today.",
    "Pisces ♓": "Your intuition is extra sharp — trust it!",
    "Aries ♈": "Today’s energy is fiery — take the lead!",
    "Taurus ♉": "Patience and persistence will pay off big time.",
    "Gemini ♊": "Conversations spark fresh opportunities.",
    "Cancer ♋": "Nurture yourself as much as you do others.",
    "Leo ♌": "The spotlight is on you — shine brightly!",
    "Virgo ♍": "Your attention to detail brings success today.",
    "Libra ♎": "Balance is key — harmony attracts good things.",
    "Scorpio ♏": "Intensity works in your favor — embrace it.",
    "Sagittarius ♐": "Adventure calls — explore something new.",
    "Capricorn ♑": "Hard work today sets up big rewards tomorrow."
  };

  // Print
  output.textContent = `${name}, you are a ${zodiac}! 🌟 ${messages[zodiac]}`;
});
