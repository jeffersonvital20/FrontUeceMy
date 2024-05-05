import { BrowserRouter } from 'react-router-dom';
import { AppThemeProvider, DrawerProvider } from './shared/contexts'
import { Menu } from './shared/Components/menu/menu';
import { AppRoutes } from './routes';

function App() {
  // const [count, setCount] = useState(0)

  return (    
    <AppThemeProvider>
      <DrawerProvider>        
        <BrowserRouter>
          <Menu>
            <AppRoutes />
          </Menu>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
}

export default App
