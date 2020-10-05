

import React, {FC} from 'react';
import {Card, Button} from 'react-bootstrap';
interface InitProps {
    onVote?: () => void
    description?: string;
    url?: string;
    name?: string;
    price?: string;
    count?: number;
    id?: number;
    buttonStatus?: boolean;
    style?: object;
}

const CardComponent : FC<InitProps> = (props) => {
 
    return (    
        <>
           <Card style={{ width: '18rem', ...props.style}} >
            {props.url? <Card.Img variant="top" src={props.url} /> : undefined }
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.description}
                    <p style={{fontWeight: 'bold'}}>Price  : {props.price + " $"}</p>
                    {props.count? (<p style={{fontWeight: 'bold'}} >Total Vote : {props.count} </p>) : undefined}
                </Card.Text>
                {props.buttonStatus ? <Button variant="primary" onClick={props.onVote}>Vote</Button> : undefined }
            </Card.Body>
            </Card>
        </>
    );
}

export default CardComponent;

