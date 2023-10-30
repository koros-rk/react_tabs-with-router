import {
  HashRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { ErrorPage } from './components/ErrorPage';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="*" element={<ErrorPage />} />

          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" />} />

          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};