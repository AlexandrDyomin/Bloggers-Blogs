import "./style.css";

const Organizer = ( { appendTextArea, appendImg, disabled } ) => {
  return(
    <div className="organizer">
      <button 
        className="btn" 
        type="button" 
        disabled={ disabled } 
        onClick={ appendTextArea }
      >Вставить текст</button>
      <button 
        className="btn" 
        type="button" 
        onClick={ appendImg }
        >Вставить картинку</button>
    </div>
  );
}

export default Organizer;