import React from 'react';
import { render, renderHook, screen, waitFor } from '@testing-library/react';
import App from '../App';
import mock from './mockData'
import userEvent from '@testing-library/user-event';


test('se é renderizado na tela um input do tipo texto com datatest ', () => {
  render(<App />);
  const inputText= screen.getByTestId('name-filter');
  expect(inputText).toBeInTheDocument();

});
test('se os inputs da filtragem numerica estao na tela', () => {
  render(<App />); 
  const inputColumn= screen.getByTestId('column-filter');
  expect(inputColumn).toBeInTheDocument();

  const inputOperador= screen.getByTestId('comparison-filter');
  expect(inputOperador).toBeInTheDocument();

  const inputNumber= screen.getByTestId('value-filter');
  expect(inputNumber).toBeInTheDocument();
})
  

test('se é possível digitar nos inputs corretamente', async () => {
  render(<App />)
  const inputText= screen.getByTestId('name-filter');
  userEvent.type(inputText, 'oo')

  const inputColumn= screen.getByTestId('column-filter');
  userEvent.selectOptions(inputColumn, 'population')

  const inputOperador= screen.getByTestId('comparison-filter');
  userEvent.selectOptions(inputOperador, 'igual a')

  const inputNumber= screen.getByTestId('value-filter');
  userEvent.type(inputNumber, '1000');

  const filterButton = screen.getByTestId('button-filter')
  userEvent.click(filterButton)

})


