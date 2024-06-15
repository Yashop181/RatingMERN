import { Routes, Route } from "react-router-dom"
import ReviewForm from "./components/ReviewForm"
import ReviewsList from "./components/ReviewsList"
import Layout from "./components/Layout"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index  element={<ReviewForm/>}/>
        <Route path="/disp" element={<ReviewsList/>} />

        </Route>
      </Routes>
    </div>
  )
}

export default App
