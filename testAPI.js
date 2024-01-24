const signupAccount = document.querySelector(".signupAccount");
const signupPassword = document.querySelector(".signupPassword");
const signupSend = document.querySelector(".signupSend");
const signinAccount = document.querySelector(".signinAccount");
const signinPassword = document.querySelector(".signinPassword");
const signinSend = document.querySelector(".signinSend");

signupSend.addEventListener("click",function(e){
  callSignUp()
})

function callSignUp(){
  if (signupAccount.value=="" || signupPassword==""){
    alert("格式輸入錯誤")
    return;
  }
  let obj = {};
  obj.email = signupAccount.value
  obj.password = signupPassword.value

  axios.post('https://hex-escape-room.herokuapp.com/api/user/signup', obj)
  .then(function (response) {
    if (response.data.message == "帳號註冊成功"){
      alert("帳號註冊成功")
    }else {
      alert("帳號註冊失敗")
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  signupAccount.value = "";
  signupPassword.value = ""; 
}


signinSend.addEventListener("click",function(e){
  callSignIn()
})


function callSignIn(){
  if (signinAccount.value=="" || signinPassword==""){
    alert("格式輸入錯誤")
    return;
  }
  let obj = {};
  obj.email = signinAccount.value
  obj.password = signinPassword.value

  axios.post('https://hex-escape-room.herokuapp.com/api/user/signin', obj)
  .then(function (response) {
    if (response.data.message == "登入成功"){
      alert("登入成功")
    }else {
      alert("登入失敗，請重新輸入")
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  signinAccount.value = "";
  signinPassword.value = ""; 
}