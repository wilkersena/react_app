import React, {Component} from 'react';
import {Card, Button, Image, Col, Row} from 'react-bootstrap';
import api from "../../services/api";
import {FaStar} from 'react-icons/fa';

class CardsProducts extends Component {
    constructor(){
        super()
        this.state = { 
            pessoas : []
        }
    }

    async componentDidMount(){
        const people_api = await api.get("https://randomuser.me/api/?results=10");
        
        this.setState({
            pessoas: people_api.data.results
        })

    }

    getStars(number){
        const star = []
        console.log(number);
        if (number > 5) {
            number = 5
        }
        if (number) {

            for (let index = 0; index < number; index++) {
                
                star.push(<FaStar style={{color:'gold'}}/>)               
            }

            for (let index = star.length; index < 5; index++) {
                
                star.push(<FaStar style={{color:'#d2d5d9'}}/>) 
            }
            
            return star;
            
        } else {
            for (let index = star.length; index < 5; index++) {
                
                star.push(<FaStar style={{color:'#d2d5d9'}}/>)                 
            }
            return star;
        }
        
    }

    
     

    render() {
        return (
            <>
            {this.state.pessoas.map((pessoa,key) => 
                <Col sm={3}>
                    <Card  key={key}  style={{ width: '18rem' }}>  
                    <Row className="justify-content-center">
                        <Col className="mt-4" xs={6} md={6}>              
                            <Image src={pessoa.picture.large} roundedCircle /> 
                        </Col> 
                    </Row>  
                    <Card.Body>
                    <Row className="justify-content-center">            
                        <Card.Title className="text-center" style={{fontSize: '20px'}}>{pessoa.name.first} {pessoa.name.last} - {pessoa.nat}</Card.Title>                
                    </Row>
                    <Row className="justify-content-center">            
                        <Card.Text>{pessoa.email}</Card.Text>
                    </Row>
                    
                    <Row className="justify-content-end mt-4 mr-1"> 
                        <div className="mr-auto ml-4">{this.getStars(pessoa.registered.age)}</div>                                                                     
                        <Button variant="primary"> Profile</Button>                               
                    </Row>
                    </Card.Body>
                    </Card>
                </Col>
    )}
            </>
        )
        

    }
}   

export default CardsProducts;