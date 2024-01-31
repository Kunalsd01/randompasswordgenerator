const words = [
    'Aarav', 'Aishwarya', 'Akash', 'Ananya', 'Arjun',
    'Divya', 'Gaurav', 'Ishaan', 'Jyoti', 'Karan',
    'Lakshmi', 'Manish', 'Neha', 'Prakash', 'Rajesh',
    'Sakshi', 'Sanjay', 'Tanvi', 'Uday', 'Varsha',
    'Vikram', 'Yash', 'Zoya', 'Aditi', 'Rahul',
    'Shreya', 'Ravi', 'Meera', 'Aditya', 'Pooja'
];

function getPassword(){
    const chars = '0123456789@!#$%&';
    const clen = chars.length;

    let password = '';
    password = password.concat(randomWord(clen));
    while(password.length<12){
        const randomChar = chars[randomNumber(clen)];
        if (!password.includes(randomChar)) {
            password += randomChar;
        }
    }
    password.substring(0,16);
    document.getElementById("passw").value = password;
}
function randomNumber(n){
    return Math.floor(Math.random()*n);
}
function randomWord(){
    const num = randomNumber(words.length);
    return words[num];
}
function copyFunction(){
    var cpyText = document.getElementById("passw");
    cpyText.select();
    navigator.clipboard.writeText(cpyText.value);
    alert("Copied the password: "+cpyText.value);
}