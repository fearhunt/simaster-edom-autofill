function injectScript() {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.scripting.executeScript({ target: { tabId: tabs[0].id }, files: ['content_script.js'] })
  });
};

document.getElementById('btn-run').addEventListener("click", function(e) {
  e.preventDefault();
  injectScript();
});