import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import productsStore from './stores/productsStore';
import ProductsScreen from './screens/productsScreen';

export default class App extends Component {
  render() {
    return (
      <Provider productsStore={productsStore}>
        <ProductsScreen />
      </Provider>
    )
  }
}
