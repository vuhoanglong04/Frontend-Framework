const banner = document.querySelector(".banner");
const submit = document.querySelector(".submit_btn");
const inputs = document.querySelectorAll(".form-control");
const selects = document.querySelectorAll(".form-select");
const fullName = document.querySelector(".fullname");
const nameParent = document.querySelector(".nameParent");

const date = document.querySelector(".date");
const nation = document.querySelector(".nation");
const id_card = document.querySelector(".id_card");
const date_of_issue = document.querySelector(".date_of_issue");
const place_of_issue = document.querySelector(".place_of_issue");
const detailAddress = document.querySelector(".detail_address");
const email = document.querySelector(".email");
const sdt = document.querySelectorAll(".sdt");
const school = document.querySelector(".school");
//responsive banner
window.addEventListener("resize", function () {
  if (window.innerWidth <= 576) {
    banner.src =
      "https://caodang.fpt.edu.vn/wp-content/themes/fpoly/assets-custom/images/Banner_Mobile.png";
  } else {
    banner.src =
      "https://caodang.fpt.edu.vn/wp-content/themes/fpoly/assets-custom/images/Banner.png";
  }
});

submit.addEventListener("click", function (e) {
  e.preventDefault();
  checkSelectOption();
  checkFullName();
  checkDate();
  checkNation();
  checkCMND();
  checkDateOfIssue();
  checkPlaceOfIssue();
  checkDetailAddress();
  checkNumberPhone();
  checkEmail();
  checkSchool();
  checkPolicy2()
  checkPolicy1()
  checkFiles()
  checkTypeFile()
  checkAddressGet();
  checkPersonGet();
  checkParentName()
  document.querySelectorAll('span').forEach((item , index)=>{
    if(item.innerText !="")console.log(index);
  })
});

//Input
  fullName.addEventListener('input' ,checkFullName)

  nameParent.addEventListener('input' ,checkParentName)

date.addEventListener('input' ,checkDate)
date_of_issue.addEventListener('input' ,checkDateOfIssue)
place_of_issue.addEventListener('input' ,checkPlaceOfIssue)

nation.addEventListener('input' ,checkNation)
id_card.addEventListener('input' ,checkCMND)
// selects.forEach(item=>{
//   item.addEventListener('input' ,checkSelectOption)
// })
detailAddress.addEventListener('input' , checkDetailAddress)
email.addEventListener('input' , checkEmail)
school.addEventListener('input' , checkSchool)
sdt.forEach(item=>{
  item.addEventListener('input' ,checkNumberPhone)
})

document.querySelector('#student1').addEventListener('change', function (e){
      checkPersonGet();
});
document.querySelector('#parent').addEventListener('change', function (e){
   checkPersonGet();
});
document.querySelector('#current_address').addEventListener('change', function (e){
  checkAddressGet();
});
function checkSelectOption() {
  selects.forEach((item) => {
    const text = item.closest("div").querySelector("label").innerText;
    const span = item.closest("div").querySelector("span");
    if (item.value == 0) {
      span.innerText = `Hãy chọn ${text.toLowerCase()}`;
    } else {
      span.innerText = ``;
    }
  });
}

