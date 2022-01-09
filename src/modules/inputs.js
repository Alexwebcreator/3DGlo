const inputs = () => {
  const square = document.querySelector('.calc-square');
  const count = document.querySelector('.calc-count');
  const day = document.querySelector('.calc-day');
  const names = document.querySelectorAll('.form-name');
  const topName = document.getElementById('form2-name');
  const message = document.getElementById('form2-message');
  const email = document.querySelectorAll('.form-email');
  const phone = document.querySelectorAll('.form-phone');


  const isNumber = (e) => {
    e.target.value = e.target.value.replace(/\D+/, "");
  };

  square.addEventListener('input', isNumber);
  count.addEventListener('input', isNumber);
  day.addEventListener('input', isNumber);

  const isCyryl = (n) => {
    n.target.value = n.target.value.replace(/[^а-я\s\-]/gi, "");
  };

  const notEng = (n) => {
    n.target.value = n.target.value.replace(/[a-z]/gi, "");
  };

  topName.addEventListener('input', isCyryl);
  names.forEach((item) =>
    item.addEventListener("input", isCyryl)
  );
  message.addEventListener('input', notEng);
  
  const isEmail = (s) => {
    s.target.value = s.target.value.replace(/[^\w\-\_\.\!\~\*\'@]/gi, "");
  };

  email.forEach((mail) =>
    mail.addEventListener("input", isEmail)
  );

  const isPhone = (m) => {
    m.target.value = m.target.value.replace(/[^\d\-\(\)]/gi, "");
  };

  phone.forEach((tel) =>
    tel.addEventListener("input", isPhone)
  );

};

export default inputs;