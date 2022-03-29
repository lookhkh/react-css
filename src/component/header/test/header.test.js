import { render, screen } from '@testing-library/react'
import { toHaveClass } from '@testing-library/jest-dom'
import Header from '../Header.js'
import { act } from 'react-dom/test-utils';

describe("Header test",()=>{
    
    test("the width of the window is greater than 1000, render div with className browser-container",()=>{
        act(() => { render(<Header />);  });
        
        const target = screen.getByTestId('browser');

        expect(target).toHaveClass('mobile-browser')        
    })
})