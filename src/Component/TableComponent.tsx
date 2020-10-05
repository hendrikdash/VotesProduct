
import React, {FC} from 'react';
import {Table} from 'react-bootstrap';

interface InitProps {
//    children?: Component
}

const TableComponent : FC<InitProps> = (props) => {
    return (
        <>
            <Table striped bordered hover>
                {props.children}
            </Table>
        </>
    );
}

export default TableComponent;