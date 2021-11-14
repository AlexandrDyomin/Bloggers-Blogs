import "./style.css"
const Image = ( { url, title } ) => {
  url = URL.createObjectURL( new Blob( [ url ] ) );
  return(
    <figure>
      <img className="image" src={ url } alt="" />
      <figcaption>{ title }</figcaption>
    </figure>
  );
}

export default Image;