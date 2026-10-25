import { useState } from 'react'
import './App.css'

function ProductCard({ itemName, category, price }) {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const handleOrder = () => {
    if (count > 0) {
      alert(`Order placed for ${count} piece(s) of ${itemName}!`)
    } else {
      alert('Please select quantity first.')
    }
  }

  return (
    <div className="product-card">
      <h2>{itemName}</h2>
      <p className="origin"><strong>Category:</strong> {category}</p>
      <p className="price">₹{price}</p>

      <div className="quantity-section">
        <button onClick={handleDecrement}>−</button>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>

      <p className="total-text">
        Total: <strong>₹{price * count}</strong>
      </p>

      <button className="cart-button" onClick={handleOrder}>
        Add to Cart
      </button>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <h1>Tech Gadgets Store</h1>
      <p className="subtitle">
        Props, State Management and Event Handling Demo
      </p>

      <div className="product-container">
        <ProductCard
          itemName="Smartwatch Ultra"
          category="Wearables"
          price={3999}
        />

        <ProductCard
          itemName="Wireless ANC Earbuds"
          category="Audio"
          price={2499}
        />

        <ProductCard
          itemName="RGB Gaming Mouse"
          category="Accessories"
          price={1499}
        />
      </div>
    </div>
  )
}

export default App