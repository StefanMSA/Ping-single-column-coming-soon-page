function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
console.log(mailfomat);
}
else
{
document.getElementById('errorMsg').innerHTML = "Please provide a valid email address";
document.getElementById('mailInput').style.borderColor = 'hsl(354, 100%, 66%)';
document.getElementById('errorMsg').style.color = 'hsl(354, 100%, 66%)';
}
}

var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);
