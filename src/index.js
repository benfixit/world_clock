import React from 'react'
import { render } from 'react-dom';
import ErrorBoundary from './ErrorBoundary';
import App from './App';

const element = document.getElementById('root');

render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>, 
    element
    );

