import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";

const HeaderList = styled.div`
    border:1px solid black;
  height: 300px;
  background-color: ${(props)=> props.backgroundColor};
`;

const StyledHeadLink = styled(Link)`
    color: red;

`;

const Header = () => {

    return (
        <div>
            <HeaderList backgroundColor={"blue"}>
                <ul>
                    <li>
                        <StyledHeadLink to="/">홈</StyledHeadLink>
                    </li>
                    <li>
                        <StyledHeadLink to="/login/10">로그인</StyledHeadLink>
                    </li>
                </ul>
            </HeaderList>
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link to="/" className="nav-link">홈</Link>
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <Nav.Link href="#home">Home</Nav.Link>
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <Nav.Link href="#features">Features</Nav.Link>
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
                <br />
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar>

                <br />
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar>
            </>
        </div>
    );
};

export default Header;