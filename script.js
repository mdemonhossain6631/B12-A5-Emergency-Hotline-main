
// increase heart icon
const loveCount = document.getElementsByClassName("love-count")[0]
const loveIcon = document.getElementsByClassName('love-icon')

for(const icon of loveIcon){
    icon.addEventListener("click", function(){

        const loveValue = parseInt(loveCount.innerText);

        loveCount.innerText = loveValue + 1;
    })
}