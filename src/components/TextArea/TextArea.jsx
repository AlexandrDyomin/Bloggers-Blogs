import "./style.css";

const TextArea = ( { 
  handleTextAreaChange, 
  maxlength, 
  index, 
  value, 
  placeholder, 
  cols = "65", 
  rows = "10" 
}) => {
  return <textarea 
    className="text-area" 
    name="article" 
    cols={ cols }
    rows={ rows } 
    data-index={ index }
    onChange={ handleTextAreaChange }
    value={ value }
    placeholder={ placeholder }
    maxLength= { maxlength }
  ></textarea>
}

export default TextArea;