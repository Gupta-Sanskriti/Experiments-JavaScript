// SignUP
class SignUp{
    constructor(fName, lName, email, pass, confPass) {
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.pass = pass;
        this.confPass = confPass;
    }

    // setMessage
    setMessage(message,cls){
        const div = document.createElement('div');
        div.className = `alert ${cls}`;

        div.appendChild(document.createTextNode(message));

        // parentElement
        const parent = document.querySelector('.container');

        // elemnt before
        const form = document.querySelector('.form_layout');
        // insert before
        parent.insertBefore(div, form);

        // set timeout
        setTimeout(function(){
            document.querySelector('.alert').remove()
        },2000)
    }
    // clearFeild
    clearFeild(){
        const fName = document.getElementById('fname').value ="";
        const lName = document.getElementById('lname').value="";
        const email = document.getElementById('email').value="";
        const pass = document.getElementById('pass').value="";
        const confPass = document.getElementById('confPass').value="";
        
    }
    // pass match
    passMatch(pass,confPass){
        // validate if pass is ok
        if(pass===confPass){
            // welcome message
            this.setMessage('welcome','success');
            this.clearFeild();
        }else{
            // error message
            this.setMessage('pass does not match','error');
            // 
        }
    }
    

}

// local storage
class Store{
    addDetails()
}




// event listner
document.querySelector('.form_layout').addEventListener('submit',function(e){
    const fName = document.getElementById('fname').value;
    const lName = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const confPass = document.getElementById('confPass').value;

    // call class SignUP
    const signup = new SignUp(fName, lName, email, pass, confPass);

    // all fields fill?
    if(fName ==='' || lName==='' || email==='' || pass ===''||confPass ===''){
        signup.setMessage('fill all the fields','error');
    }else{
        // password match
        signup.passMatch(pass,confPass)

    }
    // console.log('hello');


    e.preventDefault();

})