import {
  ColorPicker,
  Flex,
  Input,
  InputNumber,
  Layout,
  Select,
  Space,
  theme,
  Typography,
} from "antd";

import styles from "../dashboard.module.css";
import useComponentStore from "../../../store/component";

const { Sider } = Layout;
const { Text } = Typography;

const RightSidebar = () => {
  const component = useComponentStore((state) => state.component);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider
      width={350}
      style={{ background: colorBgContainer }}
      className={styles.sidebar}
    >
      <Flex vertical gap={10}>
        <Flex justify="center">
          <Text strong>{component.toLocaleUpperCase()} FEATURES</Text>
        </Flex>

        <Space>
          <Text>Value</Text>
          <Input placeholder="text" style={{ width: 270 }} />
        </Space>

        {component==="image"&&<Space>
          <Text>Alt</Text>
          <Input placeholder="alt" style={{ width: 270 }} />
        </Space>}

        <Flex gap={16}>
          <Space>
            <Text>Width</Text>
            <InputNumber style={{ width: 100 }} />
          </Space>
          <Space>
            <Text>Height</Text>
            <InputNumber style={{ width: 100 }} />
          </Space>
        </Flex>

        {component === "text" && (
          <Flex gap={16}>
            <Space>
              <Text>Size</Text>
              <InputNumber style={{ width: 100 }} />
            </Space>
            <Space>
              <Text>Weight</Text>
              <InputNumber style={{ width: 100 }} />
            </Space>
          </Flex>
        )}

        {component === "container" && (
          <>
            <Flex gap={16}>
              <Space>
                <Text>Direction</Text>
                <Select
                  defaultValue="column"
                  style={{ width: 100 }}
                  options={[
                    { value: "column", label: "Column" },
                    { value: "row", label: "Row" },
                  ]}
                />
              </Space>
              <Space>
                <Text>Gap</Text>
                <InputNumber style={{ width: 100 }} />
              </Space>
            </Flex>
            <Flex gap={16}>
              <Space>
                <Text>Align</Text>
                <Select
                  defaultValue="start"
                  style={{ width: 105 }}
                  options={[
                    { value: "start", label: "Start" },
                    { value: "center", label: "Center" },
                    { value: "end", label: "End" },
                  ]}
                />
              </Space>
              <Space>
                <Text>Justify</Text>
                <Select
                  defaultValue="start"
                  style={{ width: 105 }}
                  options={[
                    { value: "start", label: "Start" },
                    { value: "center", label: "Center" },
                    { value: "end", label: "End" },
                  ]}
                />
              </Space>
            </Flex>{" "}
          </>
        )}

        <Flex gap={16}>
          {(component === "text" || component === "button") && (
            <Space>
              <Text>Color</Text>
              <ColorPicker defaultValue="#1677ff" showText />
            </Space>
          )}
          <Space>
            <Text>BgColor</Text>
            <ColorPicker defaultValue="#1677ff" showText />
          </Space>
        </Flex>

        <Flex gap={16}>
          <Space>
            <Text>Radius</Text>
            <InputNumber style={{ width: 100 }} />
          </Space>
        </Flex>

        <Flex justify="center">
          <Flex vertical align="center" gap={10} className={styles.border}>
            <InputNumber controls={false} className={styles.noInput} />
            <Flex gap={10} align="center">
              <InputNumber controls={false} className={styles.noInput} />
              <Flex vertical align="center" gap={10} className={styles.border}>
                <InputNumber controls={false} className={styles.noInput} />
                <Flex gap={10}>
                  <InputNumber controls={false} className={styles.noInput} />
                  <Flex
                    align="center"
                    justify="center"
                    className={styles.noInput}
                  >
                    <Text>Text</Text>
                  </Flex>
                  <InputNumber controls={false} className={styles.noInput} />
                </Flex>
                <InputNumber controls={false} className={styles.noInput} />
              </Flex>
              <InputNumber controls={false} className={styles.noInput} />
            </Flex>
            <InputNumber controls={false} className={styles.noInput} />
          </Flex>
        </Flex>
      </Flex>

      {/* <ButtonDetail /> */}
    </Sider>
  );
};

export default RightSidebar;
