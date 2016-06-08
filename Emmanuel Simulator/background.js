
function test(){
    alert("testing");
}

chrome.browserAction.onClicked.addListener(test);
