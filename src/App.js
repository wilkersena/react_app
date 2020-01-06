import React from 'react';
import NavComp from './components/NavBar';
import CardPeople from './components/CardsPeople';
import {Row, Jumbotron, Container} from 'react-bootstrap';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavComp/>
          <Container>
            <Jumbotron>
              <Row>
                <CardPeople/>
              </Row>
            </Jumbotron>
          </Container>

        
        
        
      </header>
    </div>
  );
}

export default App;
