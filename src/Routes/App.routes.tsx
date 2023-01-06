import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import List from '../Pages/List'
import Layout from '../Components/Layout'

export default function AppRoutes() {
	return (
		<Layout>
			<BrowserRouter>
				<Routes>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/list/:type" element={<List />} />
				</Routes>
			</BrowserRouter>
		</Layout>
	)
}