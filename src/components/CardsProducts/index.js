import React, {Component} from 'react';
import {Card, Button} from 'react-bootstrap';

class CardsProducts extends Component {
    state = { 
        pessoas : [
            {
                nome: 'WILKER DE SENA GUEDES',
                idade: 29,
                data_nascimento: '09/03/1990'
            },
            {
                nome: 'LUANA LOPES BARRETO GUEDES',
                idade: 30,
                data_nascimento: '19/05/1988'
            },
            {
                nome: 'CLARICE BARRETO GUEDES',
                idade: 1,
                data_nascimento: '19/09/2018'
            },
            {
                nome: 'CLARICE BARRETO GUEDES',
                idade: 1,
                data_nascimento: '19/09/2018'
            }
        ]
    }

    render() {
        return (
            this.state.pessoas.map(pessoa =>
            <Card className="mr-auto mt-2" style={{ width: '18rem' }}>        
            <Card.Body>
                <Card.Title style={{fontSize: '12px'}}>{pessoa.nome}</Card.Title>
            <Card.Text>{pessoa.idade} anos, {pessoa.data_nascimento}</Card.Text>
                <Button variant="primary">Perfil</Button>
            </Card.Body>
            </Card>
            )
        )
        

    }
}   

export default CardsProducts;