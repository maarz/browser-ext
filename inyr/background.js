browser.browserAction.onClicked.addListener((tab) => {
    // Your custom script here
    browser.tabs.executeScript(tab.id, { file: 'content.js' });
  });
