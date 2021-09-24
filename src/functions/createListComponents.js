import ElemSideBar from '../components/ElemSideBar';
import { NavLink } from 'react-router-dom';

const createListComponents = ( objList ) => {
  return objList.map( ( obj, i ) => {
    let component = (
      <NavLink to={ `/${ obj.text }` }>
        <ElemSideBar key={ i + obj.text } { ...obj } />
      </NavLink>
    );
    return component;
  });
}

export default createListComponents;
