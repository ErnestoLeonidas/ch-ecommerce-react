import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";


import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';

const App = () => {

  return (
    <BrowserRouter>
          <NavBar />
      <Switch>
        {/* <Navbar /> */}
          <Route exact path="/ItemDetail">
            <ItemDetail />
          </Route>
          <Route exact path="/ItemListContainer">
            <ItemListContainer />
          </Route>
      </Switch>
    </BrowserRouter>
  );

}

export default injectContext(App);
