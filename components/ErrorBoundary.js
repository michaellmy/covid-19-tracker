import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    forceUpdateHandler(){
        this.setState({hasError: false})
        this.props.reload();
    }

    render() {
        if(this.state.hasError) return (
            <View>
                <Text>Error!</Text>
                <Button title="Refresh" onPress={this.forceUpdateHandler} />
            </View>
        );
        return this.props.children;
    }
}

export default ErrorBoundary
