import React from 'react';
import { render, renderHook, screen, waitFor } from '@testing-library/react';
import App from '../App';
import mockData from './mockData'
import userEvent from '@testing-library/user-event';

describe('testando a aplicaçao', () => {
  beforeEach(() => {
    global.fetch = jest.fn(async() => ({
      json:async() => mockData,
    }))
  })

  test('se é possivel filtrar pelo nome ', async () => {
    render(<App />);
    const inputText= await screen.getByTestId('name-filter');
    userEvent.type(inputText, 'oo')
    const planetFiltered = await screen.findByText('Tatooine')
    expect(planetFiltered).toBeInTheDocument();
  
  });
  test('se é possivel realizar a filtragem numerica, primeiro o filtro maior que', async () => {
    render(<App />); 
    const inputColumn= screen.getByTestId('column-filter');
    const inputOperador= screen.getByTestId('comparison-filter');
    const inputNumber= screen.getByTestId('value-filter');
    const filterButton = screen.getByTestId('button-filter');

    userEvent.selectOptions(inputColumn, 'population')
    userEvent.selectOptions(inputOperador, 'maior que')
    userEvent.type(inputNumber, '0')
    userEvent.click(filterButton)

    const filteredPlanets = await screen.findAllByTestId('planets')
    expect(filteredPlanets).toHaveLength(8)
  })
  test('se é possivel realizar a filtragem numerica, segundo o filtro menor que', async () => {
    render(<App />); 
    const inputColumn= screen.getByTestId('column-filter');
    const inputOperador= screen.getByTestId('comparison-filter');
    const inputNumber= screen.getByTestId('value-filter');
    const filterButton = screen.getByTestId('button-filter');

    userEvent.selectOptions(inputColumn, 'population')
    userEvent.selectOptions(inputOperador, 'menor que')
    userEvent.type(inputNumber, '200000')
    userEvent.click(filterButton)

    const filteredPlanets = await screen.findAllByTestId('planets')
    expect(filteredPlanets).toHaveLength(1)
  })
  
  test('se é possivel realizar a filtragem numerica, terceiro o filtro igual a', async () => {
    render(<App />); 
    const inputColumn= screen.getByTestId('column-filter');
    const inputOperador= screen.getByTestId('comparison-filter');
    const inputNumber= screen.getByTestId('value-filter');
    const filterButton = screen.getByTestId('button-filter');

    userEvent.selectOptions(inputColumn, 'population')
    userEvent.selectOptions(inputOperador, 'igual a')
    userEvent.type(inputNumber, '1000')
    userEvent.click(filterButton)

    const filteredPlanets = await screen.findAllByTestId('planets')
    expect(filteredPlanets).toHaveLength(1)
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
  test('se a funcionalidade do botao excluir todos os filtros', async () => {
    render(<App />)
   const deleteButton = screen.getByTestId('button-remove-filters');
   userEvent.click(deleteButton)
  
  })
  
})


