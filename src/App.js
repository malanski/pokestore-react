
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Header } from './components/Header';
import { Aside } from './components/Aside';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';

import { Home } from './pages/Home';
import { Pokemon } from './pages/Pokemon';
import { Contact } from './pages/Contact';
import { Category } from './pages/Category';

import './assets/scss/App.scss';
import './assets/scss/Cart.scss';
import { useEffect } from 'react';
import { closeCart } from './store';


function App() {
  const cartOpened = useSelector(state => state.cart.open);
  const dispatch = useDispatch();

  const keydown = (e) => {
    if (e.code === 'Escape') {
      dispatch(closeCart());  
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", keydown, true);
    return () => window.removeEventListener("keydown", keydown, true);
  });

  return (
    <div className={`App ${cartOpened ? 'cart-opened' : ''}`}>
      <HashRouter>

          <Header/>

            <main className='app-main'>

              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/category' element={<Category />}/>
                <Route path='/pokemon/:id' element={<Pokemon />}/>
              </Routes>

            <Aside />

            </main>

          <Nav />
          <Footer />
          <Cart />

      </HashRouter>
    </div>

  );
}

export default App;
