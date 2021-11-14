import "./style.css";

const TextArea = ( { handleTextAreaChange, index, handleChange, value } ) => {
  return(
    <textarea 
      className="text-area" 
      name="article" 
      cols="65" 
      rows="10" 
      data-index={ index }
      onChange={ handleTextAreaChange }
      value={ value }
    ></textarea>
  );
}

export default TextArea;