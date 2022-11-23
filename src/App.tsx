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
	NewProjectForm
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
							<Route path='/post' element={<Post />} />
							<Route path='/work' element={<Work />} />
							<Route path='/blog' element={<Blog />} />
							<Route path='/teammate' element={<Teammate />} />
							<Route path='/new-project-form' element={<NewProjectForm />} />



						



          
          </Route>
        </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
