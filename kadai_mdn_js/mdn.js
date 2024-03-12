// 定数を宣言する
const today = new Date();

// ymdを定義する
	const year = today.getFullYear();
	const  month = today.getMonth() + 1;
	const  day = today.getDate();

// ymdを呼び出す
console.log(year + '年' + month + '月' + day + '日');