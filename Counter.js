const num = document.getElementById("num");
const plus = document.getElementById("plus");
const mius = document.getElementById("minus");
        console.log(num);
        plus.onclick = () => {
            const number = parseInt(num.innerText);
            num.innerText = number+1;
        };
        minus.onclick = () => {
            const number = parseInt(num.innerText);
            num.innerText = number-1;
        };