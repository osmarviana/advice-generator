const adviceUpdate = document.getElementById("advice-update");

adviceUpdate.addEventListener("click", randomAdviceGenerator);

async function createAdviceBank() {
  const url = "https://api.adviceslip.com/advice";
  const response = await fetch(url);
  return await response.json();
}

async function getAdvice(slip_id) {
  const url = `https://api.adviceslip.com/advice/${slip_id}`;
  const response = await fetch(url);
  return await response.json();
}

async function randomAdviceGenerator() {
  const adviceBank = await createAdviceBank();
  const advice = await getAdvice(adviceBank.slip.id);
  const adviceId = document.getElementById("advice-id");
  const adviceDescription = document.getElementById("advice-description");
  adviceId.innerHTML = `Advice #${advice.slip.id}`;
  adviceDescription.innerHTML = `"${advice.slip.advice}"`;
}

// -------------------- RESPOSTA DO DEVQUEST --------------------

// const adviceUpdateButton = document.querySelector(".advice-update");
// const adviceNumber = document.querySelector(".advice-id");
// const adviceDescription = document.querySelector(".advice-description");

// async function getAdvice() {
//     const response = await fetch("https://api.adviceslip.com/advice");
//     const adviceContent = await response.json();
//     const adviceId = `Advice #${adviceContent.slip.id}`;
//     const adviceText = `"${adviceContent.slip.advice}"`;

//     adviceNumber.innerHTML = adviceId;
//     adviceDescription.innerHTML = adviceText;
// }

// adviceUpdateButton.addEventListener("click", getAdvice);

// getAdvice();
