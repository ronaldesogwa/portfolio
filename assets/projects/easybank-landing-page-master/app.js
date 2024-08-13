const hamburger = document.querySelector('.icon-open');
const navigation = document.querySelector('.navigation nav');

hamburger.onclick =()=>{
    if(navigation.style.display == 'block'){
        navigation.style.display ='none';
        hamburger.src ='./images/icon-hamburger.svg'
    }else{
        navigation.style.display= 'block';
        hamburger.src ='./images/icon-close.svg'
    }
}