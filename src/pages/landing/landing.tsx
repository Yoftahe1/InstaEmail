import { SunOutlined, FireOutlined } from "@ant-design/icons";
import { Button, Flex, Layout, Tag, Typography, theme } from "antd";

import logo from "../../assets/logo.svg";

import styles from "./landing.module.css";

const { Title, Text } = Typography;

const Landing = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className={styles.landing}>
      <Flex
        justify="space-between"
        style={{ background: colorBgContainer }}
        className={styles.header}
      >
        <img src={logo} style={{ width: 110, height: "auto" }} alt="logo" />
        <Flex gap={10}>
          <Button icon={<SunOutlined />} />
          <Button type="primary">Create Template</Button>
        </Flex>
      </Flex>
      <Flex
        align="center"
        justify="center"
        gap={20}
        vertical
        className={styles.body}
      >
        <Flex gap={10} className={styles.tag}>
          <FireOutlined />
          <Text className={styles.tagText}>No 1 mail template</Text>
        </Flex>
        <Text className={styles.title}>
          InstaMail helps you
          <br /> to create mail template fast.
        </Text>
        <Text className={styles.desc}>
          Design and customize professional email templates effortlessly with
          our intuitive platform. Whether for marketing campaigns, newsletters,
          or personal use, our tool allows you to build responsive and visually
          appealing emails. Choose from a variety of layouts, personalize your
          content, and ensure compatibility across all devices. Elevate your
          email communication with ease, no design skills required!
        </Text>
        <Button type="primary" size="large">
          Create Template
        </Button>
      </Flex>
    </Layout>
  );
};

export default Landing;
