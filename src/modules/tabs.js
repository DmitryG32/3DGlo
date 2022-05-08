const tabs = () => {
  const tabPanel = document.querySelector(".service-header");
  const tabContent = document.querySelectorAll(".service-tab");
  const tabs = document.querySelectorAll(".service-header-tab");

  tabPanel.addEventListener("click", (e) => {
    if (e.target.closest(".service-header-tab")) {
      const tabBtn = e.target.closest(".service-header-tab");
      // всё что прокликивается "сверху" до нужного класса засчитывается
      //если я кликаю именно по service-header-tab
      tabs.forEach((tab, index) => {
        if (tab === tabBtn) {
          //  tabBtn вместо e.target т.к таргетом может быть спан
          tab.classList.add("active");
          tabContent[index].classList.remove("d-none");
        } else {
          tab.classList.remove("active");
          tabContent[index].classList.add("d-none");
        }
      });
    }
  });
};

export default tabs;
