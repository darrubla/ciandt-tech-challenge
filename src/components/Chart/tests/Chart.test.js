import React from 'react'
import { render } from '@testing-library/react'

import Chart from '../index'

describe('<Chart />', () => {
  it('Should render properly', () => {
    const props = {
      captions: {
        test: 'test'
      },
      data: [{
        data: { test: 0.2 },
        meta: {
          color: 'red'
        }
      }],
    }
    const { getByText } = render(<Chart {...props} />)
    expect(getByText('test')).toBeTruthy()
  })

  it('Should render and match the snapshot', () => {
    const props = {
      captions: {
        test: 'test'
      },
      data: [{
        data: { test: 0.2 },
        meta: {
          color: 'red'
        }
      }],
    }
    const {
      container: { firstChild },
    } = render(<Chart {...props} />)
    expect(firstChild).toMatchSnapshot()
  })
})