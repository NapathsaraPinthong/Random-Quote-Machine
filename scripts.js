const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

const quotes = [
    {
        text: "Remember no one can make you feel inferior without your consent.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "Ask not what your country can do for you; ask what you can do for your country.",
        author: "John Kennedy"
    },
    {
        text: "All the world's a stage, and all the men and women merely players.",
        author: "William Shakespeare"
    },
    {
        text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas Edison"
    },
    {
        text: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
        author: "Martin Luther King"
    },
    {
        text: "I have always depended on the kindness of strangers.",
        author: "Blanche Dubois"
    },
    {
        text: "If you want something said, ask a man; if you want something done, ask a woman.",
        author: "Margaret Thatcher"
    },
    {
        text: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: "Albert Einstein"
    },
    {
        text: "No one can make you feel inferior without your consent.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "That's one small step for a man, a giant leap for mankind.",
        author: "Neil Armstrong"
    },
    {
        text: "Tis better to have loved and lost than never to have loved at all.",
        author: "Alfred Lord Tennyson"
    },
    {
        text: "Two roads diverged in a wood, and I, I took the one less travelled by, and that has made all the difference.",
        author: "Robert Frost"
    },
]

function randomQuote() {
    let i = Math.round(Math.random() * (colors.length - 1))
    document.documentElement.style
    .setProperty('--primary', `${colors[i]}`);
    text.innerHTML = `${quotes[i].text}`;
    author.innerHTML = `${quotes[i].author}`;
   
}

const text = document.querySelector("#text")
const author = document.querySelector("#author")

document.getElementById('tweet-quote').href = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
encodeURIComponent('"' + text.innerHTML + '" ' + author.innerHTML);


document.getElementById('tumblr-quote').href = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
encodeURIComponent(author.innerHTML) +
'&content=' +
encodeURIComponent(text.innerHTML) +
'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button' 
