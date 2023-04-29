import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { AuthContext } from '../../../Providers/AuthProvider';




const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex gap-4 bg-light p-4'>
                <Button variant="danger">Danger</Button>
                <Marquee className='text-info' speed={50}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
          
        </Container>
    );
};

export default Header;