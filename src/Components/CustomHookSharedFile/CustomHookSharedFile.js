import { useState } from "react";

const useInputState = (defaultValue = null) => {
      const [value, setValue] = useState('');

      // const handleChange = val => {
      //       setValue(val.target.value);
      // };
      const onChange = val => {
            setValue(val.target.value);
      };

      // return [value, handleChange];
      return {
            value,
            onChange
      }
};

export default useInputState;