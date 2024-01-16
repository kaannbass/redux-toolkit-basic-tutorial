import './App.css'
import Home from '../src/pages/Home'
import { useAppSelector } from './app/hooks'


function App() {
  const counter = useAppSelector((state) => state.counter.value);

  return (
    <Home counter={counter} />
  )
}

export default App
