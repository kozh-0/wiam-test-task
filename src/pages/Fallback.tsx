import React, { Component } from "react";
import { Button, Result, Typography } from "antd";
const { Text, Paragraph } = Typography;

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<{ children: React.ReactNode }, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Result
          status="error"
          title="Something went very wrong!"
          subTitle="Please tell the developer..."
        >
          <Paragraph style={{ textAlign: "center" }}>
            Crash link 👉👉👉{" "}
            <Text copyable strong>
              {document.URL}
            </Text>
            <div style={{ margin: "20px 0 7px 0" }}>
              For further interaction with the site, we suggest...
            </div>
            <Button
              type="primary"
              onClick={() => window.location.reload()}
              style={{ marginRight: "10px" }}
            >
              Reload the page
            </Button>
            <Button type="dashed" href="/">
              Go back to the main page
            </Button>
          </Paragraph>
        </Result>
      );
    }

    return this.props.children;
  }
}
