import React, { Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PageLoader } from './components/pageStyles';
const App = lazy(() => import('./routes/App'));

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<PageLoader>Loading...</PageLoader>}>
      <App/>
    </Suspense>
  </BrowserRouter>
, document.getElementById('root'));
