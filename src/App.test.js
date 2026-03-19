import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Homepage from './Pages/HomePage';
import NavHeader from './Pages/NavHeader';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import ServicePage from './Pages/ServicePage';
import ContactUSPage from './Pages/contactUsPage';
import ContactUS from './Pages/ContactUs';
import ContactUSForm from './Pages/ContactUSForm';
import Faq from './Pages/Faq';
import Sample from './Sample';

test('renders App and all homepage sections with content', () => {
  render(<App />);

  expect(screen.getByText(/Bring your Business Online/i)).toBeInTheDocument();
  expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  expect(screen.getByText(/Our Services/i)).toBeInTheDocument();
  expect(screen.getByText(/get in touch/i)).toBeInTheDocument();
  const faqItems = screen.getAllByText(/FAQ/i);
  expect(faqItems.length).toBeGreaterThanOrEqual(2);
});

test('Homepage renders its child components and key anchors', () => {
  render(<Homepage />);

  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Bring your Business Online/i })).toBeInTheDocument();
  expect(screen.getByText(/We make creativity work for your brand!/i)).toBeInTheDocument();
  expect(screen.getByText(/Web App Development/i)).toBeInTheDocument();
  expect(screen.getByText(/How much will it cost\?/i)).toBeInTheDocument();
});

test('NavHeader links render correctly', () => {
  render(<NavHeader />);
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Contact')).toBeInTheDocument();
  expect(screen.getAllByRole('link').length).toBeGreaterThanOrEqual(5);
});

test('ServicePage includes all service headings', () => {
  render(<ServicePage />);
  expect(screen.getByRole('heading', { name: /Our Services/i })).toBeInTheDocument();
  expect(screen.getByText(/Web App Development/i)).toBeInTheDocument();
  expect(screen.getByText(/Mobile App Development/i)).toBeInTheDocument();
  const digitalMarketingItems = screen.getAllByText(/Digital Marketing/i);
  expect(digitalMarketingItems.length).toBeGreaterThanOrEqual(1);
});

test('ContactUS contains iframe', () => {
  render(<ContactUS />);
  expect(screen.getByTitle(/GOOGGLE MAP API/i)).toBeInTheDocument();
});

test('ContactUSForm renders form fields', () => {
  render(<ContactUSForm />);
  expect(screen.getByPlaceholderText(/Name/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Contact number/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Your Message/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
});

test('Sample renders and updates text field', () => {
  render(<Sample />);
  const input = screen.getByRole('textbox');
  expect(input).toBeInTheDocument();
  expect(screen.getByText(/text:/i)).toBeInTheDocument();

  fireEvent.change(input, { target: { value: 'test@example.com' } });
  expect(input.value).toBe('test@example.com');
  expect(screen.getByText(/text:test@example.com/i)).toBeInTheDocument();
});

test('Faq has common questions and answers', () => {
  render(<Faq />);
  expect(screen.getByText(/When do I pay\?/i)).toBeInTheDocument();
  expect(screen.getByText(/Can you help my current site look more professional\?/i)).toBeInTheDocument();
});
