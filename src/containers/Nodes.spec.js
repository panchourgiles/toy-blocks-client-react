import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import ConnectedNodes, { Nodes } from './Nodes';
import Node from '../components/Node';

describe('<Nodes />', () => {
  const actions = {
    checkNodeStatuses: jest.fn()
  };

  const nodes = {
    list: [
      {
        url: 'https://thawing-springs-53971.herokuapp.com',
        online: false,
        name: 'Node 1',
        loading: false,
        blocks: {
          data: [
            {
              id: '5',
              type: 'blocks',
              attributes: {
                index: 1,
                timestamp: 1530679678,
                data: 'The Human Torch',
                'previous-hash': 'KsmmdGrKVDr43/OYlM/oFzr7oh6wHG+uM9UpRyIoVe8=',
                hash: 'oHkxOJWOKy02vA9r4iRHVqTgqT+Afc6OYFcNYzyhGEc='
              }
            },
            {
              id: '6',
              type: 'blocks',
              attributes: {
                index: 2,
                timestamp: 1530679684,
                data: 'is denied',
                'previous-hash': 'oHkxOJWOKy02vA9r4iRHVqTgqT+Afc6OYFcNYzyhGEc=',
                hash: '9xr57PW8RVzeOniNP2lPVzAOu97x12mpDgjv70z5vo4='
              }
            },
            {
              id: '7',
              type: 'blocks',
              attributes: {
                index: 3,
                timestamp: 1530679689,
                data: 'a bank loan',
                'previous-hash': '9xr57PW8RVzeOniNP2lPVzAOu97x12mpDgjv70z5vo4=',
                hash: 'YGLfNDMC2x2m5kwb3q+Ne/uCL4sFUnX/sQwzuwijx8A='
              }
            }
          ],
          loading: false,
          error: false
        }
      },
      {
        url: 'https://secret-lowlands-62331.herokuapp.com',
        online: false,
        name: 'Node 2',
        loading: false,
        blocks: {
          data: [],
          loading: false,
          error: false
        }
      }
    ]
  };

  it('should contain <Node />', () => {
    const wrapper = shallow(<Nodes actions={actions} nodes={nodes} />);

    expect(wrapper.find(Node).length).toEqual(2);
  });

  it('should match snapshot', () => {
    const middlewares = [thunk];
    const store = configureMockStore(middlewares)({ nodes });
    const component = create(
      <Provider store={store}>
        <ConnectedNodes />
      </Provider>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
