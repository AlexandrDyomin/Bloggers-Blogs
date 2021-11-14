const Select = ( { name, options, value, handleMetaInfoChange } ) => {
  return(
    <select className="select" name={ name } required value={ value } onChange={ handleMetaInfoChange }>
      { options.map( ( item, i ) => 
          <option key={ i } value={ item }>
            { item }
          </option> 
        )
      }
    </select>
  );
}

export default Select;