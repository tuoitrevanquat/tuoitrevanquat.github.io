function Dong_ho() {
  var ngay = document.getElementById("ngay");
  var thang = document.getElementById("thang");
  var nam = document.getElementById("nam");
  var gio = document.getElementById("gio");
  var phut = document.getElementById("phut");
  var giay = document.getElementById("giay");
  var ngay_hien_tai = new Date().getDate();
  var thang_hien_tai = new Date().getMonth() + 1;
  var nam_hien_tai = new Date().getFullYear();
  var Gio_hien_tai = new Date().getHours();
  var Phut_hien_tai = new Date().getMinutes();
  var Giay_hien_tai = new Date().getSeconds();
  ngay.innerHTML = ngay_hien_tai;
  if(ngay_hien_tai <10)  ngay.innerHTML = "0"+ngay_hien_tai;
  else ngay.innerHTML = ngay_hien_tai;
  if (thang_hien_tai < 10) thang.innerHTML = "0" + thang_hien_tai;
  else thang.innerHTML = thang_hien_tai;
  nam.innerHTML = nam_hien_tai;
  if (Gio_hien_tai < 10) gio.innerHTML = "0" + Gio_hien_tai;
  else gio.innerHTML = Gio_hien_tai;
  if (Phut_hien_tai < 10) phut.innerHTML = "0" + Phut_hien_tai;
  else phut.innerHTML = Phut_hien_tai;
  if (Giay_hien_tai < 10) giay.innerHTML = "0" + Giay_hien_tai;
  else giay.innerHTML = Giay_hien_tai;
}
var Dem_gio = setInterval(Dong_ho, 1000);


