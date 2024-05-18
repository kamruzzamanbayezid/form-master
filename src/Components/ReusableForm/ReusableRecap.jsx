/* eslint-disable react/prop-types */

import { useRef } from "react";

const ReusableRecap = ({ formTitle, submitBtn = 'Submit', handleSubmit, children }) => {

      const textRef = useRef()
      const emailRef = useRef()
      const passwordRef = useRef()

      const handleLocalSubmit = e => {
            e.preventDefault();
            const data = {
                  // text: e.target.text.value,
                  // email: e.target.email.value,
                  // password: e.target.password.value,

                  // access by ref
                  text: textRef.current.value,
                  email: emailRef.current.value,
                  password: passwordRef.current.value
            }
            handleSubmit(data);
      }

      return (
            <div>
                  <form onSubmit={handleLocalSubmit}>
                        <h3>{formTitle}</h3>
                        {children}
                        <input ref={textRef} type="text" name="text" />
                        <br />
                        <input ref={emailRef} type="email" name="email" />
                        <br />
                        <input ref={passwordRef} type="password" name="password" />
                        <br />
                        <input type="submit" value={submitBtn} />
                  </form>
            </div>
      );
};

export default ReusableRecap;