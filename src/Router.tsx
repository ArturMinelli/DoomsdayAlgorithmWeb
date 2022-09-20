import { Routes, Route } from 'react-router-dom'
import { Trainer } from './pages/Trainer'
import { History } from './pages/History'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Trainer />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
