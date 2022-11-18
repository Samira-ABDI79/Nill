import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './Components';

import {
	About,
	Home,
	
	NotFound
} from './Pages';

import {MainLayout} from './Layouts'


function App() {
	return (
		<>
			<Router>
				<ScrollToTop>
					<Routes>
					<Route path='*' element={<NotFound />} />
				
						
				
						<Route element={<MainLayout />}>
						<Route path='/' element={<Home />} />
							<Route path='/about' element={<About />} />
						



          
          </Route>
        </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
