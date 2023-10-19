import React, { useState } from "react";
import PropTypes from "prop-types"; // ES6

function Form({ formConfig, formHeading }) {
  const createDefaultState = () => {
    const initial = {};
    formConfig.forEach((element) => {
      initial[element.name] = element.defaultVal;
    });
  };

  const [formState, setFormState] = useState();
  const [success, setSuccess] = useState({ msg: "", state: false });

  return;
  <div>
    <div>
      <div>{formHeading}</div>
    </div>
  </div>;
}

export default Form;
