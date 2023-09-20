const sentence = [
    "The quick brown fox jumps over the lazy dog, demonstrating its agility and speed as it gracefully arcs through the air.",
    "In the depths of winter, I finally learned that there was in me an invincible summer, with the warmth of a thousand suns.",
    "To succeed in life, you need two things: ignorance and confidence. With these, you can achieve anything you set your mind to.",
    "The universe is a vast and mysterious place, filled with countless galaxies, stars, and planets, each with its own unique story to tell.",
    "The power of imagination makes us infinite, allowing us to explore worlds beyond the boundaries of our own reality.",
    "Life is like riding a bicycle. To keep your balance, you must keep moving forward, even when faced with obstacles and challenges.",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall, learning from our mistakes and persevering.","The greatest glory in living lies not in never falling, but in rising every time we fall, learning from our mistakes and persevering.","Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
];

function getRandomSentence(){
    const randomIndex = Math.floor(Math.random() *sentence.length);
    return sentence[randomIndex];
}

module.exports = {
    getRandomSentence,
};



