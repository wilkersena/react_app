import React from 'react';
import NavComp from './components/NavBar';
import CardProducts from './components/CardsProducts';
import {Row, Jumbotron, Container} from 'react-bootstrap';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavComp/>
          <Container>
            <Jumbotron className="m-auto">
              <Row>
                <CardProducts/>
              </Row>
            </Jumbotron>
          </Container>

        
        
        
      </header>
    </div>
  );
}

export default App;
