
import React, {FC, useState, useContext} from 'react';
import { Row, Container} from 'react-bootstrap'
import ButtonComponent from '../../Component/ButtonComponent'
import ModalComponent from '../../Component/ModalComponent'
import TableComponent from '../../Component/TableComponent'
import {AppContext} from '../../GlobalState/AppContext'
import ProductForm from './ProductForm'
import {Types} from '../../GlobalState/Contexts/Product/ProductContext'


interface InitProps {
    props?: object
}



const ProductView : FC<InitProps> = (props) => {
    const { state : { products }, dispatch } = useContext(AppContext);
    const [show, setShow] = useState(false);
    const [defaultValues, setDefaultValues] = useState({
        productName: "",
        productDescription: "",
        productPrice: "",
    })
   
    const handleSubmitFormCreate = (data : any) => {
        var nextId = products.length + 1;
        dispatch({
            type: Types.Add,
            payload: {id: nextId,
                ...data
            }
        });
        setShow(false);
    }


    const handleCreateButton = () => {
        setDefaultValues(
            {
                productName: "",
                productDescription: "",
                productPrice: "",
        });
        setShow(true)
    }
    
    const handleDeleteButton = (id: number) => {
        dispatch({
            type: Types.Delete,
            payload: {id}
        });
    }

    
    const handleEditButton = (id : number) => {
        var product: any = products.find(element => element.id === id);
        setDefaultValues({
            productName: product?.name || '',
            productDescription: product?.description || '',
            productPrice: product?.price || '',
        });
       
        setShow(true);
    }


    return (
        <>  
            <ModalComponent
                show={show}
                title={"Create Product"}
                onHide={() => setShow(false)}
            >
                   <ProductForm handleSubmitParent={handleSubmitFormCreate} defaultValues={defaultValues}/>
            </ModalComponent>
                <Container>
                    <Row>
                        <ButtonComponent onClick={() => handleCreateButton()}
                        variant="success" style={{margin: '2% 0% 2% 2%'}}>Create</ButtonComponent>
                    </Row>
                    <Row style={{minHeight: "800px"}}>
                        <TableComponent >
                            <thead>
                                <tr>
                                <th>No</th>
                                <th>Product Name</th>
                                <th>Product Description</th>
                                <th>Price</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products !== undefined? 
                                    products.map((item) => {
                                    return(
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.description}</td>
                                            <td>{item.price+ ' $'}</td>
                                            <td>
                                                <ButtonComponent onClick={() => handleEditButton(item.id)} variant="primary" style={{marginRight: '5px'}}>Edit</ButtonComponent>
                                                <ButtonComponent onClick={() => handleDeleteButton(item.id)} variant="danger">Delete</ButtonComponent>
                                            </td>
                                        </tr>
                                    )
                                    }) 
                                    : undefined
                                }
                            </tbody>
                        </TableComponent>
                    </Row>
                </Container>
        </>
    );
}

export default ProductView;