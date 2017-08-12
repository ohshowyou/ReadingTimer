var reqtime = 0;
var subcount = 0;

function calcTime(info,tab){
    return function(info,tab){
        var selection = info.selectionText;

        var selection = selection.replace(/\,\./g, ' ');
        var selection_array = selection.split(' ');
        var len = selection_array.length - 1;
        for(var i = len; i >= 0; i--){
            if(selection_array[i] == ""){
                selection_array.splice(i,1);
            }
        }
        count = selection_array.length;
        var sec = Math.floor(60 * count/parseInt(localStorage.getItem("speed"),10)); 
        chrome.browserAction.setBadgeText({text:String(sec)});
        reqtime = sec;
        subcount = sec;
    }
}

var script = function(count){
    if (subcount >= 0){
        chrome.browserAction.setBadgeText({text:String(subcount)});
        subcount--;
        setTimeout(script, 1000)
    } else {
      alert("Finish "+ reqtime + "sec. (speed: " + localStorage.getItem("speed") + "words/min)");
    }
}

if (!localStorage["speed"]){
    localStorage["speed"] = 180;
}

// アイコン押下
chrome.browserAction.onClicked.addListener(function() {
    script(subcount);
});

// 右クリックメニュー
chrome.contextMenus.create({
    title: "Reading Timer",
    type: "normal",
    contexts : ["selection"],
    onclick: calcTime()
});
