function checkPassword() {
  pasCheck() //첫번째 호출
  const phnum = phNumTextIn.value.split('').slice(-4);
  const nam = [];
  memberNames.forEach((element) => {
      nam.push(element + phnum.join(''));
  }); //첫번째 forEach문 닫기
  if (nam.includes(passwordValue.value) === true && passwordValue.value.startsWith(inputValue.value) === true && inputValue.value !== '') {
      boolcolor2.style.backgroundColor = "blue";
      const truer = validationCheck.splice(1, 1, true);
      return truer;
  } else {
      boolcolor2.style.backgroundColor = "red";
      const falser = validationCheck.splice(1, 1, false);
      return falser;
  }
  // }) //두번째 forEach문 닫기
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
  pasCheck() //두번째 호출
}