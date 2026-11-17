import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Movements from './pages/Movements'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="movements" element={<Movements />} />
        <Route path="*" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
