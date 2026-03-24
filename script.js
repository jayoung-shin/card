const deco = document.getElementById("backgroundDeco");

const palette = ["#ec5fa9", "#f38abc", "#f6a9d0", "#ffd1e8"];

for (let i = 0; i < 22; i += 1) {
  const dot = document.createElement("span");
  dot.className = "dot";
  dot.style.left = `${Math.random() * 100}%`;
  dot.style.top = `${Math.random() * 100}%`;
  dot.style.background = palette[Math.floor(Math.random() * palette.length)];
  dot.style.animationDelay = `${Math.random() * 2.5}s`;
  dot.style.transform = `scale(${0.5 + Math.random() * 1.4})`;
  deco.appendChild(dot);
}
