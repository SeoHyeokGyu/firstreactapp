import React from 'react';
import styled from "styled-components";


const HeaderList = styled.div`
    border:1px solid black;
  height: 300px;
  background-color: ${(props)=> this.props.backgroundColor};
`;

const Header = () => {

    return (
        <div>
            <HeaderList backgroundColor={"blue"}>
                <ul>
                    <li>
                        메뉴1:
                    </li>
                    <li>
                        메뉴2:
                    </li>
                </ul>
            </HeaderList>
        </div>
    );
};

export default Header;