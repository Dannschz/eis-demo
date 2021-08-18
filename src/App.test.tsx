import { render } from '@testing-library/react'
import App from './App'

test('renders learn react link', async () => {
  const app = render(<App />)
  await app.findByText('Producto')
})
