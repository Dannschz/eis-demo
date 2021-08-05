import { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Caja from './pages/Caja'
// import { InventoryProvider, useInventoryContext } from './Context/inventory';
import Home from './pages/Home'
import Inventario from './pages/Inventario'
import Ventas from './pages/Ventas'
import RegisterProductSection from './components/InventoryComponents/RegisterProductSection'
import EntryProductSection from './components/InventoryComponents/EntryProductSection'
import EditSection from './components/InventoryComponents/EditSection'
// import { CashBoxProvider, useCashBoxContext } from './Context/cashbox';
import BarcodeSection from './components/InventoryComponents/BarcodeSection'
import { GlobalProvider, useGlobalContext } from './Context/globalState'
import LoginSection from './components/HomeComponents/LoginSection'
import SignInSection from './components/HomeComponents/SignInSection'
import SalesSection from './components/HomeComponents/SalesSection'
import CutCashSection from './components/CashBoxComponents/CutCashSection'
import InOutCashSection from './components/CashBoxComponents/InOutCashSection'
import ProductOutputSection from './components/InventoryComponents/ProductOutputSection'
import UsersPage from './pages/Users'
import './App.scss'

export function App() {
  // const { dispatch } = useGlobalContext();

  useEffect(() => {}, [])

  // console.log(globalState);

  return (
    <BrowserRouter basename="/">
      <div className="globalContainer">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={SalesSection} />
          <Route exact path="/login" component={LoginSection} />
          <Route exact path="/signin" component={SignInSection} />
          <Route exact path="/ventas" component={Ventas} />
          <Route exact path="/inventario" component={Inventario} />
          <Route exact path="/caja" component={Caja} />
          <Route exact path="/caja/corte" component={CutCashSection} />
          <Route exact path="/caja/inout" component={InOutCashSection} />
          <Route exact path="/users" component={UsersPage} />
          <Route exact path="/users/registrar" component={SignInSection} />
          <Route
            exact
            path="/inventario/registrar"
            component={RegisterProductSection}
          />
          <Route
            exact
            path="/inventario/entradas"
            component={EntryProductSection}
          />
          <Route
            exact
            path="/inventario/salidas"
            component={ProductOutputSection}
          />
          <Route exact path="/inventario/editar" component={EditSection} />
          <Route exact path="/inventario/códigos" component={BarcodeSection} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
export default function AppWrapper() {
  return (
    <GlobalProvider>
      <App />
    </GlobalProvider>
  )
}
