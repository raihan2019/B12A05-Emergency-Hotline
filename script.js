// Heart Count 

let heartCount = 0;
const heartCounts = document.getElementById("heartCount");
const heartIcons = document.querySelectorAll(".heart-icon");

for (const findIcon of heartIcons) {
    findIcon.addEventListener("click", function (e) {
        e.stopPropagation();
        heartCount = heartCount + 1;
        heartCounts.innerText = heartCount;


    });
}

// Call Buttons

let availableCoins = 100;

const displayCoins = document.getElementById("available-coins");
const calls = document.querySelectorAll(".call-button")

const callHistory = document.getElementById("call-history")

for (const call of calls) {
    call.addEventListener('click', function (e) {

        if (availableCoins < 20) {
            alert("Not enough coins to make a call ");
            return;
        }

        const targetCart = call.closest(".cart");

        const serviceName = targetCart.querySelector(".service-name").innerText;

        const serviceNumber = targetCart.querySelector(".service-number").innerText;

        alert(` Calling ${serviceName} ${serviceNumber}... `)
        availableCoins = availableCoins - 20;
        displayCoins.innerText = availableCoins;

        const div = document.createElement('div');
        const time = new Date().toLocaleTimeString();
        div.className = "flex justify-between items-center bg-gray-100 p-2 rounded-lg mt-3"

        div.innerHTML = `<div><p class="font-bold" >${serviceName} </p>
                            <p class="text-gray-500">${serviceNumber} </p></div>
                                     <div>${time}</div>`

        callHistory.appendChild(div)

    });
}

// Copy Count 
let copyCount = 0;
const copyCounts = document.getElementById("copy-count");
const clickCopys = document.querySelectorAll(".click-copy");

for (const clickCopy of clickCopys) {
    clickCopy.addEventListener("click", function (e) {
        e.stopPropagation();

        const targetCart = clickCopy.closest(".cart");
        const serviceEl = targetCart.querySelector(".service-number");

        let serviceNumber = serviceEl.innerText; // text
        alert(`Copied Number : ${serviceNumber}`);

        copyCount = copyCount + 1;
        copyCounts.innerText = copyCount;

        // for copy to clipboard
        navigator.clipboard.writeText(serviceNumber);
    });
}


// Clear Data 
const clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener("click", function () {
    callHistory.innerHTML = "";
});