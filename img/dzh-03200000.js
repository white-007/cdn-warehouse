(function() {
// 粘贴事件
$("body").on('paste', function(e) {
        var pastedText = undefined;
        if (window.clipboardData && window.clipboardData.getData) { // IE
            pastedText = window.clipboardData.getData('Text');
        } else {
            pastedText = e.originalEvent.clipboardData.getData('Text');//e.clipboardData.getData('text/plain');
            pastedText  = clearBr(pastedText)
	getValue(pastedText)
        }
  })

// 获取id和概念题材
function getValue(allText) {
var idIndex = allText.indexOf('管 理 层') + 5
const id = allText.substring(idIndex, idIndex + 6)
const tagIndex = allText.indexOf('概念题材:')+5
const tagEndIndex = allText.indexOf('◆事件提醒◆')-1
const tag = $.trim(allText.substring(tagIndex , tagEndIndex))
$('#stockCode').val(id)
$('#queryStockCode').val(id)
$('#plateNames').val(tag)

console.log(id, idIndex )
console.log(tag, tagIndex )
}

//去除换行 
function clearBr(key) { 
key = key.replace(/<\/?.+?>/g,""); 
key = key.replace(/[\r\n]/g, ""); 
return key; 
} 
})()