const sendForm = ({ /* formId, */ somElem = [] }) => {
  const forms = document.querySelectorAll("form");
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const successText = "Спасибо. С вами свяжутся.";

  const userPhone = document.querySelectorAll('input[name="user_phone"]');
  const userName = document.querySelectorAll('input[name="user_name"]');
  const userMessage = document.querySelectorAll('input[name="user_message"]');
  const userMail = document.querySelectorAll('input[name="user_email"]');

  let isValid;

  const createAttr = () => {
    userPhone.forEach((element) => {
      element.setAttribute("data-reg", "^[\\d\\(\\)\\+-]*$");
      element.setAttribute("is-valid", 0);
    });

    userName.forEach((element) => {
      element.setAttribute("data-reg", "^([А-Яа-я]{1}[А-Яа-я ]{1,})$");
      element.setAttribute("is-valid", 0);
    });

    userMessage.forEach((element) => {
      element.setAttribute("data-reg", "^[А-Яа-я \\d\\.,]*$");
      element.setAttribute("is-valid", 0);
    });

    userMail.forEach((element) => {
      element.setAttribute(
        "data-reg",
        "^(([\\d\\w]{1}[\\S]{0,})@([\\S]{1,}\\.){1,}[\\w]{2,})$"
      );
      element.setAttribute("is-valid", 0);
    });
  };

  userPhone.forEach((element) => {
    element.addEventListener("input", (e) => {
      validate(e.target);
    });
  });

  userName.forEach((element) => {
    element.addEventListener("input", (e) => {
      validate(e.target);
    });
  });

  userMessage.forEach((element) => {
    element.addEventListener("input", (e) => {
      validate(e.target);
    });
  });

  userMail.forEach((element) => {
    element.addEventListener("input", (e) => {
      validate(e.target);
    });
  });

  const validate = (el) => {
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);

    if (reg.test(inputValue)) {
      el.style.border = "2px solid rgb(0, 196, 0)";
      el.setAttribute("is-valid", 1);
    } else {
      el.style.border = "2px solid rgb(255, 0, 0)";
      el.setAttribute("is-valid", 0);
    }

    //console.log(inputValue, reg);
  };

  const sendData = async (data) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await res.json();
  };

  const submitForm = (elemForm) => {
    const formElements = elemForm.querySelectorAll("input");
    const formData = new FormData(elemForm);
    const formBody = {};

    statusBlock.textContent = loadText;
    elemForm.append(statusBlock);

    if (elemForm.id == "form3") {
      statusBlock.style.color = "white";
    }

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    somElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (elem.type === "block") {
        formBody[elem.id] = element.textContent;
        console.log("данные", formBody);
      } else if (elem.type === "input") {
        formBody[elem.id] = element.value;
      }
    });

    console.log(isValid);

    if (isValid === 1) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;

          formElements.forEach((input) => {
            input.value = "";
            input.style.border = "none";
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      console.log("ошибка в поле");
      statusBlock.textContent = errorText;
      ("ERROR");
    }
  };

  forms.forEach((form) => {
    try {
      if (!form) {
        throw new Error("Верните форму");
      }
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const allValid = [];
        const inputs = form.querySelectorAll("input");

        inputs.forEach((el) => {
          if (el.getAttribute("is-valid")) {
            allValid.push(el.getAttribute("is-valid"));
          }
        });

        for (let i = 0; i < allValid.length; i++) {
          if (allValid[i] == 0) {
            isValid = 0;
            break;
          } else {
            isValid = 1;
          }
        }

        submitForm(form);
      });
    } catch (error) {
      console.log(error.message);
    }
  });

  createAttr();
};

export default sendForm;
