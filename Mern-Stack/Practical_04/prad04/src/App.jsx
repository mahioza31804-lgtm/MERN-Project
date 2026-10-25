import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <div className="page">
      <h1>Discover Vibrant Gujarat</h1>
      <p>
        Welcome to the premier portal for exploring Gujarat's rich heritage, iconic monuments, and cultural destinations.
      </p>
      <p>
        Use the navigation menu above to browse historical monuments, famous tourist regions, and details about our platform.
      </p>
    </div>
  )
}

function Monuments() {
  const monumentsList = [
    { name: 'Statue of Unity', location: 'Kevadia' },
    { name: 'Rani Ki Vav', location: 'Patan' },
    { name: 'Somnath Temple', location: 'Prabhas Patan' },
  ]

  return (
    <div className="page">
      <h1>Famous Monuments</h1>

      <div className="card-container">
        {monumentsList.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.name}</h3>
            <p>Location: {item.location}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Regions() {
  return (
    <div className="page">
      <h1>Top Regions</h1>

      <div className="card-container">

        <div className="card">
          <h3>Saurashtra</h3>
          <p>Famous for ancient pilgrimage sites like Somnath, Dwarka, and Asiatic lions of Gir.</p>
        </div>

        <div className="card">
          <h3>North Gujarat</h3>
          <p>Known for historic architecture like Rani Ki Vav, Sun Temple Modhera, and Patola crafts.</p>
        </div>

        <div className="card">
          <h3>Central & South Gujarat</h3>
          <p>Home to the world's tallest Statue of Unity, cultural hubs, and scenic landscapes.</p>
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="page">
      <h1>About Us</h1>

      <p>
        This application is built using React and React Router for seamless single-page navigation.
      </p>

      <p>
        It showcases multi-page routing layout patterns and clean component composition.
      </p>
    </div>
  )
}

function NotFound() {
  return (
    <div className="page">
      <h1>404</h1>
      <p>Page Not Found</p>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navbar">
          <h2>Gujarat Explorer</h2>

          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/monuments">Monuments</NavLink>
            <NavLink to="/regions">Regions</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/monuments" element={<Monuments />} />
            <Route path="/regions" element={<Regions />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App