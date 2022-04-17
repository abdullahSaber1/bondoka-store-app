var submitBtn = document.getElementById("submit");
var email = document.getElementById("email");
var password = document.getElementById("pass");
var userName = document.getElementById("user");

var alert;


function getTextValue(e) {
    var name = e.target.name;
    switch (name) {
        case 'email': {
            alert = document.getElementById("emailAlert");
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z])+\.([A-Za-z]{2,4})$/;
            if (reg.test(email.value) == true) {
                email.style.border = "3px solid green";
                alert.style.display = "none";
                email.style.background = "white";


            } else {
                email.style.border = "3px solid red";
                alert.style.display = "block";

            }
            break;
        }
        case 'password': {
            alert = document.getElementById("passAlert");
            var regPass = /^([0-9]{8})$/;
            if (regPass.test(password.value) === true) {
                password.style.border = "3px solid green";
                alert.style.display = "none";
                password.style.background = "white";

            } else {
                password.style.border = "3px solid red";
                alert.style.display = "block";

            }

            break;
        }
        case 'userName': {
            alert = document.getElementById("userAlert");
            if (userName.value !== "") {
                userName.style.border = "3px solid green";
                alert.style.display = "none";
                userName.style.background = "white";

            } else {
                userName.style.border = "3px solid red";
                alert.style.display = "block";

            }
            break;
        }
        default:
            break;

    }
}



function submitData(e) {
    console.log(e);

}