import { useState } from "react";

/**
 * Receives an object that must have the properties,
 * each of these properties will be a form field
 * @param {object} initialState Initial state
 * @returns {array} The first value is the state of the form, the second is a function to change the form values, and the third is a function to reset the form
 */
export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    }

    return [values, handleInputChange, reset];
}
