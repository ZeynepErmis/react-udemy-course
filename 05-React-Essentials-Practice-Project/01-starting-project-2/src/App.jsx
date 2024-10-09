import Results from "./components/Results";
import UserInput from "./components/UserInput";
import React, { useState } from "react";

function App() {
  //bir state'de birden fazla değer tanımlıyorsak obje halinde tanımlarız değerleri
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  //inputIdentifier, hangi input alanının değiştiğini belirten bir parametre
  //newValue, o input alanına girilen yeni değerdir
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        //geçmiş değerleri tutar spread operator ile
        ...prevUserInput,
        //[inputIdentifier], dinamik olarak güncellenmek istenen input alanını belirtir. Örneğin, inputIdentifier "initialInvestment" ise, userInput state'i içinde initialInvestment alanı güncellenir.
        //newValue, o input'un yeni değeridir. Yani name alanı için yeni bir değer yazıldığında, bu yeni değer newValue olur ve state'e yansıtılır.
        //+newValue: Eğer newValue string ise, + operatörü onu bir sayısal tipe (number) çevirir.
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Results input={userInput} />}
      <Results input={userInput} />
    </>
  );
}

export default App;
