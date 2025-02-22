document.getElementById('execute-script').addEventListener('click', () => {
    // Send a message to the content script
    browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      browser.tabs.sendMessage(tabs[0].id, { action: "fillForm" });
    });
  });