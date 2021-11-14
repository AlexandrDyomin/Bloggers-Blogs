const PublishButton = ( { type, value } ) => {
  return(
    <input 
      className="publish-button" 
      type={ type || "submit" }  
      value={ value } />
  );
}

export default PublishButton;