import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import Home, { GridItem } from './'
import data from './data.json'

describe('>> SCREEN -- Tests Home Page', () => {
  it('Home Page Snapshot Test', () => {
    const component = renderer
      .create(<Home />)
      .toJSON()

    expect(component).toMatchSnapshot();
  })

  it('Counts Grid Items At Home Page', () => {
    // const input = shallow(<PinInputUnit {...props} />)
    const component = shallow(<Home />)

    const result = component.find('GridItem').length
    const expected = 11

    expect(result).toEqual(expected)
  })
})

describe('>> COMPONENT -- Tests home page GridItem', () => {
  it ('GridItem 1_1 Snapshot Test With Content And Button', () => {
    const props = {
      ...data[0],
      size : '1_1'
    }
    const component = renderer
      .create(<GridItem {...props} />)
      .toJSON()

    expect(component).toMatchSnapshot();
  })

  it ('GridItem 1_1 Snapshot Test Without Content and Button', () => {
    const props = {
      ...data[0],
      content : undefined,
      button  : undefined
    }
    const component = renderer
      .create(<GridItem {...props} />)
      .toJSON()

    expect(component).toMatchSnapshot();
  })

  it ('GridItem 1_1 Snapshot Test With Content and Link', () => {
    const props = {
      ...data[10],
      size : '1_1'
    }
    const component = renderer
      .create(<GridItem {...props} />)
      .toJSON()

    expect(component).toMatchSnapshot();
  })

  it ('GridItem 1_2 Snapshot Test', () => {
    const props = {
      ...data[0],
      size : '1_2'
    }
    const component = renderer
      .create(<GridItem {...props} />)
      .toJSON()

    expect(component).toMatchSnapshot();
  })

  it ('GridItem 2_2 Snapshot Test', () => {
    const props = { ...data[0] }
    const component = renderer
      .create(<GridItem {...props} />)
      .toJSON()

    expect(component).toMatchSnapshot();
  })
})

