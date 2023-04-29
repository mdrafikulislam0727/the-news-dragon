import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGitSquare,FaFacebookF,FaTwitter,FaInstagramSquare } from 'react-icons/fa';
import QZone from '../Qzone/Qzone';
import bg from '../../../assets/bg1.png'


const RightNav = () => {
    return (
        <div>
            <h3>Login With</h3>
            <Button className='mb-2' variant="outline-primary"><span className='p-2'><FaGoogle /></span> Login with Google</Button>
            <Button variant="outline-secondary"><span className='p-2'><FaGitSquare /></span> Login with Github</Button>
            <div className='mt-4'>
                <h3 className='mb-4'>Find Us On</h3>
                <ListGroup>
                    <ListGroup.Item><FaFacebookF/>Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/>Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagramSquare/>instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='position-relative'>
                <img src={bg} alt="" />
                <div className='position-absolute top-50 start-50 translate-middle text-white'>
                    <h1 className='fw-bold'>Create an Amazing Newspaper</h1>
                    <p className='fs-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger">Danger</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;