import WeatherApp from "./components/WeatherApp"
import OrbBackground from "./components/OrbBackground"

function App() {


  return (
    <>
          <OrbBackground />
          <div className="flex min-h-svh items-center justify-center">
      <WeatherApp/>
            </div>
    </>
  )
}

export default App
