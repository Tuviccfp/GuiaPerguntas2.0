import { useState } from 'react'
import { Card } from "semantic-ui-react";
import FormResponse from '../Form';
import ButtonDefault from '../../shared/Button';

interface DadoAsk {
  _id: number;
  titulo: string;
  descricao: string;
  createdAt: number;
}

export function convertDate(time: number) {
  var date = new Date(time);
  const showDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  return (
    <>
      <p>{showDate}</p>
    </>
  );
}

const CardResponse: React.FC<DadoAsk> = ({_id, titulo, descricao, createdAt}) => {
  const [showModel, setShowModel] = useState<boolean>(false);


  return (
      <Card className="card">
        <Card.Content>
          <Card.Header>{titulo}</Card.Header>
          <Card.Meta>{convertDate(createdAt)}</Card.Meta>
          <Card.Description>{descricao}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div style={{padding: 'px'}}>
            <p style={{ display: "none" }}>{_id}</p>
            <ButtonDefault onClick={() => setShowModel(!showModel)} style={{width: '25%', height: '20%'}} text='Responder'/>
            <div>{showModel && <FormResponse value={`${_id}`} />}</div>
          </div>
        </Card.Content>
      </Card>
  );
}

export default CardResponse;