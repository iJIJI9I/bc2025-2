// main.js

// 1. Константи для Варіанту 3
const currency = "JPY";
const exact_date = "20240127";

// 2. Базовий URL сервера НБУ
const baseURL = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange";

// 3. Створення об'єкта URL
const url = new URL(baseURL);

// 4. Додавання параметрів через SearchParams
url.searchParams.append("valcode", currency);
url.searchParams.append("date", exact_date);
url.searchParams.append("json", "");

// 5. Вивід URL у консоль
console.log(url.toString());

