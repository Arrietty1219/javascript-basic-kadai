// 定数の宣言と代入
const btnClicked = document.getElementById('btn');
const textDisplay = document.getElementById('text');

// ボタンがクリックされたときにイベント処理を実行する
btnClicked.addEventListener('click', () => {
	// 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
	setTimeout(() => {
		// テキストを上書きする
		textDisplay.textContent = "ボタンをクリックしました";
	}, 2000)
});
