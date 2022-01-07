import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../pages/Home';
import Destination from '../pages/Destination';
import Crew from '../pages/Crew';
import Technology from '../pages/Technology';

export default function Routes(){
  return(
    <BrowserRouter>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/destination" component={Destination} />
        <Route exact path="/crew" component={Crew} />
        <Route exact path="/technology" component={Technology} />
      </Switch>

    </BrowserRouter>
  );
}