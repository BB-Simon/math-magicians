// eslint-disable-next-line import/no-extraneous-dependencies
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import CalculatorPage from './pages/CalculatorPage';
import HomePage from './pages/HomePage';
import QuotePage from './pages/QuotePage';

const Layout = () => (
  <main>
    <Navigation />
    <Outlet />
  </main>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/quote" element={<QuotePage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
