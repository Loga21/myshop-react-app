import { HashRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// importing css
import './App.scss';
import ErrorBoundary from './containers/shared/ErrorBoundary/ErrorBoundary';
import AppRoutes from './routes/AppRoutes/AppRoutes';

// component
function App() {
  // must return jsx
  return (
    // here comes JSX
    // ideal place to build the layout
    <ErrorBoundary>
      <HashRouter>
        <Header />

        <main className='m-3 mt-3 pt-3'>
          {/* configure thru routes  */}
          <ErrorBoundary>
            <AppRoutes />
          </ErrorBoundary>
        </main>

        <Footer></Footer>
      </HashRouter>
    </ErrorBoundary>
  );
}

export default App;
library.add(fas, far, fab);
