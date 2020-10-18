import React, { useState } from 'react';
import PropTypes from "prop-types";

function AddCategory( props ){

    const [inputValue, setInputValue] = useState("");
    
    function handleInputChange( e ){
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2) {
            props.setCategories( cats => [ inputValue, ...cats ] );
            setInputValue("");
        }
    }

    return(
        <form onSubmit={ handleSubmit }>
            <input  
            type="text" 
            value={ inputValue }
            onChange= { handleInputChange }
            />

            </form>
    );


}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
