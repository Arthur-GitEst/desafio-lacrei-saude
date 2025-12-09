import { render, screen } from '@testing-library/react'
import Footer from './footer'

describe('Footer', () => {
  it('renders the footer navigation links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /sobre nós/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contato/i })).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)

    const instagramLink = screen.getByLabelText(/instagram/i)
    const facebookLink = screen.getByLabelText(/facebook/i)
    const linkedinLink = screen.getByLabelText(/linkedin/i)

    expect(instagramLink).toBeInTheDocument()
    expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/lacreisaude/')
    
    expect(facebookLink).toBeInTheDocument()
    expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com/lacrei.saude/')

    expect(linkedinLink).toBeInTheDocument()
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/company/lacreisaude/?originalSubdomain=br')
  })

  it('renders the logo', () => {
    render(<Footer />)
    expect(screen.getByAltText('Logo da Lacrei Saúde')).toBeInTheDocument()
  })
})