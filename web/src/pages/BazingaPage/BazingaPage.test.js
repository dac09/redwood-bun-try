import { render } from '@redwoodjs/testing/web'

import BazingaPage from './BazingaPage'

describe('BazingaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BazingaPage />)
    }).not.toThrow()
  })
})
