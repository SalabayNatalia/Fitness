const activateTab = function () {
  const tabNav = document.querySelectorAll('.tabs-nav__item');
  const tabContent = document.querySelectorAll('.tab');
  let tabName;
  if (tabNav) {
    tabNav.forEach((item) => {
      item.addEventListener('click', () => selectTabNav(item));
    });
  }
  function selectTabNav(selectedItem) {
    tabNav.forEach((item) => {
      item.classList.remove('is-active');
    });
    selectedItem.classList.add('is-active');
    tabName = selectedItem.getAttribute('data-tab-name');
    selectTabContent(tabName);
  }

  function selectTabContent(selectedTabName) {
    tabContent.forEach((item) => {
      if (item.classList.contains(selectedTabName)) {
        item.classList.add('is-active');
      } else {
        item.classList.remove('is-active');
      }
    });
  }
};

export {activateTab};
