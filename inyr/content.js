function simulateTyping(element, text) {
    element.focus();
    element.value = ''; // Clear any existing value
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      let event = new InputEvent('input', {
        bubbles: true,
        cancelable: true,
        data: char
      });
      element.value += char;
      element.dispatchEvent(event);
    }
}
  
function typeIntoInputById(id, text) {
    var inputField = document.getElementById(id);
    inputField.click();
    simulateTyping(inputField, text);
}

function selectFromDropDown(inputId, inputValue, textContent) {
  document.getElementById(inputId).value = inputValue;
  document.getElementById(inputId).parentElement.getElementsByClassName('multiselect-selected-text')[0].textContent = textContent;
}

document.getElementById('Kategoria').value = 'BEAVATKOZ';
document.getElementById('FehId').value = '2000000853';
selectFromDropDown('Erintettek', 'TAN', 'gyermek/tanuló');
typeIntoInputById('Idotartama', '45');
selectFromDropDown('TevekenysegSzakemberek', '11111', 'Your name');
selectFromDropDown('Helyek', 'ÓVODA', 'óvoda');
