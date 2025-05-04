const tabs = document.querySelectorAll(".tabs-option");
const tabContent = document.querySelectorAll(".tabs-content-list");

tabs.forEach((tab, i) => {
  tab.addEventListener("click", function () {
    tabs.forEach(tab => tab.classList.remove("active"));
    this.classList.add("active");
    tabContent.forEach(content => content.classList.add("hidden"));
    tabContent[i].classList.remove("hidden");
  });
});