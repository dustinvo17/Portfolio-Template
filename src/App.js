import {  Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Contact from './pages/Contact'
import Projects from './pages/Projects';
function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/projects" component={Projects} exact/>
      </Switch>
    </main>
  );
}

export default App;
