import Homepage from "./page/homepage/homepage"
import { Switch, Route } from "react-router-dom"

const temp = (props) => {
  console.log(props)
  return (
    <div>
      <h3>You clicked</h3>
      <ul>
        <li><strong>pathname:</strong>{props.location.pathname}</li>
        <li><strong>param:</strong>{props.match.params.item}</li>
        <li><strong>path:</strong>{props.match.path}</li>
        <li><strong>url:</strong>{props.match.url}</li>
      </ul>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop/:item" component={temp} />
      </Switch>
    </div>
  );
}

export default App;
