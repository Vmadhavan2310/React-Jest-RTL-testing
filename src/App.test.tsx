import { render, screen } from '@testing-library/react';
import App from './App';

describe('grouping app test',()=>{
  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText('Vinoth Madhavan');
    expect(linkElement).toBeInTheDocument();
  });
})

