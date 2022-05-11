let pageText = document.querySelector('ul.list');
console.log(pageText, ' — pageText —');
console.log('Смотри, какой текст мы нашли:', '\n', pageText.innerHTML);

// pageText.forEach(function (index) {
// })

let text = '';
for (let i = 0; i < pageText.length; i++) {
    text += pageText[i].innerHTML + '\n';
    console.log('Смотри, какой текст мы нашли:', '\n', pageText[i].innerHTML);
}

console.log(text, ' — text —');



