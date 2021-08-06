import ElemSideBar from '../components/ElemSideBar';

const createListComponents = (objList) => {
  return objList.map( (obj, i) => {
                        let component = <ElemSideBar
                                          key={i + obj.text}
                                          text={obj.text}
                                          image={obj.image}
                                        />;

                        return component;
                      }
                    );
}

export default createListComponents;
