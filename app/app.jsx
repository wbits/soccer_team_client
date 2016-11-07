import React from 'react';
import { render } from 'react-dom';
import Root from './players/components/root';
import { configureStore } from './players/store';

const store = configureStore();

render(
    <Root store={store} />,
    document.getElementById('root')
);