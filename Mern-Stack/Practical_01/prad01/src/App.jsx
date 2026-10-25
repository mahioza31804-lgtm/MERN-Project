import './App.css'

function MonumentCard({ name, location, builtBy, era }) {
  return (
    <div className="student-card">
      <h2>{name}</h2>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Built By:</strong> {builtBy}</p>
      <p><strong>Era:</strong> {era}</p>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <h1>Pride of Gujarat Heritage</h1>

      <div className="student-container">
        <MonumentCard
          name="Statue of Unity"
          location="Kevadia, Gujarat"
          builtBy="Govt. of Gujarat (L&T)"
          era="Modern Era (2018)"
        />

        <MonumentCard
          name="Rani Ki Vav"
          location="Patan, Gujarat"
          builtBy="Queen Udayamati (Solanki Dynasty)"
          era="11th Century AD"
        />

        <MonumentCard
          name="Somnath Temple"
          location="Prabhas Patan, Gujarat"
          builtBy="Rebuilt by Sardar Vallabhbhai Patel"
          era="Ancient / Rebuilt 1951"
        />
      </div>
    </div>
  )
}

export default App