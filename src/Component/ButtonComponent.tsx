
import React, {FC} from 'react';
import {Button} from 'react-bootstrap';

interface InitProps {
    style? : object;
    variant? : string;
    text?: string;
    onClick?: () => void;
}

const ButtonComponent : FC<InitProps> = (props) => {
    return (
        <>
            <Button {...props}>{props.children}</Button>
        </>
    );
}

export default ButtonComponent;