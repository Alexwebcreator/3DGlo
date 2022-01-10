const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement('div');
  const loadText = 'Загрузка...';
  const errorText = 'Ошибка...';
  const successText = 'Спасибо! Наш менеджер с вами свяжется!';

  const validate = (list) => {
    const name = form.querySelector("[name=user_name]");
    const email = form.querySelector("[name=user_email]");
    const phone = form.querySelector("[name=user_phone]");
    const message = form.querySelector("[name=user_message]");
    let error = false;

    const mes = (str, input) => {
      const mes = document.createElement('div');
      mes.classList.add('mes');
      mes.textContent = str;
      mes.style.fontSize = "12px";
      mes.style.color = "red";
      if (formId == "form1") {
        mes.style.marginTop = "-30px";
        if (screen.width < 768) {
          mes.style.marginTop = "0px";
          mes.style.alignItems = "center";
        }
      }
      if (input == message) {
        mes.style.marginBottom = "15px";
      }
      input.after(mes);
      setTimeout(() => mes.remove(), 10000);
    };

    list.forEach((input) => {
      switch (input) {
        case name:
          if (/[^а-я\s\-]+/gi.test(input.value)|| input.value.length < 2) {
            error = true;
            mes("Используйте только кириллицу!", input);
          }
          break;
        case email:
          if (/[^\w\-\_\.\!\~\*\'@]+/gi.test(input.value) ||
            !/[\w\-\_\!\~\*\'\.]+@([\w]+\.)+[\w]+/gi.test(input.value)) {
            error = true;
            mes("Введите в формате name@domain.com", input);
          }
          break;
        case phone:
          if (/[^\d\(\)\+\-]+/g.test(input.value) || input.value.length < 11 || input.value.length > 17) {
            error = true;
            mes("Введите только + () - и цифры! От 11 до 17 символов!", input);
          }
          break;
        case message:
          if (/[^а-я0-9\s\-\.\,\!\?\:]+/gi.test(input.value)) {
            error = true;
            mes("Введите только кириллицу и знаки препинания!", input);
          }
          break;  
      }
    });

    return !error;

  };

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach(elem => {
      const element = document.getElementById(elem.id);
      if (elem.type === 'block' && element.textContent != 0) {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === 'input' && element.value != 0) {
        formBody[elem.id] = element.value;
      }
    });

    if (validate(formElements)) {
      const mess = document.querySelectorAll(".mes");
      mess.forEach((mes) => {
        mes.remove();
      });
      statusBlock.textContent = loadText;
      form.append(statusBlock);
      if (formId == "form3") {
        statusBlock.style.color = "white";
      }
      sendData(formBody)
        .then((data) => {
          console.log(data);
          statusBlock.textContent = successText;
          setTimeout(() => statusBlock.remove(), 5000);

          formElements.forEach(input => {
            input.value = '';
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
          form.append(statusBlock);
          console.log(error.message);
          setTimeout(() => statusBlock.remove(), 5000);
        });
    } else {
      alert('Данные формы заполнены не верно!');
    }
  };

  try {
    if (!form) {
      throw new Error('Верните форму на место, пожалуйста))');
    }
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      submitForm();
    });
  } catch(error) {
    console.log(error.message);
  }

  
};

export default sendForm;