/**
 * Bài 2
 * Tính trung bình 5 số
 *  
*/

/**
 * Sơ đồ 3 khối:
 * Khối 1: Dữ liệu có sẵn (Input)
 * number1, number2, number3, number4, number5 (các số cần tính)
 * 
 * Khối 2: Các bước xử lý code
 * B1: tạo biến number1, number2, number3, number4, number5, trungbinh
 * B2: gán giá trị cho biến
 * B3: Lập công thức tính toán
 * trungbinh = (number1 + number2 + number3 + number4 + number5) / 5;
 * B4: thông báo kết quả ở consolog.log
 * 
 * Khối 3: Kết quả (Output)
 * trungbinh
 * 
 */

var number1 = 10;
var number2 = 20;
var number3 = 30;
var number4 = 40;
var number5 = 50;

var trungbinh = 0;

trungbinh = (number1 + number2 + number3 + number4 + number5) / 5;

console.log("\nBài 2... Giá trị 5 số: 10; 20; 30; 40; 50\nTrung bình 5 số: " + trungbinh);

