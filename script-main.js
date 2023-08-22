const membersSelect = document.getElementById('members');

membersSelect.addEventListener('change', function () {
  const selectedValue = membersSelect.value;
  console.log(selectedValue)

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