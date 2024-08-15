
// btnというid を持つHTML要素（ボタン）を取得し、定数に代入
const btn = document.getElementById('btn');

// ボタンがクリックされた時にイベント処理を実行する
btn.addEventListener('click', () => {
 // 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
 setTimeout(() => {
 // textというid を持つHTML要素（見出し h2）を取得し、定数に代入
const text = document.getElementById('text');  
// 見出しのテキストを変更
text.textContent = 'ボタンをクリックしました';
  }, 2000);   
  
});
