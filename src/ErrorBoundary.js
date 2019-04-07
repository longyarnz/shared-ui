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
                <AsyncLoader path="./components/Error" error={error} info={info} />
            )
        });

        const reset = () => this.setState({ error: false });

        setTimeout(reset, 2000);
    }

    render() {
        return this.state.error ? this.state.view : <App />
    }
}