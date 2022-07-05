/**
 * Bài 5
 * Tính tổng hai chữ số
 */

/**
 * Sơ đồ 3 khối:
 * Khối 1: 1 số nguyên dương có 2 chữ số (Input) 
 * number
 * 
 * Khối 2: Các bước xử lý code
 * B1: tạo biến 
 * number (chứa số có 2 chữ số)
 * soHangChuc, soDonvi
 * tong
 * B2: gán giá trị cho biến
 * B3: Lập công thức tính toán 
 * number = 25
 * hangChuc = Math.floor(number/10);
 * donVi = number%10
 * tong = hangChuc + donVi;
 * B4: thông báo kết quả ở consolog.log
 * 
 * Khối 3: kết quả (Output)
 * tong
 */

var number = 43;
var hangChuc = 0;
var donVi = 0;
var tong = 0
hangChuc = Math.floor(number/10);
donVi = number%10

tong = hangChuc + donVi;

console.log("\nBài 5... Số nhập vào: 43\nTổng hai chữ số: "+ tong);

