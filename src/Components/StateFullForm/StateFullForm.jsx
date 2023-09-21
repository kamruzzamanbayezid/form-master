import { useState } from "react";

const StateFullForm = () => {

      const [text, setText] = useState('Kashem');
      const [email, setEmail] = useState(null);
      const [password, setPassword] = useState(null)
      const [error,setError] = useState('');


      const handleSubmit = e => {
            e.preventDefault();
            if (password.length < 6) {
                  setError('Password must have 6 or more characters');
            } else {
                  setError('')
                  console.log(text, email, password);
            }

      };

      const handleText = e => {
            setText(e.target.value);
      };

      const handleEmail = e => {
            setEmail(e.target.value)
      }

      const handlePassword = e => {
            setPassword(e.target.value)
      }

      return (
            <div>
                  <form onSubmit={handleSubmit}>
                        <input value={text} onChange={handleText} type="text" name="text" />
                        <br />
                        <input onChange={handleEmail} type="email" name="email" />
                        <br />
                        <input onChange={handlePassword} type="password" name="password" required />
                        <br />
                        <input type="submit" value="Submit" />
                        {
                              error && <p>{error}</p>
                        }
                  </form>
            </div>
      );
};

export default StateFullForm;