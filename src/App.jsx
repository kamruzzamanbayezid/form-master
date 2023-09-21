import './App.css'
import CustomHookForm from './Components/CustomHookForm/CustomHookForm'
import ReusableForm from './Components/ReusableForm/ReusableForm'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StateFullForm from './Components/StateFullForm/StateFullForm'
import UseRef from './Components/UseRef/UseRef'

function App() {

  const handleSignUpSubmit = data => {
    console.log(data.email);
  };

  const handleUpdateSubmit = data => {
    console.log(data);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <SimpleForm></SimpleForm>
      <hr />
      <StateFullForm></StateFullForm>
      <hr />
      <UseRef></UseRef>
      <hr></hr>
      <CustomHookForm></CustomHookForm>
      <hr />
      <ReusableForm
        formTitle={'Sign Up!'}
        handleSubmit={handleSignUpSubmit}>
          <div>
            <h3>Sign up!</h3>
            <p>Please Sign Up</p>
          </div>
        </ReusableForm>

      <ReusableForm
        formTitle={'Update Name!'}
        submitBtn={'Update'}
        handleSubmit={handleUpdateSubmit}>
          <div>
            <h3>Update Form</h3>
            <p>New Update available</p>
          </div>
        </ReusableForm>
    </>
  )
}

export default App
