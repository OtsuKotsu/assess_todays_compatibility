'use strict';
{
const nameInput1 = document.getElementById('user-name1');
const nameInput2 = document.getElementById('user-name2');
const assessButton = document.getElementById('assessment');
const resultDiv = document.getElementById('result-area');

assessButton.onclick = function() {
    const username1 = nameInput1.value;
    const username2 = nameInput2.value;
    if(username1.length == 0 || username2.length == 0) return;
//     console.log(username1);
//     console.log(username2);

    // 診断結果エリアのクリア
    while(resultDiv.firstChild) resultDiv.removeChild(resultDiv.firstChild);

    // 診断結果エリア生成
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDiv.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assess(username1, username2);
    paragraph.innerText = result;
    resultDiv.appendChild(paragraph);
}


const words = [
    'さいこう！',
    'すごい！',
    'まぁよさそう！',
    'まぁまぁかな...',
    '...うにゅ、こんな日もある。'
];

/**
 * 名前二つを受け取り、答えを返す
 * @param {string} name1
 * @param {string} name2
 * @return result
 */
function assess(name1, name2) {
    let SumOfCharCode1 = 0;
    let SumOfCharCode2 = 0;
    for(let i = 0; i < name1.length; ++i) SumOfCharCode1 += name1.charCodeAt(i);
    for(let i = 0; i < name2.length; ++i) SumOfCharCode2 += name2.charCodeAt(i);
    let t = Date.now();
    let P = t / (SumOfCharCode1 * SumOfCharCode2);
    const Q = Math.floor(P) * 100;
    const res = Q%101;
    let idx = -1;
    if(80 < res) idx = 0;
    else if(60 < res) idx = 1;
    else if(40 < res) idx = 2;
    else if(20 < res) idx = 3;
    else idx = 4;
    return '今日の' + name1 + 'と' + name2 + 'の相性レベルは' + res + '!\n' + words[idx];
}

}
