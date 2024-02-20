//size is 12
const zodiacSigns = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

//based on date, size 31
const compliments = ["You have a really sharp way of noticing details others miss.",
"Your sense of humor makes conversations more enjoyable.",
"You come across as thoughtful and considerate.",
"You have a natural curiosity that’s refreshing.",
"You express your ideas clearly and confidently.",
"There’s a calm strength in how you approach things.",
"You seem like someone who people can rely on.",
"Your perspective adds value to discussions.",
"You have a good balance of logic and creativity.",
"You handle challenges with quiet resilience.",
"You give off a genuinely approachable vibe.",
"Your way of thinking feels original and independent.",
"You seem open to learning and growing.",
"You communicate in a way that feels natural and easy.",
"There’s a sincerity in how you interact.",
"You seem like someone who pays attention to what matters.",
"Your ideas feel well-formed and intentional.",
"You have a grounded and realistic outlook.",
"You come across as self-aware.",
"Your presence feels steady and composed.",
"You seem like someone who values meaningful conversations.",
"You have a subtle confidence that stands out.",
"You bring a sense of clarity to topics.",
"You seem patient and measured in your responses.",
"There’s a quiet creativity in your thinking.",
"You give the impression of being dependable.",
"You seem comfortable being yourself.",
"You have a way of keeping things balanced.",
"Your communication style feels genuine.",
"You seem like someone who reflects before speaking.",
"You bring a thoughtful energy to interactions."
];

//size is 20
const victimCardCompliments = [
"You're so kind, sometimes people take advantage of it, but it’s still a beautiful quality.",
"Your patience is incredible, even when others don’t deserve it.",
"You always give your best, even when no one notices.",
"Your empathy for others is truly rare and special.",
"You handle difficult situations with so much grace.",
"You’re strong, even if you don’t always feel like it.",
"You care deeply, and that’s something not everyone can say.",
"You’re always there for people, even when they aren’t there for you.",
"Your resilience is quietly inspiring.",
"You forgive more than most people ever would.",
"You try to see the good in everyone, even when it’s hard.",
"You carry a lot, but still manage to keep going.",
"Your kindness shines through, even in tough moments.",
"You often put others first, which shows your big heart.",
"You stay gentle in a world that isn’t always kind.",
"You give people chances, even when they might not deserve them.",
"Your understanding nature makes people feel safe.",
"You endure more than people realize.",
"You keep showing up, no matter how hard it gets.",
"Your compassion is one of your greatest strengths."

];

//size is 30
const recommendations = [
"Drink a glass of water first thing in the morning.",
"Take a 10-minute walk every day.",
"Read at least a few pages of a book daily.",
"Keep your phone away while eating meals.",
"Write down one thing you're grateful for each night.",
"Try cooking a new recipe once a week.",
"Get at least 7–8 hours of sleep.",
"Stretch your body after waking up.",
"Limit social media time to specific hours.",
"Organize your workspace regularly.",
"Listen to music that improves your mood.",
"Learn a new skill or hobby gradually.",
"Practice deep breathing when stressed.",
"Keep a small daily to-do list.",
"Spend some time outdoors every day.",
"Stay consistent with small habits.",
"Drink less sugary beverages.",
"Call or text a friend you haven’t spoken to in a while.",
"Set realistic goals for yourself.",
"Take short breaks during long work sessions.",
"Keep your surroundings clean and clutter-free.",
"Be mindful of your posture while sitting.",
"Save a small amount of money regularly.",
"Watch or learn something educational online.",
"Take care of your mental health as much as physical health.",
"Avoid multitasking too much.",
"Celebrate small achievements.",
"Plan your next day before going to bed.",
"Stay curious and ask questions.",
"Be kind to people, including yourself."
];

//size is 20
const predictions = [
"Tomorrow will bring an unexpected opportunity your way.",
"You’ll soon reconnect with someone from your past.",
"A small decision you make will have a big impact later.",
"You’re about to learn something that changes your perspective.",
"A pleasant surprise is waiting for you this week.",
"You’ll find clarity in a situation that has been confusing.",
"An idea you’ve been thinking about will start to take shape.",
"You’ll receive good news when you least expect it.",
"A challenge ahead will turn into a valuable lesson.",
"You’ll meet someone who inspires you.",
"A new habit will improve your daily routine.",
"You’ll discover a hidden talent within yourself.",
"A moment of luck will brighten your day soon.",
"You’ll finally complete something you’ve been putting off.",
"A conversation will bring you unexpected insight.",
"You’ll feel more confident about a decision you’ve made.",
"A change in your routine will lead to positive results.",
"You’ll gain recognition for something you’ve done.",
"A new opportunity will open doors for you.",
"You’ll find joy in something simple and unexpected."
];

const form = document.getElementById("astroForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const date = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
   
  const text = `Hi ${name} ${surname}, Your Zodiac sign is ${zodiacSigns[month-1]}, and your compliment is: ${compliments[date-1]}, your victim card compliment is: ${victimCardCompliments[year%20]}, your recommendation is: ${recommendations[date*month%30]}, and your prediction is: ${predictions[(name.length*surname.length)%20]}.`;

  const resultDiv = document.getElementById("result");
  resultDiv.textContent = text;
  resultDiv.classList.add("show");
});