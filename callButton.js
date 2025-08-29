console.log ('call me')

// Call Button Actions


let serviceName = document.getElementsByClassName("service-name")[0].innerText;
let serviceNumber = document.getElementsByClassName("service-number")[0].innerText;
console.log(serviceNumber)
let coinCount = parseInt(document.getElementById('coin-count').innerText);

const callButton = document.getElementsByClassName('call-button')

for(let button of callButton){
    button.addEventListener('click', function(){

    if(coinCount >= 20){
        coinCount -= 20 ;
        alert('📞'+ serviceName + ' >>> ' +serviceNumber+' ')
        
         document.getElementById('coin-count').innerText = coinCount;
        
    }
    else {

        return alert('❌>>> You Have Not Enough Coins')

        
    }

})
}
    





