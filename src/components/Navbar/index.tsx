import React, { FunctionComponent, useState } from 'react';
import { FaBars, FaTimesCircle } from 'react-icons/fa';
import Icon from 'types/Icon';
import Props from './Props';
import * as S from './styles';

const Navbar: FunctionComponent<Props> = (props: Props) => {
  const { title, links } = props;

  const [navclass, setNavclass] = useState<string>('');
  const [icon, setIcon] = useState<Icon>({
    classname: '',
    element: <FaBars />,
  });

  function handleNavDisplay() {
    let classname = 'hide';
    let element: JSX.Element = <FaBars />;

    if (navclass !== 'show') {
      classname = 'show';
      element = <FaTimesCircle />;
    }

    setIcon({ classname, element });
    setNavclass(classname);
  }

  return (
    <S.ContainerFluid>
      <S.Row>
        <S.Logo
          grow="1"
        >
          {title}
        </S.Logo>

        <S.Nav
          grow="1"
          className={navclass}
        >
          {links?.map(({ label, active, ...rest }) => (
            <S.Link
              key={label}
              className={active ? 'active' : ''}
              {...rest}
            >
              <div className="nav-item">
                {label}
              </div>
            </S.Link>
          ))}
        </S.Nav>

        <S.NavDisplaySwitch
          grow="0"
          onClick={handleNavDisplay}
          className={icon.classname}
          alignItems="center"
          justifyContent="center"
        >
          {icon.element}
        </S.NavDisplaySwitch>
      </S.Row>
    </S.ContainerFluid>
  );
};

export default Navbar;
