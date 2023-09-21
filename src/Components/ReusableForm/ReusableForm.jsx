import { Children } from "react";

const ReusableForm = ({ formTitle, submitBtn = 'Submit', handleSubmit,children }) => {

      const handleLocalSubmit = e => {
            e.preventDefault();
            const data = {
                  text: e.target.text.value,
                  email: e.target.email.value,
                  password: e.target.password.value
            };
            handleSubmit(data);
      };

      return (
            <div>
                  {children}
                  <form onSubmit={handleLocalSubmit}>
                        {/* <h3>{formTitle}</h3> */}
                        <input defaultValue={'Reusable Form'} type="text" name="text" />
                        <br />
                        <input type="email" name="email" />
                        <br />
                        <input type="password" name="password" required />
                        <br />
                        <input type="submit" value={submitBtn} />
                  </form>
            </div>
      );
};

export default ReusableForm;