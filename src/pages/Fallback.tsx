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
          title="Что-то пошло совсем не так!"
          subTitle="Пожалуйста передайте разработчику..."
        >
          <Paragraph style={{ textAlign: "center" }}>
            Ссылка на страницу с поломкой 👉👉👉{" "}
            <Text copyable strong>
              {document.URL}
            </Text>
            <div style={{ margin: "20px 0 7px 0" }}>
              Для дальнейшего взаимодействия с сайтом предлагаем...
            </div>
            <Button
              type="primary"
              onClick={() => window.location.reload()}
              style={{ marginRight: "10px" }}
            >
              Перезагрузить страницу
            </Button>
            <Button type="dashed" href="/">
              Вернуться на главную
            </Button>
          </Paragraph>
        </Result>
      );
    }

    return this.props.children;
  }
}
