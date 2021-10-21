import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Articles from './Pages/Articles/Articles';
import Home from './Pages/Home/Home/Home';
import Programs from './Pages/Home/Programs/Programs';
import Footer from './Pages/Home/Shared/Footer';
import Header from './Pages/Home/Shared/Header';
import Suppliments from './Pages/Home/Suppliments/Suppliments';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register';
import NotFound from './Pages/NotFound/NotFound';
import Entrol from './Pages/Program/Entrol';
import Purchase from './Pages/Purchase/Purchase';
import Results from './Pages/Results/Results';
import ProceedBuy from './Pages/Supplement/ProceedBuy';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/programs">
              <Programs></Programs>
            </Route>
            <PrivateRoute path="/suppliments">
              <Suppliments></Suppliments>
            </PrivateRoute>
            <PrivateRoute path="/articles">
              <Articles></Articles>
            </PrivateRoute>
            <Route path="/results">
              <Results></Results>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/entrol/:programId">
              <Entrol></Entrol>
            </PrivateRoute>
            <PrivateRoute path="/supplements/:supplementsId">
              <ProceedBuy></ProceedBuy>
            </PrivateRoute>
            <PrivateRoute path="/purchase">
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
