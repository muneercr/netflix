import logo from './logo.svg';
import './App.css';
import Header from './componants/Header/Header';
import Home from './componants/Home/Home';
import   CardRow from './componants/cardSection/CardRow';
import {orginals,action,Romance,War,Comedy} from './urls'



function App() {
  return (
    <div>
       <Header/>
       <Home/>
       <CardRow url={orginals} title='Netflix orginals'   items={4}/>
       <CardRow url={action}  title='action'  isSmall/>
       <CardRow url={Comedy}  title='Comedy'  isSmall/>
       <CardRow url={Romance}  title='Romance'  isSmall/>
       <CardRow url={War}  title='War'  isSmall/>

    </div>

  )
}

export default App;
