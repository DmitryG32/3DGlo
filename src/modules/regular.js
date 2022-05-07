const regular = () => {
  const regexpText = /[^а-яА-я- ]/;
  const regexpEmail = /[^a-zA-Z0-9@-_\.!~\*']/;
  const regexpTel = /[^\d\(\)-]/;

  const square = document.querySelector(".calc-square");
  const count = document.querySelector(".calc-count");
  const day = document.querySelector(".calc-day");

  const form1Name = document.getElementById("form1-name");
  const form1Email = document.getElementById("form1-email");
  const form1Phone = document.getElementById("form1-phone");

  const form2Name = document.getElementById("form2-name");
  const form2Email = document.getElementById("form2-email");
  const form2Phone = document.getElementById("form2-phone");
  const form2Message = document.getElementById("form2-message");

  const form3Name = document.getElementById("form3-name");
  const form3Phone = document.getElementById("form3-phone");
  const form3Email = document.getElementById("form3-email");

  square.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^\d]/, "");
  });
  count.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^\d]/, "");
  });
  day.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^\d]/, "");
  });

  form1Name.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(regexpText, "");
  });

  form1Email.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(regexpEmail, "");
  });

  form1Phone.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(regexpTel, "");
  });

  form2Name.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(regexpText, "");
  });

  form2Message.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(regexpText, "");
  });

  form2Email.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(regexpEmail, "");
  });

  form2Phone.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(regexpTel, "");
  });

  form3Name.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(regexpText, "");
  });

  form3Phone.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(regexpTel, "");
  });

  form3Email.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(regexpEmail, "");
  });
};
export default regular;
