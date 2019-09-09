import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import styled from 'styled-components';

import './App.css';

import background from './assets/background.jpg';
import { Header } from './components/header';
import { Preloader } from './components/preloader';

const SWAPI = styled('div')`
  position: fixed;
  width: 100%;
  height: 100%;
  background: url(${background}) no-repeat center;
  background-size: cover;

  main{
    position: relative;
    height: calc(100% - 100px);
    overflow: auto;

    @media screen and (min-width: 1024px) {
      &::-webkit-scrollbar-track{
        box-shadow: none;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, .5);
        width: 12px;
      }

      &::-webkit-scrollbar{
        width: 12px;
        background-color: transparent;
      }

      &::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background-color: rgba(255, 255, 255, .2);
        width: 12px;
      } 
    }
  }
`

const Character = Loadable({
  loader: () => import("./views/Character"),
  loading() {
    return <Preloader />
  }
});

const Episode = Loadable({
  loader: () => import("./views/Episode"),
  loading() {
    return <Preloader />
  }
});

const Specie = Loadable({
  loader: () => import("./views/Specie"),
  loading() {
    return <Preloader />
  }
});

const Vehicle = Loadable({
  loader: () => import("./views/Vehicle"),
  loading() {
    return <Preloader />
  }
});

const Planet = Loadable({
  loader: () => import("./views/Home"),
  loading() {
    return <Preloader />
  }
});

const Starship = Loadable({
  loader: () => import("./views/Starship"),
  loading() {
    return <Preloader />
  }
});

const Home = Loadable({
  loader: () => import("./views/Home"),
  loading() {
    return <Preloader />
  }
});

function App() {
  return (
    <SWAPI data-test='swapi'>
      <BrowserRouter>
        <Header />
        <main>
            <Switch>
              <Route path="/character/:id" component={Character} />
              <Route path="/episode/:id" component={Episode} />
              <Route path="/specie/:id" component={Specie} />
              <Route path="/vehicle/:id" component={Vehicle} />
              <Route path="/planet/:id" component={Planet} />
              <Route path="/starship/:id" component={Starship} />
              <Route path="/" component={Home} />
              <Route path="" component={Home} />
            </Switch>
        </main>
      </BrowserRouter>
    </SWAPI>
  );
}

export default App;
