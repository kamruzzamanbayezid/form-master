import { useEffect, useRef, useState } from "react";

const UseRef = () => {

      const textRef = useRef(null);
      const emailRef = useRef(null);
      const passwordRef = useRef(null);

      const [error, setError] = useState('');

      useEffect(() => {
            textRef.current.focus();
      }, [])

      const handleSubmit = e => {
            e.preventDefault();
            console.log(textRef.current.value);
            console.log(emailRef.current.value);
            if (passwordRef.current.value.length < 6) {
                  setError('Password must have 6 or more characters')
            } else {
                  setError('')
                  console.log(passwordRef.current.value);
            }
      };

      return (
            <div>
                  <form onSubmit={handleSubmit}>
                        <input ref={textRef} type="text" name="text" />
                        <br />
                        <input ref={emailRef} defaultValue={'abc@gmail.com'} type="email" name="email" />
                        <br />
                        <input ref={passwordRef} type="password" name="password" required />
                        <br />
                        <input type="submit" value="Submit" />
                        {
                              error && <p>{error}</p>
                        }
                  </form>
            </div>
      );
};

export default UseRef;