// import logo from './logo.svg';
import React , {Component} from 'react';
import { Cardlist } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box.component/search-box.component';
import './App.css';



class App extends Component{

  constructor()
  {
    super();
    this.state=
    {
      monsters:[],
      searchField:''
    };
  }

   componentDidMount()
   {
     fetch('https://jsonplaceholder.typicode.com/users/')
     .then(response => response.json())
     .then(users =>this.setState({monsters:users}));
   }

  render()
  {
  
    const {monsters, searchField }=this.state;
    const filteredMonsters = monsters.filter
    (monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
   
    return (
      <div className="App">
        <header className="App-header">
        <h1 class="main-head">Monsters Rolodex</h1>
        
        <SearchBox 
         placeholder="Monster search.."
         handleChange={e=>{this.setState({searchField:e.target.value})}}
        />

         <Cardlist monsters={filteredMonsters}/>
     
        </header>
      </div>
    );
  }
}


export default App;
