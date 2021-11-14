const InputFile = ( { handleFileChange, index } ) => {
  let inputStyle = {
    display: "none"
  }

  let label = {
    display: "block"
  }

  return (
    <label className="input-file" style= { label }> Загрузить картинку
      <input
        className="input-file__item"
        type="file"
        name="file"
        accept="image/*"
        onChange={ handleFileChange }
        style={ inputStyle }
        data-index = { index }
      />
    </label>  
  );
}

export default InputFile;