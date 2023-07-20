import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import { Form } from "semantic-ui-react";
import styled from "styled-components";
import ButtonDefault from "../../shared/Button";

const ContainerModel = styled.div`
  margin-top: 15px;
  border: none;
  border-radius: 0.28571429rem;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  padding: 7px;

  .form {
    width: 15vw;
  }
  
  #input-focus {
    &:focus {
        border: 1px solid #ff6347;
        width: 1px;
    }
  }
`;
interface Input {
  value: string;
  //Interface utilizada para receber um valor vindo de outro componente. (CardResponse)
}

const FormResponse: React.FC<Input> = ({value}) => {
  const [body, setBody] = useState<string>("");
  const [perguntaId, setPerguntaId] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/save-response", {
        body: body,
        perguntaId: value, //Ao invés de passar perguntaId, passei prop.value, pra receber o valor vindo de outro componente e o meu métod setPerguntaId por capturá-lo
      })
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <ContainerModel>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Field>
          <label>Resposta</label>
          <input
            type="text"
            style={{ display: "none" }}
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPerguntaId(e.target.value)
            }
          />
          <input
            id="input-focus"
            type="text"
            style={{ width: "14.5vw" }}
            placeholder="Informe aqui a sua resposta"
            value={body}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setBody(e.target.value)
            }
          />
        </Form.Field>
        <ButtonDefault
          style={{ width: "34%", height: "18%" }}
          text="Publicar"
        />
      </Form>
    </ContainerModel>
  );
}

export default FormResponse;