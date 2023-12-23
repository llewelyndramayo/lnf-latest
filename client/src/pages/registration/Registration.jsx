import * as React from "react";
import { useNavigate } from "react-router-dom";
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
import { registerUser, resetStatus } from "@/store/reducer/user";

const { Title, Link } = Typography;

function Registration() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();
  const { fetching, status } = useSelector((state) => state.user);

  React.useEffect(() => {
    if (status) {
      api.success({
        message: "New user created!",
        description: (
          <div>
            Yay! Try <Link href="/login">log-in</Link> to the page.
          </div>
        ),
        onClose: () => {
          dispatch(resetStatus());
        },
      });
      form.resetFields();
    }
  }, [status, api, dispatch, form]);

  const user = localStorage.getItem("user");
  const isLogged = localStorage.getItem("isLogged");

  React.useEffect(() => {
    if (user && isLogged) {
      navigate("/profile");
    }
  }, [user, isLogged, navigate]);

  const handleSubmitRegistrationForm = (data) => {
    dispatch(registerUser(data));
  };

  return (
    <div  style={{
      backgroundColor: "#f0f2f5",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      {contextHolder}
        <Card
        style={{
          width: 500,
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ padding: "20px" }}>
          <Title
            level={2}
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            Register
          </Title>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmitRegistrationForm}
              autoComplete="off"
            >
              <Form.Item
                label="Complete Name"
                name="full_name"
                rules={[{ required: true, message: "Please input your Complete Name" }]}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>

              <Form.Item
                label="Contact Number"
                name="contact_info"
                rules={[
                  {
                    required: true,
                    message: "Please input your Contact Number",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    pattern: /^[A-Za-z0-9._%+-]+@usc\.edu\.ph$/,
                    message: "The email should be affiliated to usc.edu.ph",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password",
                  },
                ]}
              >
                <Input size="large" type="password" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  loading={fetching}
                  style={{ marginTop: "20px" }}
                >
                  Create Account
                </Button>
              </Form.Item>
            </Form>
            <Row justify="center">
              <Col>
                <Link href="/">I already have an account</Link>
              </Col>
            </Row>
            </div>
          </Card>
    </div>
  );
}

export { Registration as default };
