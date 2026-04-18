function injectHeroButtons() {
    const home = document.querySelector(".homePage");
    if (!home) return;

    if (document.querySelector(".hero-buttons")) return;

    const container = document.createElement("div");
    container.className = "hero-buttons";

    container.innerHTML = `
        <button class="hero-play">▶ Play</button>
        <button class="hero-info">ℹ Info</button>
    `;

    home.appendChild(container);

    container.querySelector(".hero-play").onclick = () => {
        const first = document.querySelector(".cardBox");
        if (first) first.click();
    };

    container.querySelector(".hero-info").onclick = () => {
        const first = document.querySelector(".cardBox");
        if (first) first.click();
    };
}

setInterval(injectHeroButtons, 2000);