import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Root from './homepage';
import { ThemeProvider, createTheme } from '@mui/material';

function App() {
	const theme = createTheme({
		palette: {
			primary: {
				main: '#6F42C1',
			},
			secondary: {
				main: '#9370DB',
			},
			background: {
				default: '#4B0082',
			},
			contrastColor: '#333333',
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Root />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
