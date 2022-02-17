import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import Counter from './components/Counter';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

describe('Counter Component',()=>{
  test('should render Counter', () => {
    render(<Counter />);
  });
  
  test('title "Counter" should be present',()=>{
    render(<Counter/>);
    const element=screen.getByText(/Counter/);
  })
  
  test('+ button clicked and value incremented by 1',()=>{
    render(<Counter/>);
    const displayValue = screen.getByTitle("display");
    userEvent.click(screen.getByRole('button',{name: '+'}));
    expect(displayValue.textContent).toBe("1");
  })
  
  test('- button clicked and value decremented by 1',()=>{
    render(<Counter/>);
    const displayValue = screen.getByTitle("display");
    userEvent.click(screen.getByRole('button',{name: '-'}));
    expect(displayValue.textContent).toBe("-1");
  })

})

