const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    quote: "An unexamined life is not worth living.",
    author: "Socrates",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "Get busy living or get busy dying.",
    author: "Stephen King",
  },
  {
    quote: "With greatest power comes greatest responsibilty",
    author: "Peter Parker",
  },
];

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteButton = document.getElementById("new-quote-btn");

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  quoteText.textContent = `"${randomQuote.quote}"`;
  quoteAuthor.textContent = `- ${randomQuote.author}`;
}

newQuoteButton.addEventListener("click", displayRandomQuote);
displayRandomQuote();
