import Image from "../Image/Image.jsx";
import Info from "../Info/Info.jsx";
import InputFile from "../InputFile/InputFile.jsx";
import MetaInfo from "../MetaInfo/MetaInfo.jsx";
import PublishButton from "../PublishButton/PublishButton.jsx";
import Select from "../Select/Select.jsx";
// import handleTextAreaInput from "../TextArea/handleTextAreaInput.js";
import TextArea from "../TextArea/TextArea.jsx";
import TextField from "../TextField/TextField.jsx";


const ArticleForm = ( { info, metaInfo, handleFileChange, handleTextAreaChange, handleMetaInfoChange } ) => { 
  return(
    <form 
      className="new-article" 
      method='post' encType='multimart/form-data' 
      action="http://localhost:3000/create-article"
    >
      <MetaInfo>
        <Select name="channel" value={ metaInfo.channel } options={ [ 1, 2, 3 ] } handleMetaInfoChange={handleMetaInfoChange} />
        <TextField name="theme" value={ metaInfo.theme } placeholder="theme" handleMetaInfoChange={handleMetaInfoChange} />
        <TextField name="title"  value={ metaInfo.title } placeholder="title" handleMetaInfoChange={handleMetaInfoChange} />
      </MetaInfo>
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
                return <Image key={ i } url={ item.url } />  
            }
          }
        )}
      </Info>
      <PublishButton value="Опубликовать" />
    </form>           
  );
}

export default ArticleForm;