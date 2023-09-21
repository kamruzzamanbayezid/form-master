import { useEffect, useRef } from "react";
import useInputState from "../CustomHookSharedFile/CustomHookSharedFile";

const CustomHookForm = () => {
      // Export custom hook as array
      // const [name, handleNameChange] = useInputState(null);
      // const [email, handleEmailChange] = useInputState(null);
      // const [password, handlePasswordChange] = useInputState(null);
      // console.log(hook, handleNameChange);

      // Export custom hook as object
      const emailState = useInputState('');
      const passwordState = useInputState('');
      // console.log(emailState);

      // const textRef = useRef(null);

      const handleSubmit = e => {
            e.preventDefault();
            // console.log(name, email, password);
            console.log(emailState.value);
            console.log(passwordState.value);
      };

      // useEffect(() => {
      //       textRef.current.focus();
      // }, [])

      return (
            <div>
                  {/* onChange={handleNameChange} */}
                  <form onSubmit={handleSubmit}>
                        {/* <input onChange={handleNameChange} ref={textRef} type="text" name="text" />
                        <br /> */}
                        <input {...emailState} type="email" name="email" />
                        <br />
                        <input {...passwordState} type="password" name="password" required />
                        <br />
                        <input type="submit" value="Submit" />
                  </form>
            </div>
      );
};

export default CustomHookForm;