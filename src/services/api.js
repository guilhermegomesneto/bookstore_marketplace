import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:3000',
});

export const registerUser = async (userData) => {
	const response = await api.post('/register', userData);
	return response.data;
};

export const loginUser = async (userData) => {
	const response = await api.post('/login', userData);
	return response.data;
};

export const getBooks = async () => {
	const response = await api.get('/books');
	return response.data;
};

export const searchBooks = async (page = 1, query = '') => {
	const response = await api.get('/search', {
		params: {
			_page: page,
			_limit: 10,
			title: query,
		},
	});
	return response.data;
};

export const getBookById = async (id) => {
	const response = await api.get(`/books/${id}`);
	return response.data;
};
