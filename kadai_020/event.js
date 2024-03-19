// 定数の宣言と代入
const btnClicked = document.getElementById('btn');
const textDisplay = document.getElementById('text');

// ボタンがクリックされたときにイベント処理を実行する
btnClicked.addEventListener('click', () => {
	// テキストを上書きする
	textDisplay.textContent = "ボタンをクリックしました";
});