import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import './index.scss';

function App() {
	return (
		<div id="root" className="app-container">
			<Navbar />
			<ToastContainer />
			<div className="content-wrapper">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}

export default App;
