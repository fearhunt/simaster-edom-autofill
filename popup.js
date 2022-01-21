function injectScript(rate, delay) {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.storage.local.set({
      rate: rate,
      delay: delay
    }, () => {
      chrome.scripting.executeScript({ 
        target: { 
          tabId: tabs[0].id,
        }, 
        files: [ "content_script.js" ] 
      });
    });
  });
};

document.getElementById("btn-run").addEventListener("click", function(e) {
  e.preventDefault();

  let rate = document.forms["fill-form"]["rate-input"].value;
  let delay = document.forms["fill-form"]["delay-input"].value

  if (rate == "") {
    alert("Penilaian dosen harus diisi terlebih dahulu");
  } else if (delay < 2000) {
    alert("Delay input harus bernilai minimal 2000");
  } else {
    injectScript(rate, delay);
  }
});