function checkFullName() {
  const format =/^(([a-zA-Z\sÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]*)([a-zA-Z\s\'ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]*)([a-zA-Z\sÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]))*$/g;
    const text = fullName.closest("div").querySelector("label").innerText;
    const span = fullName.closest("div").querySelector("span");
    if (fullName.value == "") {
      span.innerText = `Hãy nhập ${text.toLowerCase()}`;
    } else if (!format.test(fullName.value.toLowerCase())) {
      span.innerText = `Họ và tên không đúng định dạng`;
    } else if (fullName.value.length < 5) {
      span.innerText = `Họ và tên không đúng định dạng`;
    } else span.innerText = "";

}

function checkParentName() {
  const format =/^(([a-zA-Z\sÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]*)([a-zA-Z\s\'ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]*)([a-zA-Z\sÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]))*$/g;
    const text = nameParent.closest("div").querySelector("label").innerText;
    const span = nameParent.closest("div").querySelector("span");
    if (nameParent.value == "") {
      span.innerText = `Hãy nhập ${text.toLowerCase()}`;
    } else if (!format.test(nameParent.value.toLowerCase())) {
      span.innerText = `Họ và tên không đúng định dạng`;
    } else if (nameParent.value.length < 5) {
      span.innerText = `Họ và tên không đúng định dạng`;
    } else span.innerText = "";

}
function convertStringToDate(dateString) {
  var parts = dateString.split("/"); // Tách chuỗi ngày thành mảng các phần tử
  var day = parseInt(parts[0], 10); // Lấy ngày (phần tử đầu tiên)
  var month = parseInt(parts[1], 10) - 1; // Lấy tháng (phần tử thứ hai), giảm đi 1 vì tháng trong JavaScript được đánh số từ 0 đến 11
  var year = parseInt(parts[2], 10); // Lấy năm (phần tử thứ ba)

  var date = new Date(year, month, day); // Tạo đối tượng Date từ ngày, tháng, năm
  return date;
}
function checkDate() {
  const formatDate =
    /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
  const span = date.closest("div").querySelector("span");
  const d = new Date();
  var dateNew = convertStringToDate(date.value);
  if (date.value == "") {
    span.innerText = "Hãy nhập ngày sinh";
  } else if (!formatDate.test(date.value)) {
    span.innerText = "Ngày sinh không đúng định dạng";
  } else if (dateNew > d) {
    span.innerText = "Ngày sinh không thể là ngày tương lai";
  }
  else span.innerText = "";
}

function checkNation() {
  const format = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚÝàáâãèéêìíòóôõùúý ]+$/;
  const span = nation.closest("div").querySelector("span");

  if (nation.value == "") {
    span.innerText = "Hãy nhập dân tộc";
  } else if (!format.test(nation.value)) {
    span.innerText = "Tên dân tộc không đúng định dạng";
  } else if (nation.value.length == 1) {
    span.innerText = "Tên dân tộc không đúng định dạng";
  } else span.innerText = "";
}

function checkCMND() {
  const span = id_card.closest("div").querySelector("span");
  if (id_card.value == "") {
    span.innerText = "Hãy nhập số CMND/CCCD";
  } else if (isNaN(id_card.value)) {
    span.innerText = "Số CMND/CCCD không hợp lệ";
  } else if (id_card.value.length != 9 && id_card.value.length != 12) {
    span.innerText = "Số CMND/CCCD không hợp lệ";
  } else span.innerHTML = "";
}
function checkDateOfIssue() {
  const formatDate =
    /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
  const span = date_of_issue.closest("div").querySelector("span");
  const d = new Date();
  var dateNew = convertStringToDate(date_of_issue.value);
  var birth = convertStringToDate(date.value);

  if (date_of_issue.value == "") {
    span.innerText = "Hãy nhập ngày cấp";
  } else if (!formatDate.test(date_of_issue.value)) {
    span.innerText = "Ngày cấp không đúng định dạng";
  } else if (dateNew > d) {
    span.innerText = "Ngày cấp không thể là ngày tương lai";
  }else if(dateNew.getFullYear() < birth.getFullYear()+15 && birth!="") {
    span.innerText = "Ngày cấp không hợp lệ ( phải sau ngày sinh 15 nam)";
  } 
  else span.innerText = "";
}

function checkPlaceOfIssue() {
  const span = place_of_issue.closest("div").querySelector("span");
  if (place_of_issue.value == "") {
    span.innerText = "Hãy nhập nơi cấp CMND/CCCD";
  } else span.innerText = "";
}
function checkDetailAddress() {
  const span = detailAddress.closest("div").querySelector("span");
  if (detailAddress.value == "") {
    span.innerText = "Hãy nhập địa chỉ";
  } else span.innerText = "";
}

function checkNumberPhone() {
  const format = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{7})\b/
  sdt.forEach((item) => {
    const text = item.closest("div").querySelector("label").innerText;
    const span = item.closest("div").querySelector("span");
    if (item.value == "") {
      span.innerText = `Hãy nhập ${text.toLowerCase()}`;
    }else if(item.value.length!=10 ){
      span.innerText = `Không đúng định dạng số điện thoại`;
    }else if (format.test(item.value)) {
      span.innerText = `Không đúng định dạng số điện thoại`;
    }else if(isNaN(item.value)){
      span.innerText = `Không đúng định dạng số điện thoại`;
    }
     else span.innerText = "";
  });
}
function checkEmail() {
  const format =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const span = email.closest("div").querySelector("span");
  if (email.value == "") {
    span.innerText = "Hãy nhập địa chỉ email";
  } else if (email.value.length < 5) {
    span.innerText = "Email không đúng định dạng";
  } else if (!format.test(email.value)) {
    span.innerText = "Email không đúng định dạng";
  } else span.innerText = "";
}

function checkSchool() {
  const span = school.closest("div").querySelector("span");
  const format = /[^\p{L}\s._0-9\-]+/;
  if (school.value == "") {
    span.innerText = "Hãy nhập trường tốt nghiệp THPT hoặc tương đương";
  } else if (!isNaN(school.value)) {
    span.innerText = "Tên trường không đúng định dạng";
  }
  else span.innerText = "";
}

function checkBox1(input) {
  document.querySelector("#parent").checked = false;
}
function checkBox2(input) {
  document.querySelector("#student1").checked = false;
}
function checkBox3(input) {
  document.querySelector("#other_address").checked = false;
}
function checkBox4(input) {
  const currentAddress = document.querySelector(".otherAddress");
  document.querySelector("#current_address").checked = false;
  currentAddress.classList.toggle("hide");
  currentAddress.innerHTML = `<div class="otherAddress">
    <input id="diachikhac" value="" placeholder="Địa chỉ khác">
    <p  title="Lưu địa chỉ khác" onclick="saveAddress(this)" style="display: inline-block;
    border: 1px solid #2e3192;
    background: #fff;
    font-size: 12px;
    padding: 2px 7px;
    vertical-align: top;
    font-weight: bold;
    color: #2e3192;
    cursor: pointer;">Lưu</p>
    <p onclick="xoaDiaChiKhac()" title="Xóa địa chỉ khác" style="display: inline-block;
    border: 1px solid #ff0000;
    background: #fff;
    font-size: 12px;
    padding: 2px 7px;
    vertical-align: top;
    font-weight: bold;
    color: #ff0000;
    cursor: pointer;">x</p>
</div>`;
  const diachikhac = document.querySelector("#diachikhac");
  if (diachikhac.value == "") {
    document.querySelector(".errorAddress").innerText = "";
  }
}
function xoaDiaChiKhac() {
  document.querySelector(".otherAddress").classList.toggle("hide");
  document.querySelector("#other_address").checked = false;
}
function saveAddress(a) {
  let valueAddress = a.parentElement.querySelector("#diachikhac").value;
  const otherAddress = document.querySelector(".otherAddress");
  if (valueAddress == "")
    otherAddress.innerHTML = `<p class='mb-2 after' style='color:black'>()</p>`;
  else
    otherAddress.innerHTML = `<p class='mb-2' style='color:black'>(${valueAddress})</p>
    <p onclick="xoaDiaChiKhac()" title="Xóa địa chỉ khác" style="display: inline-block;
    border: 1px solid #ff0000;
    background: #fff;
    font-size: 12px;
    padding: 2px 7px;
    vertical-align: top;
    font-weight: bold;
    color: #ff0000;
    cursor: pointer;">x</p>                                    
    `;
}
const checkStudent = document.querySelector("#student1");
const checkParent = document.querySelector("#parent");
const checkCurrentAddress = document.querySelector("#current_address");
const checkOtherAddress = document.querySelector("#other_address");

function checkPersonGet() {
  if (checkStudent.checked == false && checkParent.checked == false) {
    document.querySelector(".checkbox_first span").innerText =
      "Hãy chọn người nhận giấy báo kết quả xét tuyển";
  } else {
    document.querySelector(".checkbox_first span").innerText = "";
  }
}

function checkAddressGet() {
  if (
    checkCurrentAddress.checked == false &&
    checkOtherAddress.checked == false
  ){
    document.querySelector(".errorAddress").innerText =
      "Hãy chọn địa chỉ nhận giấy báo kết quả xét tuyển";
  } else {
    if(checkOtherAddress.checked==true && document.querySelector(".after").innerText=="()"){
      document.querySelector(".errorAddress").innerText = "Hãy chọn địa chỉ nhận giấy báo kết quả xét tuyển";
    }else  document.querySelector(".errorAddress").innerText = "";
  }
}

function checkFiles() {
  const allFile = document.querySelectorAll('input[type="file"');
  allFile.forEach(function (item, index) {
    const parentSpan = item.parentElement.parentElement.querySelector("span");
    if (item.files.length == 0) {
      parentSpan.innerText = "Hãy chọn ảnh CMT/CCCD mặt sau";
    } else {
      parentSpan.innerText = "";
    }

    if (index == 2) {
      if (item.files.length == 0) {
        parentSpan.innerText =
          "Hãy chọn bản sao công chứng Bằng tốt nghiệp THPT";
      } else {
        parentSpan.innerText = "";
      }
    }
  });
}
function checkTypeFile() {
  const listFile = document.querySelectorAll('input[type="file"]');
  const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
  listFile.forEach((item) => {
    const parent = item.parentElement.parentElement.querySelector("span");
    const file = item.files[0];
    const text = item.parentElement.parentElement.querySelector("label");
    if (!file) {
      parent.innerText = `Hãy chọn ${text.innerText.toLowerCase()}`;
    } else if (!validImageTypes.includes(file["type"])) {
      parent.innerText =
        "File không đúng định dạng ảnh (.jpg, .jpeg, .png,...)";
    } else {
      parent.innerText = "";
    }
  });
}

function checkPolicy1() {
  const policy1 = document.querySelector(".policy1 input");
  if (policy1.checked == false) {
    policy1.parentElement.parentElement.querySelector("span").innerText =
      "Bạn chưa đồng ý với cam kết xác nhận thông tin";
  } else {
    policy1.parentElement.parentElement.querySelector("span").innerText = "";
  }
}
function checkPolicy2() {
  const policy2 = document.querySelector(".policy2 input");
  if (policy2.checked == false) {
    policy2.parentElement.querySelector("span").innerText =
      "Bạn chưa đồng ý với cam kết tài chính";
  } else {
    policy2.parentElement.querySelector("span").innerText = "";
  }
}
