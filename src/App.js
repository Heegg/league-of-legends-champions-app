import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import ChampionsFilter from './components/ChampionsFilter'
import ChampionsList from './components/ChampionsList'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Home from './components/Home'
import NewChampions from './components/NewChampion'

function App() {

  const [champions, setChampions] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/champions')
    .then(r => r.json())
    .then(championsData => setChampions(championsData))
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Header slogan="League of Legends" storeName="Welcome to Summoner's Rift"/>
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/champions">
                <ChampionsList 
                  champions={champions}/>
              </Route>
              <Route exact path="/favorites">
              </Route>
              <Route exact path="/add-new">
                <NewChampions />
              </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;