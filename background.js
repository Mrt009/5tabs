const MAX_TABS = 5;

chrome.tabs.onCreated.addListener((tab) => {
  chrome.tabs.query({}, (tabs) => {
    if (tabs.length > MAX_TABS) {
      const tabToRemove = tabs[0];
      chrome.tabs.remove(tabToRemove.id);
    }
  });
});
