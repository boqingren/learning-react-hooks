import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("App ErrorBoundary Error:", error);
    console.log("App ErrorBoundary Info:", info);
  }

  renderErrorUI = () => {
    return <div>Something went wrong.</div>;
  };

  renderMainContent = () => {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) return this.renderErrorUI();
    return children;
  };

  render() {
    return this.renderMainContent();
  }
}
