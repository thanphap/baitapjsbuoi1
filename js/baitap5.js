/**
 * Bài 5
 * Tổng hai chữ số
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
 * B2: gán giá trị cho biến lấy từ id html tương ứng
 * B3: Lập công thức tính toán 
 * number = 25
 * hangChuc = Math.floor(number/10);
 * donVi = number%10
 * tong = hangChuc + donVi;
 * B4: thông báo kết quả ở id tương ứng của html
 * 
 * Khối 3: kết quả (Output)
 * tong
 */

// var number = 0;

// var hangChuc = 0;
// var donVi = 0;
// var tong = 0

// hangChuc = Math.floor(number/10);
// donVi = number%10

// tong = hangChuc + donVi;

// console.log("\nBài 5...\nTổng hai chữ số: "+ tong);

function tongChuSo(){
    var number = document.getElementById("number").value;
    var hangChuc = 0;
    var donVi = 0;
    var tong = 0
    hangChuc = Math.floor(number/10);
    donVi = number%10
    tong = hangChuc + donVi;
    document.getElementById("txtResult5").innerHTML = tong;
}
   
document.getElementById("btnTinh5").onclick = tongChuSo;