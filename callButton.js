console.log('call me')

// Call Button Actions

let coinCount = parseInt(document.getElementById('coin-count').innerText);

const callButtons = document.querySelectorAll(".call-button")


for (let button of callButtons) {
    button.addEventListener("click", function () {
        const serviceCard = button.closest(".service-card");
        let serviceName = serviceCard.querySelector(".service-name").innerText;
        let serviceNumber = serviceCard.querySelector(".service-number").innerText;
        

        if (coinCount >= 20) {
            coinCount -= 20;

            alert('📞' + serviceName + ' >>> ' + serviceNumber + ' ')

            document.getElementById('coin-count').innerText = coinCount;

            const history = document.querySelector(".history");

            const now = new Date();
            const timeString = now.toLocaleTimeString();


            const historyList = document.createElement("div");
            historyList.classList.add(
                "flex","bg-[#FAFAFA]","justify-between","items-center","mt-[16px]","rounded-lg"
            );

            historyList.innerHTML = `
      <div class="py-[10px] px-[10px]">
        <h1 class=" text-[15px] font-semibold">${serviceName}</h1>
        <h2 class=" text-[18px] mt-1">${serviceNumber}</h2>
      </div>
      <div class="px-[12px] text-[14px]">
        <h1>${timeString}</h1>
      </div>
    `;

            history.appendChild(historyList);

            document.getElementById('clear-btn').addEventListener('click', function () {
                history.innerText = '';
            })

        }
        else {

            return alert('❌>>> You Have Not Enough Coins')


        }

    })
}








