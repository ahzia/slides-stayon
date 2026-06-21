(function () {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const counter = document.getElementById("counter");
  const progress = document.getElementById("progress");
  let current = 0;

  const problemVideos = Array.from(document.querySelectorAll(".problem-video"));

  function syncProblemVideos(activeIndex) {
    problemVideos.forEach((video) => {
      if (activeIndex === 0) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }

  function goTo(index) {
    if (index < 0 || index >= slides.length) return;
    slides[current].classList.remove("active");
    current = index;
    slides[current].classList.add("active");
    counter.textContent = `${current + 1} / ${slides.length}`;
    progress.style.width = `${((current + 1) / slides.length) * 100}%`;
    history.replaceState(null, "", `#${current + 1}`);
    syncProblemVideos(current);
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
      e.preventDefault();
      prev();
    } else if (e.key === "Home") {
      goTo(0);
    } else if (e.key === "End") {
      goTo(slides.length - 1);
    } else if (e.key === "f" || e.key === "F") {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen?.();
      } else {
        document.exitFullscreen?.();
      }
    }
  });

  // Deep link: #3 → slide 3
  const hash = parseInt(location.hash.replace("#", ""), 10);
  if (hash >= 1 && hash <= slides.length) goTo(hash - 1);
  else syncProblemVideos(current);

  // Live stats from StayOn API (slide 3)
  fetch("https://stay-on-nu.vercel.app/api/stats/summary")
    .then((r) => r.ok ? r.json() : null)
    .then((data) => {
      if (!data) return;
      const set = (id, val) => {
        const el = document.getElementById(id);
        if (el && val != null) el.textContent = val;
      };
      set("metric-testers", data.testers ?? data.totalTesters);
      set("metric-surveys", data.confirmedSurveys ?? data.surveys);
      set("metric-points", data.pointsEarned ?? data.totalPoints);
      const cash = data.cashTracked ?? data.totalCash;
      if (cash != null) {
        set("metric-cash", typeof cash === "number" ? `€${cash.toFixed(2)}` : cash);
      }
    })
    .catch(() => {});
})();
