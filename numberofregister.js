function getRegisterCount() {
  return parseInt(localStorage.getItem('numberOfRegister') || '1');
}

function incrementRegisterCount() {
  const newCount = getRegisterCount() + 1;
  localStorage.setItem('numberOfRegister', newCount);
  return newCount;
}

function resetRegisterCount() {
  localStorage.setItem('numberOfRegister', '0');
}

if (typeof window !== 'undefined') {
  window.getRegisterCount = getRegisterCount;
  window.incrementRegisterCount = incrementRegisterCount;
  window.resetRegisterCount = resetRegisterCount;
}
