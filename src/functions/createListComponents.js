import Theme from '../components/Theme';

const createListComponents = (objList) => {
  return objList.map(
    (obj, i) => {
      let component = <Theme
                        key={i + obj.theme}
                        nameTheme={obj.theme}
                        img={obj.image}
                      />;

      return component;
    }
  );
}

export default createListComponents;
