const membersSelect = document.getElementById('members');

membersSelect.addEventListener('change', function () {
  const selectedValue = membersSelect.value;
  console.log(selectedValue)

  if (selectedValue === 'davi') {
    window.location.href = 'davi.html';
  }

  if (selectedValue === 'felipe') {
    window.location.href = 'felipe.html';
  }

  if (selectedValue === 'fernanda') {
    window.location.href = 'fernanda.html';
  }

  if (selectedValue === 'luan') {
    window.location.href = 'luan.html';
  }
});

membersSelect.addEventListener('change', function () {
  if (membersSelect.value !== 'members') {
    membersSelect.value = 'members';
  }
});