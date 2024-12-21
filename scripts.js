// تغییر تب‌ها
document.querySelectorAll(".tab-btn").forEach(button => {
  button.addEventListener("click", () => {
      const target = button.dataset.target;

      // غیرفعال کردن تمام دکمه‌ها
      document.querySelectorAll(".tab-btn").forEach(btn => {
          btn.classList.remove("active");
      });

      // فعال کردن دکمه کلیک‌شده
      button.classList.add("active");

      // غیرفعال کردن تمام سکشن‌ها
      document.querySelectorAll(".content-section").forEach(section => {
          section.classList.remove("active");
      });

      // نمایش سکشن هدف
      document.getElementById(target).classList.add("active");
  });
});

// تغییر زبان با پیام تایید
const languageSelect = document.getElementById("language-select");
languageSelect.addEventListener("change", () => {
  const selectedLanguage = languageSelect.value;
  alert(`زبان به ${selectedLanguage === "fa" ? "فارسی" : "انگلیسی"} تغییر یافت.`);
});

// تغییر عکس پروفایل
const changeProfilePic = document.getElementById("change-profile-pic");
changeProfilePic.addEventListener("click", () => {
  alert("ویژگی تغییر عکس پروفایل در حال حاضر غیرفعال است.");
});
