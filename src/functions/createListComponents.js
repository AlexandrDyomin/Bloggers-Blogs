import ElemSideBar from '../components/ElemSideBar';
import { NavLink } from 'react-router-dom';

const createListComponents = ( objList ) => {
  let topicText = {
    textDecoration: "none",
  };
  
  return objList.map( 
    ( obj, i ) => {
      let component = (
        <NavLink to={ `/${ obj.text }` } style={ topicText } key={ i + obj.text }>
          <ElemSideBar  { ...obj } />
        </NavLink>
      );
      return component;
    }
  );
}

export default createListComponents;
