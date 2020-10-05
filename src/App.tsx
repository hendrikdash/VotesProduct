import React, {FC} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Views/layouts/Header';
import Footer from './Views/layouts/Footer';
import './asset/style/App.css';
import { AppProvider} from './GlobalState/AppContext';
import { BrowserRouter as Router} from 'react-router-dom';
import RouterView from './RouterView';
import {Container} from 'react-bootstrap'
interface InitComponent {
  component?: object
}
const App : FC<InitComponent> = () => {
  return <>
          <Router>
            <AppProvider>
              <Header />
                <Container fluid style={{backgroundColor: "#cfd8dc"}}>
                    <RouterView/>
                  <Footer />
                </Container>
            </AppProvider>
          </Router>
        </>
}



export default App;
