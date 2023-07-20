import { useState } from 'react'
import styled from 'styled-components'
import Ask from './components/Ask/Ask';
import FormAsk from './components/Ask/FormAsk/FormAsk';
import ButtonDefault from './components/shared/Button';

const Container = styled.div`
display: flex;
height: 100vh;
align-items: center;
flex-direction: column;
`

function App() {
  const [model, setModel] = useState<boolean>(false)

  return (
    <Container>
      <h4 style={{marginTop: '15px'}}>Perguntas & Respostas</h4>
      <ButtonDefault onClick={() => setModel(!model)} text='Criar nova pergunta' style={{width: '150px', height: '40px', marginBottom: '10px'}} />
      {model && <FormAsk />}
      <Ask />
    </Container>
  );
}

export default App;
