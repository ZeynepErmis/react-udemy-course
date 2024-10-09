export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label> Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            required
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Invesments</label>
          {/* girdiğiniz değerler sayısal olmasına rağmen, JavaScript'te event.target.value ile alınan değer her zaman bir string olarak gelir. Yani, input alanına girilen sayısal veriler bile aslında birer string olarak temsil edilir. Bu durum, HTML DOM yapısının bir sonucudur.*/}
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label> Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChange(" expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration </label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
