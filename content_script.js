function generateHref() {
    let iterator = document.evaluate('//*[@class="icon fa fa-arrow-right"]//parent::a', document, null, XPathResult.ANY_TYPE, null);
    result = iterator.iterateNext();

    return result;
}

function getQuestionLength() {
    let iterator = document.evaluate('//span[@class="label label-pill label-primary"]', document, null, XPathResult.ANY_TYPE, null);
    let q = 0;

    res = iterator.iterateNext();
    while (res) {
        q += 1;
        res = iterator.iterateNext();
    }

    return q;
}

function getAllOptions(rate, length) {
    let ops = [];

    for(let i = 1; i <= length; i++) {
        let iterator = document.evaluate(`//input[@name="jawabanInstrumenPilihan[${i}]"]`, document, null, XPathResult.ANY_TYPE, null);
        let result = iterator.iterateNext();

        for (let j = 1; j < rate; j++) {
            result = iterator.iterateNext();
        }

        ops.push(result);
    }

    return ops;
}

function autoEdom(rate, sleepTime) {
    let href = generateHref()
    href.click();

    setTimeout(() => {
        let q = getQuestionLength();
        let options = getAllOptions(rate, q);

        for(let j = 0; j < options.length; j++) {
            options[j].click()
        }

    }, sleepTime);

    setTimeout(() => {
        let iterator = document.evaluate('//button[@class="btn btn-primary confirm"]', document, null, XPathResult.ANY_TYPE, null);

        iterator.iterateNext().click();
    }, sleepTime);
}

chrome.storage.local.get([ "rate", "delay" ], function (items) {
    autoEdom(items.rate, items.delay);
    chrome.storage.local.remove("rate");
    chrome.storage.local.remove("delay");
});