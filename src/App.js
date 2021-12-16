import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

import injectContext from "./store/appContext";

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        {/* <Navbar /> */}
          <Route exact path="/">
            <NavBar />
          </Route>
      </Switch>
      <ItemListContainer />
    </BrowserRouter>
  );

}

export default injectContext(App);
