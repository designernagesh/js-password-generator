let pwd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*-=_+()[]{}",
    passwords = document.getElementById("passwords"),    
    btnCopyPassword = document.querySelector('.btnCopyPassword'),
    btnGeneratePassword = document.querySelector('.btnGeneratePassword');

    // Generating Password
    const generatePassword = () => {
        let password = "";
      let passwordLength = document.getElementById("passwordLength").value;
      for(let i = 0; i < passwordLength; i++){
        let randomNumber = Math.floor((Math.random() * pwd.length));
        //password += pwd.substring(c, c+1)
        password += pwd.charAt(randomNumber);        
      }    
      return password;      
    };    

    // Generating Number of Passwords
    btnGeneratePassword.addEventListener('click', () => {
      let numberPasswords = document.getElementById("numberPasswords").value;
      passwords.innerHTML = '';
      for(let i = 0; i < numberPasswords; i++){           
        let li = document.createElement("li");      
        li.textContent = generatePassword();        
        passwords.appendChild(li);
      }
      passwords.style.color = 'black';      
    });

    // Copying to the Clipboard
    btnCopyPassword.addEventListener('click', () => {        
        let textarea = document.createElement('textarea');
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute'; 
        textarea.textContent = passwords.innerText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        btnCopyPassword.innerHTML = '<i class="fas fa-copy"></i> Copied Password(s)';

        setTimeout(()=>{
            btnCopyPassword.innerHTML = '<i class="far fa-copy"></i> Copy Password(s)';
        }, 3000)
    });