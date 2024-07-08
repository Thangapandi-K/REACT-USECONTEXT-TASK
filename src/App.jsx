
import CartComponent from './compnents/CartComponent'
import GrandTotal from './compnents/GrandTotal'
import CartProvider from './contexts.jsx/CartContext'
import './App.css'

function App() {

  return (
    <>
      <div className='container'>
        <div className='text-center fs-1 p-3 shadow-sm rounded bg-body-secondary'>React useContext Task</div>
        <CartProvider>
          <CartComponent />
          <GrandTotal />
        </CartProvider>
      </div><br /><br /><br />
    </>
  )
}

export default App
