import React from 'react'
import { render, fireEvent } from '../testUtils'
import { Home } from '../../pages/index'

describe('Home page', () => {
    it('matches snapshot', () => {
        const { asFragment } = render(<Home data={{ results: [{ name: 'x' }] }} />, {})
        expect(asFragment()).toMatchSnapshot()
    })

    // it('clicking button triggers alert', () => {
    //     const { getByText } = render(<Home data={{ results: [{ name: 'x' }] }} />, {})
    //     // window.alert = jest.fn()
    //     // fireEvent.click(getByText('Get Details'))
    // })
})
