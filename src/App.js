import RegisterContainer from "./RegisterContainer";
import styles from "./App.module.scss";
import { Switch, Route } from "react-router-dom";
import Chart from "./Chart";

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(routeProps) => <RegisterContainer routeProps={routeProps} />}
      ></Route>

      <Route
        exact
        path="/chart"
        render={(routeProps) => <Chart {...routeProps} />}
      ></Route>
    </Switch>
  );
}

export default App;
