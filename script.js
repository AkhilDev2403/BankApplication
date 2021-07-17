//create account
function createAccount(){
    let account_number = accnt_no.value
    let name = person_name.value
    let balance = balance_amt.value
    let password = pwd.value
    let mobile = mob_no.value
    let email = mail_id.value

    let bank = {account_number, name, balance, password, mobile, email}
    console.log(bank);                                                   //in console {account_number: "1000", name: "Akhil", balance: "87545", password: "123", mobile: "54464", …}

    //localStorage.setItem(account_number, JSON.stringify(bank))     //enterd details/data will be stored/saved in the localStorage as key : value pairs  key=>account_number(1000)   :   value(bank)=>{account_number: "1000", name: "Akhil", balance: "87545", password: "123", mobile: "54464", …}

    //we've to check if same accnt no is already exist or not
    if(account_number in localStorage){
        alert("account already existed")
    }
    else{
        localStorage.setItem(bank.account_number, JSON.stringify(bank))           //json.stringify() object->js
        //console.log(account); 
        alert("Account created successfully")

        location.href = "./index2.html"                                      //after a account created successfully page will be redirected to login page 
    }
}


function login(){
    let username = uname.value
    let password = pwd.value

    let user = {username, password}
    //console.log(user);                                                       // in console data/details like {username: "100", password: "123"} 

    let login_user = JSON.parse(localStorage.getItem(user))             // from localStorage we are fetching the entire details  of that particular user, so those data is now in the format of js(coz we've json.stringify() done this)
                                                                            // so now change that js format to object,in object format only we can able to get a specific value... bank.account_number so that we use json.parse(localstorage) 
                                                                            
                                                                            
    console.log(login_user);                                                // we'll get the data/details like {account_number: "100", name: "Akhil", balance: "58777", password: "123", mobile: "5656", …}
    
    if(username in localStorage){                                             // checcks entered username is in localstorage
        if(password == login_user.password){                                  //now if enetered password and localstorage password both are same or not, to get that password, we've already got that particular user's all details in the login_user
                                                                              // so we just calling that user.password, so we can get/check that pasword.. (nb: login_user is now in the format of object that's y we can fetch password like this)   
            alert("login success")
            location.href="index3.html"
        }
        else{
            // alert("invalid password")
            error.innerHTML = "*Please enter valid password"
        }
    }
    else{
        // alert("invalid user")
        error.innerHTML = "*Invalid user"
    }
}



