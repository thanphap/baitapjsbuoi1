/**
 * Bài 4
 * Diện tích, chu vi hình chữ nhật
 */

/**
 * Sơ đồ 3 khối:
 * Khối 1: Dữ liệu có sẵn (Input)
 * chieuDai, chieuRong (chiều dài, chiều rộng HCN)
 * 
 * Khối 2: Các bước xử lý code
 * B1: tạo biến chieuDai, chieuRong, dienTich, chuVi
 * B2: gán giá trị cho biến
 * B3: Lập công thức tính toán
 * dienTich = chieuDai*chieuRong;
 * chuVi = (chieuDai+chieuRong)*2;
 * B4: thông báo kết quả ở consolog.log
 * 
 * Khối 3: Kết quả (Output)
 * dienTich, chuVi
 * 
 */

var chieuDai = 5;
var chieuRong = 3;
var dienTich = 0;
var chuVi = 0;

dienTich = chieuDai*chieuRong;
chuVi = (chieuDai+chieuRong)*2;

console.log("\nBài 4...\nDiện tích HCN: " + dienTich + "\nChu vi HCN: " + chuVi);