
/* 林柏聖｜個人履歷網站 JavaScript */

document.addEventListener("DOMContentLoaded", function () {

  // 取得導覽列連結
  const navLinks = document.querySelectorAll(
    "#navbarResponsive .nav-link"
  );

  // 取得導覽列選單
  const navbarCollapse = document.getElementById(
    "navbarResponsive"
  );

  // 手機版點擊連結後自動收合選單
  navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      if (
        window.innerWidth < 992 &&
        navbarCollapse.classList.contains("show")
      ) {

        const collapse =
          bootstrap.Collapse.getOrCreateInstance(navbarCollapse);

        collapse.hide();

      }

    });

  });

  // 取得所有履歷區塊
  const sections = document.querySelectorAll(
    "main section[id]"
  );

  // 監測目前所在的區塊
  const observer = new IntersectionObserver(

    function (entries) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {

          navLinks.forEach(function (link) {

            const isCurrent =
              link.getAttribute("href") ===
              "#" + entry.target.id;

            link.classList.toggle("active", isCurrent);

          });

        }

      });

    },

    {
      rootMargin: "-35% 0px -55% 0px"
    }

  );

  // 開始監測每個區塊
  sections.forEach(function (section) {

    observer.observe(section);

  });

});
