import { Button, Flex, notification, theme } from "antd";

import Body from "./components/body";
import Logo from "../../components/logo";
import LeftSidebar from "./components/left-sidebar";
import useTemplateStore from "../../store/template";
import RightSidebar from "./components/right-sidebar";
import ThemeButton from "../../components/theme-button";
import generateHTML from "../../functions/generateHTML";

import styles from "./dashboard.module.css";

const Dashboard = () => {
  const component = useTemplateStore((state) => state.component);
  const template = useTemplateStore((state) => state.template);

  const [api, contextHolder] = notification.useNotification();

  const {
    token: { colorBgContainer, colorBorder, colorBgLayout },
  } = theme.useToken();

  function showNotification() {
    if (template) {
      navigator.clipboard.writeText(generateHTML(template));
      api["success"]({
        message: "Success",
        description: "Email template copied successfully",
        placement: "bottomRight",
      });
    } else {
      api["error"]({
        message: "Error",
        description: "Something went wrong while coping email template",
        placement: "bottomRight",
      });
    }
  }
  return (
    <>
      {contextHolder}
      <Flex vertical className={styles.dashboard}>
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
            <Button type="primary" onClick={showNotification}>
              Copy Template
            </Button>
          </Flex>
        </Flex>
        <Flex flex={1}>
          <LeftSidebar />
          <div style={{ background: colorBgLayout }} className={styles.body}>
            <Body />
          </div>
          {component && <RightSidebar />}
        </Flex>
      </Flex>
    </>
  );
};

export default Dashboard;
