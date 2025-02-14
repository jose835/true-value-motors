import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cars from './pages/Cars';
import Home from './pages/Home';
import CarInformation from './pages/CarInformation';

interface RouteType {
  path: string;
  element: React.ReactNode;
}

function App() {
  const routes: RouteType[] = [
    { path: "/", element: <Home /> },
    { path: "cars", element: <Cars /> },
    { path: "car-information", element: <CarInformation /> }
  ];

  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}

export default App;
