import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './Components';

import {
	About,
	Home,
	Blog,
Work,
Post,
Teammate,
	NotFound,
} from './Pages';

import {MainLayout} from './Layouts'
import Menu from './Layouts/Menu';

function App() {
	return (
		<>
			<Router>
				<ScrollToTop>
					<Routes>
					<Route path='*' element={<NotFound />} />
					<Route path='/menu' element={<Menu />} />
				
						
				
						<Route element={<MainLayout />}>
						<Route path='/' element={<Home />} />
							<Route path='/about' element={<About />} />
							<Route path='/post' element={<Post />} />
							<Route path='/work' element={<Work />} />
							<Route path='/blog' element={<Blog />} />
							<Route path='/teammate' element={<Teammate />} />


						



          
          </Route>
        </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
