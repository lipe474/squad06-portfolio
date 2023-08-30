function redirectPage() {
  const membersSelect = document.getElementById('members');

  membersSelect.addEventListener('change', function () {
    const selectedValue = membersSelect.value;

    if (selectedValue === 'davi') {
      window.location.href = 'davi/index.html';
    }

    if (selectedValue === 'felipe') {
      window.location.href = 'felipe/index.html';
    }

    if (selectedValue === 'fernanda') {
      window.location.href = 'fernanda/index.html';
    }

    if (selectedValue === 'luan') {
      window.location.href = 'luan/index.html';
    }
  });

  membersSelect.addEventListener('change', function () {
    if (membersSelect.value !== 'members') {
      membersSelect.value = 'members';
    }
  });
}

function toggleMenu() {
  const menuButton = document.querySelector('#menu');
  const closeMenu = document.querySelector('.close-menu');
  const menuMobile = document.querySelector('.menu-mobile');
  const menuButtonContainer = document.querySelector('.menu-button-container');

  menuMobile.style.display = 'none';
  let isMenuOpen = false;

  function openMenu() {
    menuMobile.style.display = 'flex';
    menuMobile.classList.add('menu-open');
    menuMobile.classList.remove('menu-closed');
    menuButtonContainer.style.display = 'none';
    isMenuOpen = true;
  }

  function closeMenuFunction() {
    menuMobile.classList.remove('menu-open');
    menuMobile.classList.add('menu-closed');

    setTimeout(() => {
      menuMobile.style.display = 'none';
      menuMobile.classList.remove('menu-closed');
      menuButtonContainer.style.display = 'block';
      isMenuOpen = false;
    }, 500);
  }

  menuButton.addEventListener('click', function () {
    openMenu();
  });

  closeMenu.addEventListener('click', function () {
    closeMenuFunction();
  });

  if (isMenuOpen) {
    openMenu();
  } else {
    closeMenuFunction();
  }

  document.addEventListener('click', function (event) {
    if (!menuMobile.contains(event.target) && !menuButtonContainer.contains(event.target)) {
      if (isMenuOpen) {
        closeMenuFunction();
      }
    }
  });
};

redirectPage();
toggleMenu();