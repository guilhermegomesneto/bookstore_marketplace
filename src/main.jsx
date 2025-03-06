import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import User from './pages/User.jsx';
import Search from './pages/Search.jsx';
import BookDetail from './pages/BookDetail.jsx';
import Cart from './pages/Cart.jsx';
import { CartProvider } from './context/CartContext.jsx';
import './index.scss';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<CartProvider>
				<Routes>
					<Route element={<App />}>
						<Route path="/" element={<Home />} />
						<Route path="/user" element={<User />} />
						<Route path="/search" element={<Search />} />
						<Route path="/book/:id" element={<BookDetail />} />
						<Route path="/cart" element={<Cart />} />
					</Route>
				</Routes>
			</CartProvider>
		</BrowserRouter>
	</StrictMode>
);
