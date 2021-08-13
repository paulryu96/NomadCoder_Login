const quotes = [
  {
    quote : "A room without books is like a body without a soul.",
    author : "- Marcus Tullius Cicero"
  },
  {
    quote : "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author : "- Marilyn Monroe"
  },
  {
    quote : "Be yourself; everyone else is already taken.",
    author : "- Oscar Wilde"
  },
  {
    quote : "So many books, so little time.",
    author : "- Frank Zappa"
  }
]

const quote = document.querySelector('#quote span:first-child')
const author = document.querySelector('#quote span:last-child')

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author