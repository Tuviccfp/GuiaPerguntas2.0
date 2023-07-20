import { useState, useEffect } from 'react'
import axios from "axios"
import { Card } from 'semantic-ui-react';
import { convertDate } from '../Card';

interface DadoResponse {
    _id: number
    body: string,
    createdAt: number
}

const CardResponses: React.FC<DadoResponse> = ({_id, body, createdAt}) => {
    return (
        <Card>
            <Card.Content>
                <Card.Header>Resposta</Card.Header>
                <Card.Meta>{convertDate(createdAt)}</Card.Meta>
                <Card.Description>{body}</Card.Description>
                <p style={{display: 'none'}}>{_id}</p>
            </Card.Content>
        </Card>
    )
}

export default CardResponses;