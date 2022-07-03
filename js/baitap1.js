/**
 * Bài 1
 * Tính lương nhân viên
 */

/**
 * Sơ đồ 3 khối:
 * Khối 1: Dữ liệu có sẵn (Input)
 * soNgay (số ngày tính lương)
 * 
 * Khối 2: Các bước xử lý code
 * B1: tạo biến soNgay, ngayLuong, luongnv
 * B2: gán giá trị cho biến
 * B3: Lập công thức tính toán
 * luongnv = soNgay * ngayLuong;
 * B4: thông báo kết quả ở consolog.log
 * 
 * Khối 3: Kết quả (Output)
 * luongnv
 * 
 */

var soNgay =10;
var ngayLuong = 100000;
var luongnv = 0;

luongnv = soNgay * ngayLuong;

console.log("\nBài 1...\nLương nhân viên: " + luongnv);