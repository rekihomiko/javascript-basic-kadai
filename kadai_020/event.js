// textというid を持つHTML要素（見出し h2）を取得し、定数に代入
const text = document.getElementById('text');

// btnというid を持つHTML要素（ボタン）を取得し、定数に代入
const btn = document.getElementById('btn');

// ボタンがクリックされた時にイベント処理を実行する
btn.addEventListener('click', () => {
    // 見出しのテキストを変更
    text.textContent = 'ボタンをクリックしました';
});
