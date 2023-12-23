import * as React from "react";
import {
  Card,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Button,
  notification,
} from "antd";
import { useDispatch, useSelector } from "react-redux";

import { loginUser, resetStatus } from "@/store/reducer/user";
import { useNavigate } from "react-router-dom";

const { Title, Link } = Typography;

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { fetching, error } = useSelector((state) => state.user);

  const user = localStorage.getItem("user");
  const isLogged = localStorage.getItem("isLogged");

  const [api, contextHolder] = notification.useNotification();

  React.useEffect(() => {
    if (error) {
      notification.error({
        message: error,
        description: "Make sure you input the correct username/password.",
        onClose: () => {
          dispatch(resetStatus());
        },
      });
    }
  }, [error]);

  React.useEffect(() => {
    if (user && isLogged) {
      navigate("/profile");
    }
  }, [user, isLogged, navigate]);

  const handleSubmitLoginForm = React.useCallback(
    (data) => {
      dispatch(loginUser(data));
    },
    [dispatch]
  );

  return (
    <div
      style={{
        backgroundColor: "#f0f2f5",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          width: 400,
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ padding: "20px" }}>
          <Title
            level={2}
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            Login
          </Title>
          <Form layout="vertical" onFinish={handleSubmitLoginForm}>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password size="large" />
            </Form.Item>
            <Col>
              <Button
                type="primary"
                block
                size="large"
                style={{ borderRadius: "4px" }}
                htmlType="submit"
                loading={fetching}
                style={{ backgroundColor: "#f2c94c", borderColor: "#f2c94c" }}
              >
                Login
              </Button>
            </Col>
            <Row justify="space-between" style={{ marginTop: "24px" }}>
              <Col style={{ fontSize: "14px" }}>Not registered?</Col>
              <Col>
                <Link href="/registration" style={{ color: "#1890ff" }}>
                  Register here
                </Link>
              </Col>
            </Row>
          </Form>
        </div>
      </Card>
    </div>
  );
}

export { Login as default };
