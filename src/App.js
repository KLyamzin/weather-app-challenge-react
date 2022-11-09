import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Form, Button } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column app-container">
        <header>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
              <LinkContainer to="/">
                <Navbar.Brand>Weather App</Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="navbarSearch" />
              <Navbar.Collapse id="navbarSearch" className="my-2">
                <Form className="d-flex ms-auto">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container></Container>
        </main>
        <footer className="text-center">
          <a href="https://github.com/KLyamzin/weather-app-challenge-react">
            GitHub Repo.
          </a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
