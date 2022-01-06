import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../pages/Home';
import Destination from '../pages/Destination';

export default function Routes(){
  return(
    <BrowserRouter>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/destination" component={Destination} />
      </Switch>

    </BrowserRouter>
  );
}