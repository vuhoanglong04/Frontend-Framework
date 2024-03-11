const banner = document.querySelector('.banner');
const submit = document.querySelector('.submit_btn');
const inputs = document.querySelectorAll('.form-control');
const selects = document.querySelectorAll('.form-select');

//responsive banner
window.addEventListener('resize',function(){
    if(window.innerWidth <=576){
        banner.src ="https://caodang.fpt.edu.vn/wp-content/themes/fpoly/assets-custom/images/Banner_Mobile.png"
    }else{
        banner.src ="https://caodang.fpt.edu.vn/wp-content/themes/fpoly/assets-custom/images/Banner.png"
    }
})
//Validate empty input text and select tags
function checkEmptyInput(input){
    const  parent = input.parentElement;
    let span = parent.querySelector("span");
    let nameInput = parent.querySelector('.form-label');
    if(input.value ==""){
        span.innerText = `Hãy nhập ${nameInput.innerText.toLowerCase()}`;
    }else 
    span.innerText ="";

}

function checkEmptySelect(input){
    const  parent = input.parentElement;
    let span = parent.querySelector("span");
    let nameInput = parent.querySelector('label');

    if(input.value =="0"){

        span.innerText = `Hãy chọn ${nameInput.innerText.toLowerCase()}`;

    }else 
    span.innerText ="";
}
submit.addEventListener('click',function(e){
    e.preventDefault();
    //Check empty
    inputs.forEach(element => {
        checkEmptyInput(element)
    });
    selects.forEach(element => {
        checkEmptySelect(element);
    });
    //check checkbox
    checkPersonGet();
    checkAddressGet();
    //checkFile
    checkFiles()
    checkPolicy1();
    checkPolicy2()
    //check number phone
    checkNumberPhone()
    //check Email
    checkEmail();

    //check file
    checkTypeFile() 
    
})

function checkBox1(input){
    document.querySelector('#parent').checked = false;
}
function checkBox2(input){
    document.querySelector('#student').checked = false;
}
function checkBox3(input){
    document.querySelector('#other_address').checked = false;
}
function checkBox4(input){
    const currentAddress =  document.querySelector('.otherAddress');
    document.querySelector('#current_address').checked = false;
    currentAddress.classList.toggle('hide');
    currentAddress.innerHTML =`<div class="otherAddress">
    <input id="diachikhac" value="" placeholder="Địa chỉ khác">
    <span title="Lưu địa chỉ khác" onclick="saveAddress(this)" style="display: inline-block;
    border: 1px solid #2e3192;
    background: #fff;
    font-size: 12px;
    padding: 2px 7px;
    vertical-align: top;
    font-weight: bold;
    color: #2e3192;
    cursor: pointer;">Lưu</span>
    <span onclick="xoaDiaChiKhac()" title="Xóa địa chỉ khác" style="display: inline-block;
    border: 1px solid #ff0000;
    background: #fff;
    font-size: 12px;
    padding: 2px 7px;
    vertical-align: top;
    font-weight: bold;
    color: #ff0000;
    cursor: pointer;">x</span>
</div>`;
}
function xoaDiaChiKhac(){
    document.querySelector('.otherAddress').classList.toggle('hide');
    document.querySelector('#other_address').checked = false;

}
function saveAddress(a){
   let valueAddress = a.parentElement.querySelector('#diachikhac').value;
   const otherAddress = document.querySelector('.otherAddress')
    if(valueAddress=="") otherAddress.innerHTML = `<span class='mb-2' style='color:black'>()</span>`
    else  otherAddress.innerHTML = `<span class='mb-2' style='color:black'>(${valueAddress})</span>
    <span onclick="xoaDiaChiKhac()" title="Xóa địa chỉ khác" style="display: inline-block;
    border: 1px solid #ff0000;
    background: #fff;
    font-size: 12px;
    padding: 2px 7px;
    vertical-align: top;
    font-weight: bold;
    color: #ff0000;
    cursor: pointer;">x</span>                                    
    `

}
const checkStudent =document.querySelector('#student')
const checkParent =document.querySelector('#parent')
const checkCurrentAddress =document.querySelector('#current_address')
const checkOtherAddress =document.querySelector('#other_address')

function checkPersonGet(){
    if(checkStudent.checked==false && checkParent.checked==false){
       document.querySelector('.checkbox_first span').innerText = 'Hãy chọn người nhận giấy báo kết quả xét tuyển';
    }else   document.querySelector('.checkbox_first span').innerText = '';  
}

function checkAddressGet(){
    if(checkCurrentAddress.checked==false && checkOtherAddress.checked==false){
        document.querySelector('.errorAddress').innerText = 'Hãy chọn địa chỉ nhận giấy báo kết quả xét tuyển';
    }else{
        
        document.querySelector('.errorAddress').innerText = '';  
    }
}

function checkFiles(){
    const allFile = document.querySelectorAll('input[type="file"');
    allFile.forEach(function(item , index){
        const parentSpan =  item.parentElement.parentElement.querySelector('span');
        if(item.files.length ==0){
            parentSpan.innerText ="Hãy chọn ảnh CMT/CCCD mặt sau";
        }else   parentSpan.innerText ="";

        if(index ==2){
            if(item.files.length ==0){
                parentSpan.innerText ="Hãy chọn bản sao công chứng Bằng tốt nghiệp THPT";
            }else   parentSpan.innerText ="";
        }
    })
}

function checkPolicy1(){
    const policy1= document.querySelector('.policy1 input');
    if(policy1.checked == false){
        policy1.parentElement.parentElement.querySelector('span').innerText  = "Bạn chưa đồng ý với cam kết xác nhận thông tin";
        return false;
    }else   policy1.parentElement.parentElement.querySelector('span').innerText  = "";
    return true;
}
function checkPolicy2(){
    const policy2= document.querySelector('.policy2 input');
    if(policy2.checked == false){
        policy2.parentElement.querySelector('span').innerText  = "Bạn chưa đồng ý với cam kết tài chính";
        return false;
    }else    policy2.parentElement.querySelector('span').innerText  = "";

    return true;
}


function checkNumberPhone(){
 const listInputPhone  = document.querySelectorAll('.sdt');
 let pattern = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
 listInputPhone.forEach(item=>{
    if(item.value==""){
        item.parentElement.querySelector('span').innerText = "Hãy nhập số điện thoại"
    }else if(item.value!="" && !pattern.test(item.value)){
        item.parentElement.querySelector('span').innerText = "Số điện thoại không đúng định dạng"
    }else item.parentElement.querySelector('span').innerText = ""
 })
}
function checkEmail(){
    const emailStudent = document.querySelector('.emailStudent');
    const parentEmail = emailStudent.parentElement.querySelector('span');
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailStudent.value==""){
        parentEmail.innerText ="Hãy nhập email";
    }else if(emailStudent.value!="" && !mailformat.test(emailStudent.value)){
        parentEmail.innerText ="Email không đúng định dạng";
    }else parentEmail.innerText ="";

}

function checkTypeFile(){
    const listFile = document.querySelectorAll('input[type="file"]');
    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
    listFile.forEach(item=>{
        const parent = item.parentElement.parentElement.querySelector('span');
        const file = item.files[0];
        const text = item.parentElement.parentElement.querySelector('label');
        if(!file){
            parent.innerText =  `Hãy chọn ${text.toLowerCase()}`;
        }
        else if(file && !validImageTypes.includes(file['type'])){
            parent.innerText ="File không đúng định dạng ảnh (.jpg, .jpeg, .png,...)"
        }else  parent.innerText =""
    })
}