import Image from "../Image/Image.jsx";
import Info from "../Info/Info.jsx";
import InputFile from "../InputFile/InputFile.jsx";
import MetaInfo from "../MetaInfo/MetaInfo.jsx";
import Select from "../Select/Select.jsx";
import TextArea from "../TextArea/TextArea.jsx";
import TextField from "../TextField/TextField.jsx";


const ArticleForm = ( props ) => { 
  let { 
    info, 
    metaInfo, 
    handleFileChange, 
    handleTextAreaChange, 
    handleMetaInfoChange 
  } = props;

  const handleButtonSubmit = e => {
    e.preventDefault();
    let form = document.forms[0];
  
    let blob = new Blob([info[0].value, info[2].url])

    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(blob);
    fileReader.onload = function(event) {
      let arrayBuffer = fileReader.result;
      console.log(arrayBuffer)
    }
};

  return(
    <form 
      id="article-form"
      method='post' 
      encType='multipart/form-data' 
      action="http://localhost:3000/create-article"
      onSubmit={handleButtonSubmit}
    >
      <fieldset>
        <legend>Информация о статье</legend>   
        <MetaInfo>
          <Select name="channel" value={ metaInfo.channel } options={ [ 1, 2, 3 ] } handleMetaInfoChange={handleMetaInfoChange} />
          <TextField name="theme" value={ metaInfo.theme } placeholder="theme" handleMetaInfoChange={handleMetaInfoChange} />
          <TextField name="title"  value={ metaInfo.title } placeholder="title" handleMetaInfoChange={handleMetaInfoChange} />
        </MetaInfo>
      </fieldset>

      <fieldset>
        <legend>Статья</legend>
        <Info>
          { info.map( ( item, i ) => {
              switch ( item.type ) {
                case "InputFile": 
                  return (
                    <InputFile 
                      key = { i } 
                      handleFileChange={ handleFileChange } 
                      index = { i }
                    />
                  );
                
                case "TextArea":
                  return <TextArea 
                    key = { i } value={ item.value } 
                    handleTextAreaChange={ handleTextAreaChange }
                    index = { i }
                  />

                case "img":
                  return <Image key={ i } url={ item.url } index = { i } />  

                case "descriptionPicture":
                  return <TextArea 
                    key = { i } value={ item.value } 
                    handleTextAreaChange={ handleTextAreaChange }
                    index = { i }
                    placeholder="Дайте название и краткое описание изображения"
                    rows="3"
                    cols="30"
                    maxlength="120"
                  />
              }
            }
          )}
        </Info>
      </fieldset>

     
    </form>           
  );
}

export default ArticleForm;