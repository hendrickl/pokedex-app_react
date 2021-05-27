import React, { FunctionComponent} from 'react';
import PokemonList from './pages/pokemon-list';
import PokemonsDetail from './pages/pokemon-detail';
import PokemonEdit from './pages/pokemon-edit';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import PokemonAdd from './pages/pokemon-add';
import Login from './pages/login';

const App: FunctionComponent = () => {

    return (
        <Router>
            <div>
                <nav>
                    <div className='nav-wrapper teal'>
                        <Link to='/' className='brand-logo center'>Pokedex</Link>
                    </div>
                </nav>
                <Switch>
                    <Route exact path='/' component={PokemonList} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/pokemons' component={PokemonList} />
                    <Route exact path='/pokemons/add' component={PokemonAdd} />
                    <Route exact path='/pokemons/edit/:id' component={PokemonEdit} />
                    <Route path='/pokemons/:id' component={PokemonsDetail} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;