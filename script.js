document.getElementById("btnLove").addEventListener("click", function() {
    const message = document.getElementById("loveMessage");
    const btn = document.getElementById("btnLove");
    message.classList.remove("hidden");
    setTimeout(() => {
        message.classList.add("show");
    }, 100);

    btn.textContent = "I Love You Bro ❤️";
    btn.disabled = true;

    // Tambahkan efek hati yang melayang
    createFloatingHearts();
});

function createFloatingHearts() {
    for (let i = 0; i < 15; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "Nidaaa💖";
        heart.classList.add("heart");
        document.body.appendChild(heart);

        let size = Math.random() * 40 + 10 + "px";
        heart.style.fontSize = size;
        heart.style.left = Math.random() * 10 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 2 + "s";

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}
