!function(){const t=document.querySelectorAll("[data-modal"),e=document.body,n=document.querySelectorAll(".close"),c=document.querySelectorAll(".modal");function o(t){t.classList.remove("show"),e.classList.remove("not-scroll")}t.forEach((function(t){t.addEventListener("click",(function(t){let n=t.currentTarget.getAttribute("data-modal"),c=document.getElementById(n);c.querySelector(".modal__content").addEventListener("click",(function(t){t.stopPropagation()})),c.classList.add("show"),e.classList.add("not-scroll")}))})),n.forEach((function(t){t.addEventListener("click",(function(t){o(t.currentTarget.closest(".modal"))}))})),c.forEach((function(t){t.addEventListener("click",(function(t){o(t.currentTarget)}))}))}(),function(){let t=document.querySelector(".navigation__burger"),e=document.querySelector(".sidebar");t.addEventListener("click",(function(t){t.preventDefault(),e.classList.toggle("active-sidebar")}))}(),document.querySelectorAll("[data-autoresize]").forEach((function(t){t.addEventListener("input",(function(t){let e=t.target;e.style.height="32px",e.style.height=e.scrollHeight+"px"}))}));