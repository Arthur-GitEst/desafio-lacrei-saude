import { render, screen, fireEvent } from '@testing-library/react'
import Header from './header'

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />)
    expect(screen.getByAltText('Logo da Lacrei Saúde')).toBeInTheDocument()
  })

  it('renders desktop navigation links', () => {
    render(<Header />)
    
    const desktopNav = screen.getByLabelText(/menu principal \(desktop\)/i)
    expect(desktopNav).toBeInTheDocument()

    const sobreLink = screen.getAllByRole('link', { name: /sobre nós/i })[0]
    const contatoLink = screen.getAllByRole('link', { name: /contato/i })[0]

    expect(sobreLink).toBeInTheDocument()
    expect(contatoLink).toBeInTheDocument()
  })

  it('toggles mobile menu', () => {
    render(<Header />)

    const menuButton = screen.getByRole('button', { name: /abrir menu/i })
    expect(menuButton).toBeInTheDocument()
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(menuButton)

    expect(menuButton).toHaveAttribute('aria-label', 'Fechar Menu')
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')

    const mobileNav = screen.getByRole('navigation', { name: /menu principal \(mobile\)/i })
    expect(mobileNav).toBeInTheDocument()
  })
})