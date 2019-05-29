import React, { Component } from 'react';
import App from './components/App';
import AsyncLoader from './utils/AsyncLoader';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: false,
            view: null
        }
    }

    componentDidCatch(error, info) {
        this.setState({
            error: true,
            view: (
                <AsyncLoader path="./Error" error={error} info={info} />
            )
        });
    }

    render() {
        return this.state.error ? this.state.view : <App />
    }
}