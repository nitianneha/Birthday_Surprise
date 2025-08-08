
    function showMainPage() {
      const name = document.getElementById("userName").value.trim();
      if (!name) return alert("Please enter your name!");
      document.getElementById("displayName").innerText = name;
      document.querySelector(".centered").style.display = "none";
      document.getElementById("mainPage").style.display = "block";
      document.getElementById("mainPage").scrollIntoView({ behavior: "smooth" });


      // 🎉 Confetti Burst
      const duration = 100 * 1000;
      const end = Date.now() + duration;
      (function frame() {
        confetti({ particleCount: 5, angle: 60, spread: 70, origin: { x: 0 } });
        confetti({ particleCount: 5, angle: 120, spread: 70, origin: { x: 1 } });
        if (Date.now() < end) requestAnimationFrame(frame);
      })();

      // 🔊 Music
      document.getElementById("bdaySound").play();

      // Confetti and Sound
      document.getElementById("bdaySound").play();
      confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
    }

    function scrollToSection(id) {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.expand-section').forEach(sec => observer.observe(sec));