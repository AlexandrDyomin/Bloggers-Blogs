const TextField = ( { name, placeholder, handleMetaInfoChange, value } ) => {
  return(
    <input 
      className="text-field" 
      type="text"
      name={ name }
      placeholder={ placeholder }
      value={ value }
      onChange={ handleMetaInfoChange }
    />
  );
}

export default TextField;