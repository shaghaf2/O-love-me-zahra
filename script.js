 const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// دالة موحدة لتغيير مكان الزر
function moveNoButton(e) {
  // إذا كان الحدث من اللمس، نمنع الـ Click والـ Zoom الافتراضي
  if (e.type === "touchstart") {
    e.preventDefault(); 
  }

  // حساب الأبعاد المتاحة داخل الحاوية مع طرح أبعاد الزر حتى لا يخرج عن الحواف
  const maxX = questionContainer.clientWidth - noBtn.offsetWidth;
  const maxY = questionContainer.clientHeight - noBtn.offsetHeight;

  // توليد إحداثيات عشوائية آمنة
  const newX = Math.floor(Math.random() * Math.max(maxX, 1));
  const newY = Math.floor(Math.random() * Math.max(maxY, 1));

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

// تشغيل الهروب عند مرور الماوس (للحاسبة)
noBtn.addEventListener("mouseover", moveNoButton);

// تشغيل الهروب عند أول لمسة (للآيباد والموبايل)
noBtn.addEventListener("touchstart", moveNoButton, { passive: false });

// وظيفة زر "إي" (بقت مثل ما هي)
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});
