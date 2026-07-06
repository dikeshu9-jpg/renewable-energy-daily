const today = new Date();

const text =
today.getFullYear() + "年" +
(today.getMonth()+1) + "月" +
today.getDate() + "日";

const el = document.getElementById("today");

if(el){
    el.textContent = text;
}
