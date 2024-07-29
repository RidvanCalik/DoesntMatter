'use client'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link'

import { useState } from 'react';

export default function MasterHeader() {


  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="gap-2 justify-content-between w-100   my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav className='gap-2'>
            <Link className='h4' href="/">Movies</Link>
            <Link className='h4' href="Categories">Categories</Link>
            </Nav>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Film Ara"
              className="me-2"
              aria-label="Film Ara"
            />
            <Button variant="outline-success">Ara</Button>
            
          </Form>
            <Nav className='gap-5'>
              <Link className='h4' href="CreateMovie">Create Movie</Link>
              <Link className='h4' href="SignIn">Sign In</Link>
            </Nav>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

