const validationCheck = [false, false, false, false, false];

const nameText = document.getElementById("nameText"); //이름 적을 input
const boolcolor1 = document.createElement("div"); //이름의 boolean의 색깔div
nameText.appendChild(boolcolor1);
boolcolor1.style.width = "30px";
boolcolor1.style.height = "30px";
boolcolor1.style.backgroundColor = "red"; //이름의 boolean을 빨간색으로 초기화

const inputValue = document.querySelector('#formf input'); //form아이디인 formf이고 form의 첫input 가져오기

function checkMyName() {
    const memName = [];
    memberNames.forEach((element) => {
        memName.push(element);
        if (memName.includes(inputValue.value) === true) {
            boolcolor1.style.backgroundColor = "blue";
            const truer = validationCheck.splice(0, 1, true);
            return truer
        }
        else if (memName.includes(inputValue.value) === false) {
            boolcolor1.style.backgroundColor = "red";
            const falser = validationCheck.splice(0, 1, false)
            return falser
        }
    });
}

const mailText = document.getElementById("mailText"); //메일 input
const boolcolor4 = document.createElement("div"); //메일 확인의 boolean의 색깔div
mailText.appendChild(boolcolor4);
boolcolor4.style.width = "30px";
boolcolor4.style.height = "30px";
boolcolor4.style.backgroundColor = "red"; //메일 확인의 boolean을 빨간색으로 초기화

const mailTextIn = document.querySelector('#mailTextin');
function checkEmail() {
    const str = mailTextIn.value;
    if (str.indexOf('@') < str.indexOf('.') && str.includes('@') && str.includes('.')) {
        boolcolor4.style.backgroundColor = "blue";
        const truer = validationCheck.splice(3, 1, true);
        return truer
    }
    else {
        boolcolor4.style.backgroundColor = "red"
        const falser = validationCheck.splice(3, 1, false);
        return falser
    }
}

const phNumText = document.getElementById("phNumText"); //폰번호 input
const boolcolor5 = document.createElement("div"); //폰번호 확인의 boolean의 색깔 div
phNumText.appendChild(boolcolor5);
boolcolor5.style.width = "30px";
boolcolor5.style.height = "30px";
boolcolor5.style.backgroundColor = "red"; //폰번호 확인의 boolean을 빨간색으로 초기화

const phNumTextIn = document.querySelector('#phNumTextin');

function checkPhone() {

    const str = phNumTextIn.value.split('');
    const arr = [];
    str.forEach((element, index) => {
        if (element === '-') {
            arr.push(index)
        }
    })
    if (arr[0] === 3 && arr[1] === 8) {
        boolcolor5.style.backgroundColor = "blue";
        const truer = validationCheck.splice(4, 1, true);
        return truer
    }
    else {
        boolcolor5.style.backgroundColor = "red";
        const falser = validationCheck.splice(4, 1, false);
        return falser
    }
}

const passText = document.getElementById("passText"); //비밀번호 input
const boolcolor2 = document.createElement("div"); //비밀번호의 boolean의 색깔div
passText.appendChild(boolcolor2);
boolcolor2.style.width = "30px";
boolcolor2.style.height = "30px";
boolcolor2.style.backgroundColor = "red"; //비밀번호의 boolean을 빨간색으로 초기화

const passwordValue = document.querySelector('#password'); //비밀번호 input을 id로 선택해서 가져옴

const passCheck = document.getElementById("passTextCheck");
const boolcolor3 = document.createElement("div"); //비밀번호 다시 확인의 boolean의 색깔div
passCheck.appendChild(boolcolor3);
boolcolor3.style.width = "30px";
boolcolor3.style.height = "30px";
boolcolor3.style.backgroundColor = "red"; //비밀번호 다시 확인의 boolean을 빨간색으로 초기화

const passwordCheck = document.querySelector('#passwordCheck'); //비밀번호 다시 확인 input을 id로 선택해서 가져옴

function checkPassword() {
    pasCheck()
    const phnum = phNumTextIn.value.split('').slice(-4);
    const nam = [];
    memberNames.forEach((element) => {
        nam.push(element + phnum.join(''));
    });
    if (nam.includes(passwordValue.value) === true && passwordValue.value.startsWith(inputValue.value) === true && inputValue.value !== '') {
        boolcolor2.style.backgroundColor = "blue";
        const truer = validationCheck.splice(1, 1, true);
        return truer;
    } else {
        boolcolor2.style.backgroundColor = "red";
        const falser = validationCheck.splice(1, 1, false);
        return falser;
    }
    function pasCheck() {
        if (passwordValue.value === passwordCheck.value && passwordCheck.value !== '') {
            boolcolor3.style.backgroundColor = "blue";
            const truer = validationCheck.splice(2, 1, true);
            return truer;
        }
        else {
            boolcolor3.style.backgroundColor = "red";
            const falser = validationCheck.splice(2, 1, false);
            return falser;
        }
    }
}


const pass = document.getElementById("pass");

// 배열의 모든 값이 true 일 때 실행
function complateValidation() {
    checkMyName();
    checkPassword();
    checkEmail();
    checkPhone();
    for (let i = 0; i < validationCheck.length; i++) {
        if (validationCheck.includes(false) === true) {
            pass.innerHTML = "<b style='background-color:red'>모든 입력란이 유효하지 않습니다.</b>";
        }
        else {
            pass.innerHTML = "<b style='background-color:lightblue'>모든 입력란이 유효합니다.</b>";
        }
    }
}