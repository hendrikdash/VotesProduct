
import React, {FC} from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductView from './Views/Product/ProductView'
import LandingPage from './Views/LandingPage'
import VotedProduct from './Views/Voted/VotedProduct'
const RouterView : FC = () => {
    return (
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/products' component={ProductView} />
            <Route exact path='/voted-product' component={VotedProduct} />
        </Switch>
    );
}

export default RouterView;