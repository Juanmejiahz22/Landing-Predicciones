const btn = document.getElementById("telegramBtn");

if (btn) {
  btn.addEventListener("click", (e) => {
    console.log("telegramBtn clicked", { tag: btn.tagName });

    if (btn.tagName && btn.tagName.toLowerCase() === "a") {
      return;
    }

    window.location.href = "https://t.me/+fzyyyIPlGNswY2Jh";
  });
} else {
  console.warn("telegramBtn not found in DOM");
}

