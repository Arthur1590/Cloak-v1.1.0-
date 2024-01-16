const sec = document.querySelector(".s");
const min = document.querySelector(".m");
const hour = document.querySelector(".h");

function timee() {
  let time = new Date();
  let hourTime = time.getHours() * 30;
  let secTime = time.getSeconds() * 6;
  let minTime = time.getMinutes() * 6;
  // sec.style = `
  // transform: rotate(${secTime}deg);
  // `;
  min.style = `
transform: rotate(${minTime}deg)
`;
  hour.style = `
transform: rotate(${hourTime + minTime / 12}deg)
`;
  sec.animate(
    [
      { transform: `rotate(${secTime}deg)` },
      { transform: `rotate(${secTime + 6}deg)` },
    ],
    {
      fill: "forwards",
      duration: 1000,
      easing: "linear",
    }
  );
  setTimeout(() => {
    timee();
  }, 1000);
}
timee();

const hourNum = document.querySelector(".hours");
const minutNum = document.querySelector(".minutes");

function numberTime() {
  let numTime = new Date();
  let numH = numTime.getHours();
  let numM = numTime.getMinutes();

  // numH = numH < 10 ? "0" + numH : numH;
  // numM = numM < 10 ? "0" + numM : numM;

  hourNum.innerText = numTime.getHours() < 10 ? "0" + numTime.getHours() : numH;
  minutNum.innerText =
    numTime.getMinutes() < 10 ? "0" + numTime.getMinutes() : numM;

  hourNum.innerText = numH;
  minutNum.innerText = numM;

  setTimeout(() => {
    numberTime();
  }, 60000);
}
numberTime();

const tabsItem = document.querySelectorAll(".tabsItem");
const tabsContent = document.querySelectorAll(".tabsContentItem");

for (let i = 0; i < tabsItem.length; i++) {
  tabsItem[i].addEventListener("click", function () {
    for (let x = 0; x < tabsItem.length; x++) {
      tabsItem[x].classList.remove("active");
      tabsContent[x].classList.remove("active");
    }
    tabsItem[i].classList.add("active");
    tabsContent[i].classList.add("active");
  });
}


const btn = document.querySelector(".stopwatch__btn");
const secCounter = document.querySelector(".stopwatch__seconds");
const minCounter = document.querySelector(".stopwatch__minutes");
const hourCounter = document.querySelector(".stopwatch__hours");
const pause = document.querySelector('.block_wrapper');
const block = document.querySelectorAll('.block')
btn.addEventListener("click", function () {
  if (btn.innerHTML == "start") {
    btn.innerHTML = "stop";
    let i = 0;
    stopWatch(this, i);
    pause.style.opacity = '0'
  } else if (btn.innerHTML == "stop") {
    btn.innerHTML = "clear";
    pause.style.opacity = '1'
    minCounter.style.color = 'yellow'
    secCounter.style.color = 'yellow'
    hourCounter.style.color = 'yellow'
  } else if (btn.innerHTML == "clear") {
    btn.innerHTML = "start";
    pause.style.opacity = '0'
    minCounter.style.color = ''
    secCounter.style.color = ''
    hourCounter.style.color = ''
  }
});
btn.addEventListener('click', function() {
  if (btn.innerHTML == 'start') {
    minCounter.innerHTML = 0
    secCounter.innerHTML = 0
    hourCounter.innerHTML = 0
  }
})
function stopWatch(btn, i) {
  if (btn.innerHTML == "stop") {
    secCounter.innerHTML++;
    secCounter.style.color = 'green'
    if (secCounter.innerHTML == 60) {
      minCounter.innerHTML++;
      secCounter.innerHTML = 0;
      minCounter.style.color = 'green'
    }
    if (minCounter.innerHTML == 60) {
      hourCounter.innerHTML++;
      minCounter.innerHTML = 0;
      hourCounter.style.color = 'green'
    }
    setTimeout(() => {
      stopWatch(btn, i);
    }, 0.1);
  } 
}
