const handleTextAreaInput = ( e ) => {
  let textArea = e.currentTarget;
  textArea.style.height = "auto";
  textArea.style.height = `${ textArea.scrollHeight }px`;
}

// export default handleTextAreaInput;