import ElemSideBar from '../components/ElemSideBar';

const createListComponents = (objList) => {
  return objList.map( (obj, i) => {

                        let component = <ElemSideBar
                                          key={i + obj.text}
                                          {...obj}
                                        />;

                        return component;
                      }
                    );
}

export default createListComponents;
