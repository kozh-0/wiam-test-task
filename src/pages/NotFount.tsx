import { Link } from "react-router-dom";
import { Result, Button } from "antd";

export const NotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, this page does not exist."
      extra={
        <Button type="primary">
          <Link to="/">Back to the main page</Link>
        </Button>
      }
    />
  );
};
