import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ButtonDefault from '../shared/Button';

interface Dado {
    _id: number,
    titulo: string,
    descricao: string,
    createdAt: number,
}
const Ask: React.FC = () => {
    const [data, setData] = useState<Dado[]>([]);
    
    function extra(text: string, url: string) {
        return <Link to={url}><ButtonDefault style={{width: '35%'}} text={text}/></Link>
    }

    function log(time: number) {
        var date = new Date(time);
        const showDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
        return (
          <>
            <p>{showDate}</p>
          </>
        );
    }

    async function getAsk() {
        try {
            const response = await axios.get<Dado[]>('http://localhost:8000/get-ask')
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }
 
    useEffect(() => {
        getAsk();
    }, [data])

    return (
        <div>
            {data.map((dado, index) => (
                <Card key={index}
                    header={dado.titulo}
                    meta={log(dado.createdAt)}
                    description={dado.descricao}
                    extra={extra('Responder', `/ask/${dado._id}`)}
                />                
            ))}
        </div>
    )
}

export default Ask;