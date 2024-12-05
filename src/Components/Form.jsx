import { useState } from "react";
import Message from "./Message";

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const regexName = /^[a-zA-Z\s]+$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (
      user.name.trim().length >= 5 &&
      regexName.test(user.name) &&
      regexEmail.test(user.email)
    ) {
      setSubmittedData(user);
      setError(false);
    } else {
      setSubmittedData(null);
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full name"
          onChange={(event) => setUser({ ...user, name: event.target.value })}
        />

        <input
          type="text"
          placeholder="Email"
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        />

        <button>Send</button>
      </form>

      {error && (
        <h4 style={{ color: "red" }}>
          Por favor verifique su información nuevamente.
        </h4>
      )}

      {submittedData && <Message name={submittedData.name} />}
    </div>
  );
};

export default Form;
