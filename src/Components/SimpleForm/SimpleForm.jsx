
const SimpleForm = () => {

      const handleSubmit = e => {
            e.preventDefault();
            console.log(e.target.text.value);
            console.log(e.target.email.value);
      };

      return (
            <div>
                  <form onSubmit={handleSubmit}>
                        <input type="text" name="text" />
                        <br />
                        <input type="email" name="email" />
                        <br />
                        <input type="submit" value="Submit" />
                  </form>
            </div>
      );
};

export default SimpleForm;