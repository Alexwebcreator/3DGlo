const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block');
  const calcType = document.querySelector('.calc-type');
  const calcSquare = document.querySelector('.calc-square');
  const calcCount = document.querySelector('.calc-count');
  const calcDay = document.querySelector('.calc-day');
  const total = document.getElementById('total');
  
  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
      console.log('more');
    }

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    if (calcType.value && calcSquare.value) {
      totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    
    } else {
      totalValue = 0;
    }
    total.textContent = totalValue;

    // const outNum = (num) => {
    //   const time = 3000;
    //   const step = 100;
    //   let n = 0;
    //   let t = Math.round(time/(num/step));
    //   let interval = setInterval(() => {
    //     n = n + step;
    //     if (n == num) {
    //       clearInterval(interval);
    //     }
    //   }, t);
    //   total.textContent = n;
    //   console.log(totalValue);
    // };
    // outNum(3000);
  };

  calcBlock.addEventListener('input', (e) => {

    if (e.target === calcType || e.target === calcSquare || e.target === calcCount || e.target === calcDay) {
      countCalc();
    }
    
  });

};

export default calc;