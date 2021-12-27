import "./style.css";

const Image = ( { url, index } ) => {
  url = URL.createObjectURL( new Blob( [ url ] ) );
  return <img className="image" src={ url } alt="" data-index={ index } />;
}

export default Image;