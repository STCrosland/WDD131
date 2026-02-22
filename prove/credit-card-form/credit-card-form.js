const form = document.querySelector("#cardForm");
const errors = document.querySelector(".errors");
const success = document.querySelector("#success");

const cardNumber = document.querySelector("#cardNumber");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

function isCardNumberValid(number) {
  return number === "1234123412341234";
}

function digitsOnly(str) {
  return str.replace(/\D/g, "");
}

cardNumber.addEventListener("input", () => {
  const digits = digitsOnly(cardNumber.value).slice(0, 16);
  const groups = digits.match(/.{1,4}/g) || [];
  cardNumber.value = groups.join(" ");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  errors.textContent = "";
  success.classList.add("hide");

  let errorMsg = "";
  const cardDigits = digitsOnly(cardNumber.value);

  if (!/^\d{16}$/.test(cardDigits)) {
    errorMsg += "Card number must be 16 digits\n";
  } else if (!isCardNumberValid(cardDigits)) {
    errorMsg += "Card number must be 1234123412341234\n";
  }

  const expMonth = Number(month.value);
  const expYear = 2000 + Number(year.value);
  const today = new Date();

  if (
    expYear < today.getFullYear() ||
    (expYear === today.getFullYear() &&
      expMonth < today.getMonth() + 1)
  ) {
    errorMsg += "Card is expired\n";
  }

  if (errorMsg) {
    errors.textContent = errorMsg;
    return;
  }

  success.textContent = "Payment Approved ✅";
  success.classList.remove("hide");
  form.reset();
});