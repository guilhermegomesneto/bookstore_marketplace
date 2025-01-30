import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Search from './pages/Search.jsx';
import BookDetail from './pages/BookDetail.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<App />}>
					<Route path="/" element={<Home />} />
					<Route path="/search" element={<Search />} />
					<Route path="/book/:id" element={<BookDetail />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
