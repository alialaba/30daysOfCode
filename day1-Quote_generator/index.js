const quotes=[
        {
          "quote": "Be the change that you wish to see in the world.",
          "author": "Mahatma Gandhi"
        },
        {
          "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
          "author": "Nelson Mandela"
        },
        {
          "quote": "In three words I can sum up everything I've learned about life: it goes on.",
          "author": "Robert Frost"
        },
        {
          "quote": "I have not failed. I've just found 10,000 ways that won't work.",
          "author": "Thomas Edison"
        },
        {
          "quote": "I have a dream that one day this nation will rise up and live out the true meaning of its creed: \"We hold these truths to be self-evident, that all men are created equal.\"",
          "author": "Martin Luther King Jr."
        }
      ]
   


const quoteBtn = document.querySelector(".quote__newbtn");
const quoteText = document.querySelector(".quote__text");
const quoteAuthor = document.querySelector(".quote__name");


quoteBtn.addEventListener("click", ()=>{
    const randomIndex = Math.floor(Math.random() * quotes.length);

    quoteText.textContent = quotes[randomIndex].quote;
    quoteAuthor.textContent = quotes[randomIndex].author;
})


