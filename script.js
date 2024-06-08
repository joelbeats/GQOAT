const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { text: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
    { text: "The best way to predict your future is to create it.", author: "Abraham Lincoln" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "Go confidently in the direction of your dreams! Live the life you've imagined.", author: "Henry David Thoreau" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    { text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { text: "You are braver than you believe, stronger than you seem, and smarter than you think.", author: "A.A. Milne" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { text: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.", author: "William W. Purkey" },
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { text: "No one can make you feel inferior without your consent.", author: "Eleanor Roosevelt" },
    { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
    { text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.", author: "Bil Keane" },
    { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas A. Edison" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { text: "Everything has beauty, but not everyone can see.", author: "Confucius" },
    { text: "It is never too late to be what you might have been.", author: "George Eliot" },
    { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { text: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.", author: "Mark Twain" },
    { text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
    { text: "The two most important days in your life are the day you are born and the day you find out why.", author: "Mark Twain" },
    { text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Whatever you are, be a good one.", author: "Abraham Lincoln" },
    { text: "We become what we think about most of the time, and that’s the strangest secret.", author: "Earl Nightingale" },
    { text: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.", author: "Maya Angelou" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "You are braver than you believe, stronger than you seem, and smarter than you think.", author: "A.A. Milne" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" }
];

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function switchContent() {
    const quote = getRandomQuote();
    document.getElementById('text').innerText = quote.text;
    document.getElementById('author').innerText = '- ' + quote.author;
    switchColor();
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}


function getRandomSubtleColor() {
    // Base color: #2f4f4f
    const baseColor = [47, 79, 79]; // RGB for #2f4f4f
    const variationRange = 30;

    function varyColorComponent(component) {
        return Math.max(0, Math.min(255, component + Math.floor(Math.random() * variationRange * 2) - variationRange));
    }

    const newColor = baseColor.map(varyColorComponent);
    return `rgb(${newColor.join(",")})`;
}

function switchColor() {
    const randomColor = getRandomSubtleColor();
    document.body.style.backgroundColor = randomColor;
    document.getElementById('textbox').style.color = "white";
}

// Ensure the script runs only after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').addEventListener('click', switchContent);
});
