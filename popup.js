function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function autoFillEvaluation() {
  let dosen = document.getElementsByClassName("btn btn-warning btn-xs xhr dest_subcontent-element").length;

  let sleep_value = document.getElementById('delay-input').value;

  for (let i = 0; i <= dosen; i++) {
    document.getElementsByClassName("btn btn-warning btn-xs xhr dest_subcontent-element")[i].click();
  
    await sleep(sleep_value);

    for (let j = 1; j <= 12; j++) {
      document.querySelectorAll("input[name='jawabanInstrumenPilihan[" + j + "]']")[0].click();
    }
  
    document.getElementsByClassName("btn btn-primary confirm")[0].click();
    console.log("Confirm");
    
    await sleep(sleep_value);
  }
}


// document.addEventListener("DOMContentLoaded", function () {
//   chrome.tabs.query({
//     active: true,
//     currentWindow: true
//   }, function (tabs) {
//     chrome.tabs.executeScript(
//       tabs[0].id, {
//         file: 'randomize.js'
//       }
//     );
//   });

//   // Function that run inside the currently active tab
//   function checkRadio(text) {
//     let tempText = text;
//     let labels = document.querySelectorAll('label.radio-inline');
//     [].forEach.call(labels, function (label, index) {
//       // Get only first word from the radio button label
//       let value = label.innerHTML.split(' ')[5].replace(/\s/g, "");;
//       if (text == 'Random') {
//         tempText = randomizeText();
//       }
//       if (value == tempText) {
//         label.click();
//       } else if (tempText == 'Kurang' && value == 'Buruk') { // Handle 'Buruk' option if there was no 'Kurang' option
//         label.click();
//       }
//     });
//   }

//   const isiEdom = (text) => {
//     // Call chrome extension helper
//     chrome.tabs.query({
//       active: true,
//       currentWindow: true
//     }, function (tabs) {
//       chrome.tabs.executeScript(
//         tabs[0].id, {
//           // Run the function inside active tab
//           code: '(' + checkRadio + ')("' + text + '");'
//         }
//       );
//     });
//   }

//   // Get the #btn-isi element
//   let btnIsi = document.querySelector('#btn-isi');
//   btnIsi.addEventListener('click', function () {
//     // Get the #isi-edom element
//     let slcEdom = document.querySelector('#isi-edom');
//     let isi = slcEdom.value;
//     switch (isi) {
//       case '1':
//         isiEdom('Kurang');
//         break;
//       case '2':
//         isiEdom('Cukup');
//         break;
//       case '3':
//         isiEdom('Baik');
//         break;
//       case '4':
//         isiEdom('Sangat');
//         break;
//       case '5':
//         isiEdom('Random');
//       default:
//         break;
//     }
//   });
// });