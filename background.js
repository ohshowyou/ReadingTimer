var count1 = 0;

function search(info,tab){
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
        var sec = Math.floor(60 * count/180); 
        chrome.browserAction.setBadgeText({text:String(sec)});
        count1 = sec;
    }
}

var script = function(count){
    if (count1 >= 0){
        chrome.browserAction.setBadgeText({text:String(count1)});
        count1--;
        setTimeout(script, 1000)
    } else {
      alert("Finish");  
    }
}

// アイコン押下
chrome.browserAction.onClicked.addListener(function() {
    script(count1);
});

// 右クリックメニュー
chrome.contextMenus.create({
    title: "Reading Timer",
    type: "normal",
    contexts : ["selection"],
    onclick: search()
});
