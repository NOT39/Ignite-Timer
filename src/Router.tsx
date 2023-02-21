import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts'
import { History, Home } from './pages'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
