import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { render, screen, fireEvent, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddCampaign from '../addCampaign'
import { mockCampaign } from './Campaign.mocks'

const setCampaignList = jest.fn(() => 'ceva');

describe('<Campaigns>', () => {
    test('can fill inputs', async () => {

        render(
            <Router>
                <AddCampaign />
            </Router>
        )

        const name = screen.getByTestId('input-name').querySelector('input')
        const type = screen.getByTestId('select-type')
        const status = screen.getByTestId('select-status')
        const entrance = screen.getByTestId('input-entrance').querySelector('input')
        const conversionrates = screen.getByTestId('input-conversionrates').querySelector('input')
        const enddate = screen.getByTestId('input-enddate')

        fireEvent.change(name, { target: { value: mockCampaign.name } });

        //screen.debug(type)

        //fireEvent.mouseDown(type('button'))
        /*userEvent.click(type)
        const firstOptionType = screen.getAllByRole('option')[1]
        userEvent.click(firstOptionType)

        userEvent.click(status)
        const firstOptionStatus = screen.getAllByRole('option')[1]
        userEvent.click(firstOptionStatus)*/

        fireEvent.change(entrance, { target: { value: mockCampaign.entrance } });
        fireEvent.change(conversionrates, { target: { value: mockCampaign.conversionrates } });
        //fireEvent.change(enddate, { target: { value: mockCampaign.enddate } }); 

        expect(name.value).toBe(mockCampaign.name)
        expect(entrance.value).toBe(mockCampaign.entrance)
        expect(conversionrates.value).toBe(mockCampaign.conversionrates)
    })
    test('can submit', async () => {
        render(
            <Router>
                <AddCampaign />
            </Router>
        )

        const name = screen.getByTestId('input-name').querySelector('input')
        const entrance = screen.getByTestId('input-entrance').querySelector('input')
        const conversionrates = screen.getByTestId('input-conversionrates').querySelector('input')

        fireEvent.change(name, { target: { value: mockCampaign.name } });
        fireEvent.change(entrance, { target: { value: mockCampaign.entrance } });
        fireEvent.change(conversionrates, { target: { value: mockCampaign.conversionrates } });

        await act(async () => {
            const submitButton = screen.getByText('Add Campaign').closest('button')
            userEvent.click(submitButton)
        })
    })
})