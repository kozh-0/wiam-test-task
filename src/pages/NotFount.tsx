import { Link } from "react-router-dom";
import { Result, Button } from "antd";

export const NotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Извините, данной страницы не существует"
      extra={
        <Button type="primary">
          <Link to="/">На главную</Link>
        </Button>
      }
    />
  );
};
