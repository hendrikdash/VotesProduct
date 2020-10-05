
import React, {FC, useContext} from 'react';
import { Row,Col, Container} from 'react-bootstrap'
import CardComponent from '../Component/CardComponent'
import {AppContext} from '../GlobalState/AppContext'
import {Types} from '../GlobalState/Contexts/Vote/VoteContext'

interface InitProps {
    props?: object
}

const LandingPage : FC<InitProps> = (props) => {
    const { state : { products, votes }, dispatch } = useContext(AppContext);
    const handleVoteProduct = (id : any) => {
        var voteProduct = votes.find(element => element.product_id === id) || null;
        
        if (voteProduct === null) {
            dispatch({
                type: Types.AddVote,
                payload: {
                    id: votes.length + 1,
                    product_id: id,
                    count: 1
                }
            })
        } else {
            dispatch({
                type: Types.UpdateVote,
                payload: {
                    id: voteProduct.id,
                }
            })
        }
    }
    return (
        <> 
        <Container>
            <Row style={{minHeight: "800px"}}>
            {
                products? products.map((item,ind) => {
                    var idImage = Math.floor(Math.random() * 100) + 1
                    return (
                        <Col style={{margin:'10px'}} key={ind}>
                            <CardComponent 
                                buttonStatus={true}
                                key={item.id}
                                url={"https://picsum.photos/id/"+idImage.toString()+"/200/200"}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                id={item.id}
                                onVote={() =>handleVoteProduct(item.id)}
                            />
                        </Col>
                    )
                }) : undefined
            }
            </Row>
        </Container>
           
        </>
    );
}

export default LandingPage;