const memberNames = [
    { name: "구하림", number: "010-1234-5678" },
    { name: "김보미", number: "010-2345-6789" },
    { name: "김수현", number: "010-3456-7890" },
    { name: "김정수", number: "010-4567-8901" },
    { name: "문혜림", number: "010-5678-9012" },
    { name: "배성빈", number: "010-6789-0123" },
    { name: "백지원", number: "010-7890-1234" },
    { name: "송이현", number: "010-8901-2345" },
    { name: "신지윤", number: "010-9012-3456" },
    { name: "유으뜸", number: "010-0123-4567" },
    { name: "유호영", number: "010-0000-0000" },
    { name: "이연승", number: "010-1111-1111" },
    { name: "이재영", number: "010-2222-2222" },
    { name: "이종수", number: "010-3333-3333" },
    { name: "임유진", number: "010-4444-4444" },
    { name: "정호연", number: "010-5555-5555" },
    { name: "조우식", number: "010-6666-6666" },
    { name: "조자연", number: "010-7777-7777" },
    { name: "최유진", number: "010-8888-8888" },
    { name: "황재민", number: "010-9999-9999" }
]
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
        memName.push(element.name);
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
    const memNamTel = [];
    memberNames.forEach((element) => {
        memNamTel.push(element.name + element.number.slice(-4))
        if (memNamTel.includes(passwordValue.value) === true) {
            boolcolor2.style.backgroundColor = "blue";
            const truer = validationCheck.splice(1, 1, true);
            return truer;
        }
        else if (memNamTel.includes(passwordValue.value) === false) {
            boolcolor2.style.backgroundColor = "red";
            const falser = validationCheck.splice(1, 1, false)
            return falser;
        }
    })
    function pasCheck() {
        if (passwordCheck.value === passwordValue.value) {
            boolcolor3.style.backgroundColor = "blue";
            const truer = validationCheck.splice(2, 1, true);
            return truer;
        }
        else {
            boolcolor3.style.backgroundColor = "red";
            const truer = validationCheck.splice(2, 1, false);
            return truer;
        }
    }
    pasCheck();
}




const mailText = document.getElementById("mailText");
const boolcolor4 = document.createElement("div"); //비밀번호 다시 확인의 boolean의 색깔div
mailText.appendChild(boolcolor4);
boolcolor4.style.width = "30px";
boolcolor4.style.height = "30px";
boolcolor4.style.backgroundColor = "red"; //비밀번호 다시 확인의 boolean을 빨간색으로 초기화

const mailTextIn = document.querySelector('#mailTextin');
function mailFunc() {
    const str = mailTextIn.value;
    if (str.indexOf('@') < str.indexOf('.') && str.includes('@') && str.includes('.')) {
        boolcolor4.style.backgroundColor = "blue";
        const turer = validationCheck.splice(3, 1, true);
        return turer
    }
    else {
        boolcolor4.style.backgroundColor = "red"
        const falser = validationCheck.splice(3, 1, false);
        return falser
    }
}


// 배열의 모든 값이 true 일 때 실행
function complateValidation() {
    checkMyName();
    checkPassword();
    mailFunc();
    for (let i = 0; i < validationCheck.length; i++) {
        if (validationCheck.includes(false) === true) {
            console.log("유효하지 않습니다.");
            console.log(validationCheck);
        }
        else {
            console.log(validationCheck);
            console.log("유효합니다");
        }
    }
}



// function checkEmail(fromInputdata){
// 	if(condition){
// 		return true;
// 	}
// 	else{
// 		return false;
// 	}
// }

// function checkPhone(fromInputdata){
// 	if(condition){
// 		return true;
// 	}
// 	else{
// 		return false;
// 	}
// }