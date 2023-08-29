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
  const menu = document.querySelector('#menu');

  menu.addEventListener('click', function () {
    const menuMobile = document.querySelector('.menu-mobile');
    menuMobile.style.display = 'flex';
  });

  const closeMenu = document.querySelector('.close-menu');

  closeMenu.addEventListener('click', function () {
    const menuMobile = document.querySelector('.menu-mobile');
    menuMobile.style.display = 'none';
  });
}

redirectPage();
toggleMenu();