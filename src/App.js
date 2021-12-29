import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {

  const links = [
    { href: "/category/1", nombre: "Dress", id: 1 },
    { href: "/category/2", nombre: "Skirt", id: 2 },
    { href: "/contact", nombre: "Contact Us", id: 2 },
  ]


  return (
    <BrowserRouter>
          <NavBar links={links}/>
      <Switch>
        {/* <Navbar /> */}
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/category/:id">
            <ItemListContainer />
          </Route>
      </Switch>
    </BrowserRouter>
  );

}

export default injectContext(App);
