/* ==========================================================================
   Reusable quiz + prediction widgets for the Lua course.
   No dependencies. Include once per lesson:  <script src="../assets/quiz.js"></script>

   Two widget types, both built for retrieval practice (predict from memory,
   then get immediate automatic feedback):

   1) Multiple choice
      <div class="quiz" data-answer="1">
        <p class="q">Question text…</p>
        <button>option zero</button>
        <button>option one</button>       <-- data-answer is the 0-based index
        <button>option two</button>
        <p class="why" hidden>Explanation shown after any answer.</p>
      </div>

   2) Predict-then-reveal (for "what does this print?")
      <div class="reveal">
        <p class="q">Predict the output, then reveal.</p>
        <button class="reveal-btn">Reveal answer</button>
        <div class="answer" hidden>…the answer + why…</div>
      </div>

   Keep quiz option labels uniform in length/format — no formatting tells.
   ========================================================================== */

(function () {
  function styleInject() {
    if (document.getElementById("quiz-css")) return;
    const css = `
      .quiz, .reveal { background:#f6f2e8; border:1px solid var(--rule,#d8d4c8);
        border-radius:6px; padding:1rem 1.2rem; margin:1.6rem 0; }
      .quiz .q, .reveal .q { font-weight:700; margin:0 0 0.8rem; }
      .quiz .q::before, .reveal .q::before { content:"✎ Recall"; display:block;
        font-size:0.72rem; letter-spacing:0.06em; text-transform:uppercase;
        color:var(--accent,#7a3b2e); margin-bottom:0.3rem; font-weight:700; }
      .quiz button, .reveal-btn { display:block; width:100%; text-align:left;
        font:inherit; font-size:0.95rem; background:#fff; border:1px solid var(--rule,#d8d4c8);
        border-radius:4px; padding:0.5rem 0.8rem; margin:0.35rem 0; cursor:pointer;
        transition:background .12s, border-color .12s; }
      .quiz button:hover, .reveal-btn:hover { border-color:var(--accent,#7a3b2e); }
      .quiz button.correct { background:#e7f0e9; border-color:var(--good,#2f6b3f);
        color:var(--good,#2f6b3f); font-weight:700; }
      .quiz button.wrong { background:#fbeee9; border-color:var(--bad,#9c3025);
        color:var(--bad,#9c3025); }
      .quiz button:disabled { cursor:default; opacity:1; }
      .quiz .why, .reveal .answer { margin:0.8rem 0 0; padding-top:0.7rem;
        border-top:1px dashed var(--rule,#d8d4c8); font-size:0.95rem; }
      .reveal-btn { text-align:center; font-weight:700; color:var(--accent,#7a3b2e); }
    `;
    const s = document.createElement("style");
    s.id = "quiz-css";
    s.textContent = css;
    document.head.appendChild(s);
  }

  function wireQuiz(box) {
    const answer = parseInt(box.dataset.answer, 10);
    const btns = Array.from(box.querySelectorAll("button"));
    const why = box.querySelector(".why");
    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        if (box.dataset.done) return;
        box.dataset.done = "1";
        btns.forEach((b, j) => {
          b.disabled = true;
          if (j === answer) b.classList.add("correct");
          else if (j === i) b.classList.add("wrong");
        });
        if (why) why.hidden = false;
      });
    });
  }

  function wireReveal(box) {
    const btn = box.querySelector(".reveal-btn");
    const ans = box.querySelector(".answer");
    if (!btn || !ans) return;
    btn.addEventListener("click", () => {
      ans.hidden = false;
      btn.hidden = true;
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    styleInject();
    document.querySelectorAll(".quiz").forEach(wireQuiz);
    document.querySelectorAll(".reveal").forEach(wireReveal);
  });
})();
