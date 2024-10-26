import { useNavigate } from "react-router-dom";
import { FireOutlined } from "@ant-design/icons";
import { Button, Flex, Layout, Typography, theme } from "antd";

import Logo from "../../components/logo";
import Image from "../../assets/insta1.png";
import ThemeButton from "../../components/theme-button";

import styles from "./landing.module.css";

const { Text } = Typography;

const Landing = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, colorBorder },
  } = theme.useToken();

  function handleNavigation() {
    navigate("/dashboard");
  }

  return (
    <Layout className={styles.landing}>
      <Flex
        justify="space-between"
        style={{
          background: colorBgContainer,
          borderColor: colorBorder,
        }}
        className={styles.header}
      >
        <Logo />
        <Flex gap={10}>
          <ThemeButton />
          <Button type="primary" onClick={handleNavigation}>
            Create Template
          </Button>
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
          appealing emails.
        </Text>
        <Button type="primary" size="large" onClick={handleNavigation}>
          Create Template
        </Button>
        <div className={styles.imgContainer}>
          <img src={Image} className={styles.img} />
          <div className={styles.gradient} />
        </div>
      </Flex>
    </Layout>
  );
};

export default Landing;
