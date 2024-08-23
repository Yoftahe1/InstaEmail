import {
  ColorPicker,
  Flex,
  Input,
  InputNumber,
  Select,
  Space,
  Typography,
} from "antd";

import styles from "./dashboard.module.css";

const { Text } = Typography;
const TextDetail = () => {
  return (
    <Flex gap={10} vertical>
      <Space>
        <Text>Value</Text>
        <Input placeholder="text" style={{width:270}}/>
      </Space>
      <Flex gap={16}>
        <Space>
          <Text>Width</Text>
          <InputNumber style={{ width: 100 }}/>
        </Space>
        <Space>
          <Text>Height</Text>
          <InputNumber style={{ width: 100 }}/>
        </Space>
      </Flex>
      <Space>
        <Text>Align</Text>
        <Select
          defaultValue="start"
          style={{ width: 120 }}
          options={[
            { value: "start", label: "Start" },
            { value: "center", label: "Center" },
            { value: "end", label: "End" },
          ]}
        />
      </Space>
      <Flex gap={16}>
        <Space>
          <Text>Text Color</Text>
          <ColorPicker defaultValue="#1677ff" />
        </Space>
        <Space>
          <Text>Background Color</Text>
          <ColorPicker defaultValue="#1677ff" />
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
  );
};

export default TextDetail;
