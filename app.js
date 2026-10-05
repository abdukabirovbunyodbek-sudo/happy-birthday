const elEnvelope = document.querySelector("#envelope");
const elIntro = document.querySelector("#intro");
const elCelebration = document.querySelector("#celebration");
const elCardWrapper = document.querySelector("#cardWrapper");

const elFireworks = document.querySelector("#fireworks");
const elConfetti = document.querySelector("#confetti");
const elStars = document.querySelector("#stars");

const elTyping = document.querySelector("#typing");
const elWishButton = document.querySelector("#wishButton");
const elSecretWish = document.querySelector("#secretWish");

const elMouseGlow = document.querySelector("#mouseGlow");


// ===============================
// ⭐ YULDUZLARNI YARATISH
// ===============================

for (let i = 0; i < 80; i++) {
    const star = document.createElement("span");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    const size = Math.random() * 3 + 1;
    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDelay = Math.random() * 3 + "s";
    star.style.animationDuration = Math.random() * 3 + 2 + "s";

    elStars.appendChild(star);
}


// ===============================
// 💌 KONVERTNI BOSISH
// ===============================

elEnvelope.addEventListener("click", function () {

    if (elEnvelope.classList.contains("open")) {
        return;
    }

    elEnvelope.classList.add("open");

    setTimeout(function () {

        elIntro.classList.add("hide");

        startCelebration();

    }, 1500);
});


// ===============================
// 🎆 BAYRAM BOSHLANISHI
// ===============================

function startCelebration() {

    elCelebration.classList.add("show");

    createFireworks();
    createConfetti();

    setTimeout(function () {

        elCelebration.style.opacity = "0";

        setTimeout(function () {

            elCelebration.classList.remove("show");

            elCardWrapper.classList.add("show");

            startTyping();

        }, 1000);

    }, 5000);
}


// ===============================
// 🎆 FIREWORKS
// ===============================

function createFireworks() {

    elFireworks.innerHTML = "";

    const colors = [
        "#ff4d6d",
        "#ffd166",
        "#06d6a0",
        "#4cc9f0",
        "#c77dff",
        "#ffffff"
    ];

    for (let i = 0; i < 8; i++) {

        setTimeout(function () {

            const firework = document.createElement("div");

            firework.classList.add("firework");

            firework.style.left =
                Math.random() * 80 + 10 + "%";

            firework.style.top =
                Math.random() * 55 + 10 + "%";

            firework.style.setProperty(
                "--color",
                colors[Math.floor(Math.random() * colors.length)]
            );

            elFireworks.appendChild(firework);

            for (let j = 0; j < 35; j++) {

                const particle = document.createElement("span");

                particle.classList.add("firework-particle");

                const angle =
                    Math.random() * Math.PI * 2;

                const distance =
                    Math.random() * 130 + 50;

                particle.style.setProperty(
                    "--x",
                    Math.cos(angle) * distance + "px"
                );

                particle.style.setProperty(
                    "--y",
                    Math.sin(angle) * distance + "px"
                );

                particle.style.background =
                    colors[Math.floor(Math.random() * colors.length)];

                firework.appendChild(particle);
            }

            setTimeout(function () {
                firework.remove();
            }, 1800);

        }, i * 450);
    }
}


// ===============================
// 🎉 CONFETTI
// ===============================

function createConfetti() {

    elConfetti.innerHTML = "";

    const colors = [
        "#ff4d6d",
        "#ffd166",
        "#06d6a0",
        "#4cc9f0",
        "#c77dff",
        "#ffffff"
    ];

    for (let i = 0; i < 100; i++) {

        const piece = document.createElement("span");

        piece.classList.add("confetti-piece");

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.top =
            Math.random() * -20 + "%";

        piece.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        piece.style.animationDuration =
            Math.random() * 3 + 3 + "s";

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        elConfetti.appendChild(piece);
    }
}


// ===============================
// ⌨️ TABRIK MATNI
// ===============================

function startTyping() {

    const text =
        "Tug‘ilgan kuning muborak bo‘lsin! Yangi yoshing quvonchli kunlar, omad, baxt va unutilmas xotiralarga boy bo‘lsin. Har doim yuzingdan tabassum arimasin! ✨";

    elTyping.textContent = "";

    let index = 0;

    function type() {

        if (index < text.length) {

            elTyping.textContent += text[index];

            index++;

            setTimeout(type, 35);

        }
    }

    type();
}


// ===============================
// 🎁 MAXFIY TILAK
// ===============================

elWishButton.addEventListener("click", function () {

    elSecretWish.classList.add("show");

    elWishButton.textContent = "✨ Tilak qabul qilindi!";

    createMiniConfetti();
});


// ===============================
// 🎊 KICHIK CONFETTI
// ===============================

function createMiniConfetti() {

    for (let i = 0; i < 25; i++) {

        const piece = document.createElement("span");

        piece.classList.add("mini-confetti");

        piece.style.left = "50%";
        piece.style.top = "50%";

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            Math.random() * 180 + 80;

        piece.style.setProperty(
            "--x",
            Math.cos(angle) * distance + "px"
        );

        piece.style.setProperty(
            "--y",
            Math.sin(angle) * distance + "px"
        );

        document.body.appendChild(piece);

        setTimeout(function () {
            piece.remove();
        }, 1200);
    }
}


// ===============================
// 🖱️ MOUSE GLOW
// ===============================

document.addEventListener("mousemove", function (event) {

    if (!elMouseGlow) return;

    elMouseGlow.style.left =
        event.clientX + "px";

    elMouseGlow.style.top =
        event.clientY + "px";
});


// ===============================
// 🪄 CARD 3D EFFECT
// ===============================

const card = document.querySelector(".birthday-card");

if (card) {

    card.addEventListener("mousemove", function (event) {

        const rect = card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            (y - centerY) / 18;

        const rotateY =
            (centerX - x) / 18;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.02)`;
    });


    card.addEventListener("mouseleave", function () {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    });
}