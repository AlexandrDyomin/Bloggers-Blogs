import "./style.css";

const Organizer = ( { appendTextArea, appendImg, disabled } ) => {
  return(
    <div className="organizer">
      <button 
        className="button" 
        type="button" 
        disabled={ disabled } 
        onClick={ appendTextArea }
      >Вставить текст</button>

      <button 
        className="button" 
        type="button" 
        onClick={ appendImg }
        >Вставить картинку</button>

      <button 
        className="button" 
        type="submit"
        form="article-form" 
        >Опубликовать</button>

    </div>
  );
}

export default Organizer;