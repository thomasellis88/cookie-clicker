let counter = 0;
const p = document.querySelector("p");
const button = document.querySelector("button");
function addOne() {
counter++;
p.textContent = counter;
localStorage.setItem("counter", counter);
}
button.addEventListener("click", addOne);
function getLocalStorage() {
const localCounter = localStorage.getItem("counter");
counter = localCounter;
p.textContent = counter;
}
getLocalStorage();
const grandmaOutput = 10;
const ovenOutput = 100;
const factoryOutput = 1000;
const mineOutput = 10000;
const bankOutput = 100000;
const grandmaCost = 10;
const ovenCost = 100;
const factoryCost = 1000;
const mineCost = 10000;
const bankCost = 100000;
let grandmas = 0;
let ovens = 0;
let factories = 0;
let mines = 0;
let banks = 0;
let cookieWallet = 0;
let cookiesPerSecond = 1;
const updateWallet = () => {
cookieWallet += cookiesPerSecond;
document.getElementById('total-cookies').innerHTML = cookieWallet;
};
const updateCookiesPerSecond = () => {
cookiesPerSecond =
    grandmaOutput * grandmas +
    ovenOutput * ovens +
    factoryOutput * factories +
    mineOutput * mines +
    bankOutput * banks;
    document.getElementById('cookies-per-sec'
).innerHTML = `${cookiesPerSecond}cps`;
};
const shopItemHandler = (item) => {
switch (item) {
    case 'grandma':
    
    if (cookieWallet >= grandmaCost) {
        grandmas++;
        cookieWallet -= grandmaCost;
        document.getElementById('grandma__count').innerHTML = grandmas;
        updateCookiesPerSecond();
    } else {
        console.log('not enough money');
    }
    break;
    case 'oven':
    if (cookieWallet >= ovenCost) {
        ovens++;
        cookieWallet -= ovenCost;
        document.getElementById('oven__count').innerHTML = ovens;
        updateCookiesPerSecond();
        console.log(cookieWallet);
    } else {
        console.log('not enough money');
    }
    break;
    case 'factory':
    if (cookieWallet >= factoryCost) {
        factories++;
        cookieWallet -= factoryCost;
        document.getElementById('factory__count').innerHTML = factories;
        updateCookiesPerSecond();
    } else {
        console.log('not enough money');
    }
    break;
    case 'mine':
    if (cookieWallet >= mineCost) {
        mines++;
        cookieWallet -= mineCost;
        document.getElementById('mine__count').innerHTML = mines;
        updateCookiesPerSecond();
    } else {
        console.log('not enough money');
    }
    break;
    case 'bank':
    if (cookieWallet >= bankCost) {
        banks++;
        cookieWallet -= bankCost;
        document.getElementById('bank__count').innerHTML = banks;
        updateCookiesPerSecond();
    } else {
        console.log('not enough money');
    }
    break;
    default:
}
};
setInterval(updateWallet, 1000);