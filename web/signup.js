function signUp()
{
    var name = document.forms["RegForm"]["firstName"];

    var email = document.forms["RegForm"]["mail"];
    var phone = document.forms["RegForm"]["Number"];
    var what =  document.forms["RegForm"]["Age"];

    var password = document.forms["RegForm"]["Password"];
    var address = document.forms["RegForm"]["ConfirmPassword"];

    if (name.value == "")
    {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }


    if (email.value == "")
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (phone.value == "")
      if(phone.length<11)
    {
        window.alert("Please enter your telephone number of 10 Digits.");
        phone.focus();
        return false;
    }

    if (password.value == "")
    {
        window.alert("Please enter your password having atleast one Capital Letter, One special character and a digit.");
        password.focus();
        return false;
    }
  

    if (what.selectedIndex < 1)
    if(what.value>12 && what.value<50)
    {
        alert("Age should be between 18 to 50.");
        what.focus();
        return false;
    }


    return true;

}
