import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";
import ButtonDefault from "../../shared/Button";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 30px;
  border: none;
  border-radius: 0.28571429rem;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  padding: 15px;

  #input-focus {
    &:focus {
      border: 1px solid #ff6347
    }
  }
`

const FormAsk: React.FC = () => {
  const [titulo, setTitulo] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");

  // React.FormEvent<HTMLFormElement> é utilizado como tipagem para meu evento no parâmetro dessa função.
  // Sempre utilizar essa tipagem para retornar um preventDefault de um botão de um formulário
  function handleClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios
      .post("http://localhost:8000/save-ask", {
        titulo: titulo,
        descricao: descricao,
      })
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Container>
      <Form onSubmit={handleClick}>
        <Form.Field>
          <label>Titulo</label>
          {/* 
              React.ChangeEvent<HTMLInputElement> é utilizado como tipagem para meu evento no parâmetro dessa função. 
              Sempre utilizar essa tipagem para setar um valor de um Input, no caso um onChange 
          */}
          <input
            id="input-focus"
            type="text"
            value={titulo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitulo(e.target.value)
            }
            placeholder="Informe um título"
          />
        </Form.Field>

        <Form.Field>
          <label>Descrição</label>
          <input
            id="input-focus"
            type="text"
            value={descricao}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDescricao(e.target.value)
            }
            placeholder="Informe uma descrição"
          />
        </Form.Field>
        <ButtonDefault text="Publicar pergunta" style={{width: '75%'}}/>
      </Form>
    </Container>
  );
}

export default FormAsk;