import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import CardResponse from "./Card";
import CardResponses from "./CardResponses";
import ButtonDefault from "../shared/Button";

interface ResponseData {
  askId: {
    _id: number;
    titulo: string;
    descricao: string;
    createdAt: number;
  };
  response: Array<{
    _id: number;
    body: string;
    createdAt: number;
  }>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .btn-home {
    border: 1px solid transparent;
    border-radius: 5px;
    width: 7%; 
    height: 7%;
    background: #ff6347;
    color: white;
    padding: 5px;
    margin-bottom: 10px;  
  }

  .card {
    width: 30vw;
  }
`;

const Response: React.FC = () => {
  const [data, setData] = useState<ResponseData | null>(null);
  const [error, setError] = useState<string>("");
  const { id } = useParams<{ id: string }>();
  const returnPageHome = useNavigate()
  
  useEffect(() => {
    async function getData() {
      await axios
        .get<ResponseData>(`http://localhost:8000/ask/${id}`)
        .then((result) => {
          setData(result.data);
        })
        .catch((err) => {
          if (err)
            setTimeout(() => {
              setError("Ocorreu um erro ao buscar os dados");
            }, 3000);
        });
    }
    getData();
  }, [data]);

  return (
    <Container>
      <h4>Perguntas & Respostas</h4>
      <ButtonDefault onClick={() => returnPageHome('/')} text="Voltar" style={{width: '7%', height: '7%', marginBottom: '10px'}}/>
      {data && (
        <div>
          <CardResponse
            _id={data.askId._id}
            titulo={`${data.askId.titulo}`}
            descricao={`${data.askId.descricao}`}
            createdAt={data.askId.createdAt}
          />

          {data.response.map((dado, index) => (
            <CardResponses
              key={index}
              _id={dado._id}
              body={dado.body}
              createdAt={dado.createdAt}
            />
          ))}
        </div>
      )}
      <p>{error}</p>
    </Container>
  );
};

export default Response;

