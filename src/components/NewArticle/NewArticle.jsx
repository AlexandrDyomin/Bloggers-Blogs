import React from 'react';
import "./style.css";
import ArticleForm from '../ArticleForm/ArticleForm';
import Organizer from '../Organizer/Organizer';

class NewArticle extends React.Component {
  state = {
    metaInfo: { channel: "Выберите канал", theme: "", title: "" },
    info: [ { type: "TextArea", value: "" } ],
    disabledBtnAppendText: true
  }

  render() {
    const handleFileChange = ( e ) => {
      let file = e.currentTarget.files[0];  
      let reader = new FileReader();
      reader.readAsArrayBuffer( file );  
      if ( this.state.info.length - e.currentTarget.dataset.index === 2 ) {
        
        reader.onload = () => {
          let numberOfRecords = this.state.info.length;
          this.setState({
            info: [ 
              ...this.state.info.slice( 0, numberOfRecords - 1 ), 
              { type: "img", url: reader.result },
              ...this.state.info.slice( -1 )
            ]
          });
        }
      } else {
        let index = +e.currentTarget.dataset.index;
        reader.onload = () => {
          let modifiedInfo = [ 
            ...this.state.info.slice( 0, index + 1 ),
            { type: "img", url: reader.result },
            ...( this.state.info[index +1].type === "img" ) ? this.state.info.slice( index + 2 ) : this.state.info.slice( index + 1 )
          ];
          this.setState({
            info: modifiedInfo
          });
        }
      }
    }

    const appendImg = () => {
      this.setState( {
        info: [ ...this.state.info, 
          { type: "InputFile" }, 
          { type: "descriptionPicture", value: "" } 
        ],
        disabledBtnAppendText: false
      });
    }

    const appendTextArea = () => {
      this.setState( {
        info: [ ...this.state.info, { type: "TextArea", value: "" } ],
        disabledBtnAppendText: true
      });
    }

    const handleMetaInfoChange = ( e ) => {
      let name = e.currentTarget.name;
      this.setState({
        metaInfo: { ...this.state.metaInfo, [name]: e.currentTarget.value }
      });
    }

    const handleTextAreaChange = ( e ) => {
      let index = e.currentTarget.dataset.index;
      let  modifiedInfo  = [ ... this.state.info ] ;
      modifiedInfo[index].value = e.currentTarget.value; 

      this.setState({
        info: modifiedInfo
      });

      let textArea = e.currentTarget;
      textArea.style.height = "auto";
      textArea.style.height = `${ textArea.scrollHeight }px`;
    }

    return(
      <div className="new-article">
        <h6 className="new-article__title">Создать статью</h6>
        <div className="new-article__content">
          <div className="new-article__organizer">
            <Organizer 
              appendTextArea={ appendTextArea } 
              appendImg={ appendImg } 
              disabled={ this.state.disabledBtnAppendText }/>
          </div>
            <ArticleForm 
              info={ this.state.info }
              metaInfo={ this.state.metaInfo } 
              handleMetaInfoChange={ handleMetaInfoChange }
              handleTextAreaChange={ handleTextAreaChange }
              handleFileChange={ handleFileChange }
            />
        </div>
      </div>
    );
  }
}

export default NewArticle;

