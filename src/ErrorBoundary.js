import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo){
        console.error('Error::: ', error);
        console.error('Error Info::: ', errorInfo)
    }

    render(){
        const { hasError } = this.state;
        const { children } = this.props;
        if(hasError){
            return <h3>Something went wrong!</h3>
        }
        return children
    }
}

export default ErrorBoundary;