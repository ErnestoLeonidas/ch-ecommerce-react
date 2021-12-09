import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from './components/NavBar';

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
      
    </BrowserRouter>
  );

}

export default injectContext(App);
