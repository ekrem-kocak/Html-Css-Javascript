const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

const dHr = document.querySelector("#digital-hr");
const dMn = document.querySelector("#digital-mn");
const dSc = document.querySelector("#digital-sc");

setInterval(() => {

    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`
    mn.style.transform = `rotateZ(${mm}deg)`
    sc.style.transform = `rotateZ(${ss}deg)`


    dHr.textContent = day.getHours().toString().length < 2 ? '0' + day.getHours().toString() : day.getHours();
    dMn.textContent = day.getMinutes().toString().length < 2 ? '0' + day.getMinutes().toString() : day.getMinutes();
    dSc.textContent = day.getSeconds().toString().length < 2 ? '0' + day.getSeconds().toString() : day.getSeconds();
})


