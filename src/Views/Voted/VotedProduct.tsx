
import React, {FC, useState, useContext, useEffect} from 'react';
import { Row, Col, Container} from 'react-bootstrap'
import {AppContext} from '../../GlobalState/AppContext'
import CardComponent from '../../Component/CardComponent'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
interface InitProps {
    props?: object
}

interface cardDataInit {
    id?: number;
    name?: string;
    description?: string;
    price?: string;
    count?: number;
}

const randomBetween = (min:number, max: number) => min + Math.floor(Math.random() * (max - min + 1));

const ProductView : FC<InitProps> = (props) => {
    const { state : { products, votes } } = useContext(AppContext);
    const [CardData, setCardData] = useState<cardDataInit[]>([]);
  
    useEffect(() => {
        const newDataCard : any = []
        products.map((item) => {
            var counted = votes.find((element) => element.product_id === item.id) || null;
            if (counted !== null) {
                newDataCard.push({...item, count : counted.count});
            }
            return item
        });
        setCardData(newDataCard);
    },[votes,products])

    return (
        <>  
             <Container>
                 <Row >
                    <BarChart
                        width={500}
                        height={300}
                        data={CardData}
                        margin={{
                            top: 20, right: 30, left: 20, bottom: 20,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar  dataKey="count" fill="#8884d8" />
                        
                    </BarChart>
                 </Row>
                <Row style={{minHeight: "800px"}}>
                {
                    CardData? CardData.map((item,ind) => {
                        return (
                            <Col style={{margin:'10px'}}>
                                <CardComponent
                                    style={{backgroundColor: `rgb(${randomBetween(0, 255)},${randomBetween(0, 255)},${randomBetween(0, 255)})`}}
                                    key={ind}
                                    buttonStatus={false}
                                    name={item?.name? item.name : ''}
                                    description={item?.description? item.description : ''}
                                    price={item?.price? item.price : ''}
                                    count={item?.count? item.count : 0}
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

export default ProductView;