import React from 'react'
import Pagina from '../components/Pagina'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const array = () => {
  
  
  const nome = 'Orion'
  const idade = 25
  const telefone = '(61) 951515147'
  const endereco = 'abc'
  

  const pessoa = {
    nome: 'orion', 
    idade: 25, 
    telefone: '61 985646144', 
    endereco: 'abc'
  }
  
  
  // Boleano 
  // Inteiro 
  // String
  // Array 
  // Objeto
  // Char
  
  const carros = ['astra', 'opala', 'uno', 'doblo', 'omega']

  return (
    
    <>
      <Pagina titulo="Array" >
        <Container>
          <p>{carros[0]}</p>
          <p>{carros[1]}</p>
          <p>{carros[2]}</p>
          <p>{carros[3]}</p>
          <p>{carros[4]}</p>
          <p>{carros[5]}</p>
        </Container>

        


      </Pagina>
    </>
  )
}

export default array