
import './App.css';

import Home from './Componets/Home';
import {theme} from './Componets/themeProvider/theme'
import { ThemeProvider } from '@material-ui/core/styles';
import DenseAppBar from './Componets/Navbar';
import {BrowserRouter as Router ,Switch , Route} from 'react-router-dom';

import ContainerWork from './Componets/AddUser/ContainerWork';

  import DisplayData from './Componets/DisplayData';
import ContainerEditWork from './Componets/EditArea/ContainerWorkedit';
//  import ContainEdit from './Componets/EditUser/ContainerEdit'




function App() {
  return (

    //
    <Router>
     
    <ThemeProvider theme={theme}>
    <div >
      <DenseAppBar/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        
        <Route path="/container">
         
          <ContainerWork/>
        
        </Route>
         <Route path="/data/:id">
          <DisplayData/>
       </Route>
         <Route path="/edit/:id">
          <ContainerEditWork/>
        </Route>
         
      </Switch>
   
    </div>
    </ThemeProvider>
  
    </Router>
  );
}

export default App;
