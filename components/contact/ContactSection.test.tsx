import { render, screen } from '@testing-library/react'
import ContactSection from './ContactSection'

describe('ContactSection', () => {
  it('renders the contact section title and description', () => {
    render(<ContactSection />)

    expect(screen.getByRole('heading', { name: /entre em contato/i })).toBeInTheDocument()
    expect(screen.getByText(/queremos ouvir você/i)).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<ContactSection />)

    expect(screen.getByLabelText(/instagram/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/facebook/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/linkedin/i)).toBeInTheDocument()
  })

  it('renders the contact form fields', () => {
    render(<ContactSection />)

    expect(screen.getByLabelText(/nome completo/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/mensagem/i)).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<ContactSection />)

    expect(screen.getByRole('button', { name: /enviar mensagem/i })).toBeInTheDocument()
  })
})