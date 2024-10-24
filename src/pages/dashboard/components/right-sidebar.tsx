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
import useTemplateStore from "../../../store/template";

const { Sider } = Layout;
const { Text } = Typography;

const RightSidebar = () => {
  const component = useTemplateStore((state) => state.component);
  const {
    token: { colorBgContainer, colorBorder },
  } = theme.useToken();

  return (
    <Sider
      width={350}
      style={{
        background: colorBgContainer,
        borderLeft: "1px solid #fff",
        borderColor: colorBorder,
      }}
      className={styles.sidebar}
    >
      <Flex vertical gap={10}>
        <Flex justify="center">
          <Text strong>{component?.type.toLocaleUpperCase()} FEATURES</Text>
        </Flex>

        {component?.type !== "container" && (
          <Space direction="vertical">
            <Text>Value</Text>
            <Input
              placeholder="value"
              style={{ width: 316 }}
              value={component?.content && component.content.toString()}
              onChange={(event) => {
                useTemplateStore
                  .getState()
                  .changeValue(
                    "content",
                    event.target.value ? event.target.value : undefined
                  );
              }}
            />
          </Space>
        )}

        {component?.type === "image" && (
          <Space direction="vertical">
            <Text>Alt</Text>
            <Input
              placeholder="alt"
              style={{ width: 316 }}
              value={component?.alt && component.alt}
              onChange={(event) => {
                useTemplateStore
                  .getState()
                  .changeValue(
                    "alt",
                    event.target.value ? event.target.value : undefined
                  );
              }}
            />
          </Space>
        )}

        <Flex gap={16}>
          <Space direction="vertical">
            <Text>Width</Text>
            <InputNumber
              style={{ width: 150 }}
              value={component?.width && component.width}
              placeholder="width"
              onChange={(value) => {
                useTemplateStore
                  .getState()
                  .changeValue("width", value ? value : undefined);
              }}
            />
          </Space>
          <Space direction="vertical">
            <Text>Height</Text>
            <InputNumber
              style={{ width: 150 }}
              value={component?.height && component.height}
              placeholder="height"
              onChange={(value) => {
                useTemplateStore
                  .getState()
                  .changeValue("height", value ? value : undefined);
              }}
            />
          </Space>
        </Flex>

        {component?.type === "text" && (
          <Flex gap={16}>
            <Space direction="vertical">
              <Text>Size</Text>
              <InputNumber
                style={{ width: 150 }}
                defaultValue={15}
                value={component?.fontSize && component.fontSize}
                placeholder="size"
                onChange={(value) => {
                  useTemplateStore
                    .getState()
                    .changeValue("fontSize", value ? value : undefined);
                }}
              />
            </Space>
            <Space direction="vertical">
              <Text>Weight</Text>
              <Select
                defaultValue="normal"
                value={component?.fontWeight && component.fontWeight}
                style={{ width: 150 }}
                options={[
                  { value: "lighter", label: "Lighter" },
                  { value: "normal", label: "Normal" },
                  { value: "bold", label: "Bold" },
                  { value: "bolder", label: "Bolder" },
                ]}
                placeholder="weight"
                onChange={(
                  value: "bold" | "lighter" | "bolder" | "normal" | undefined
                ) =>
                  useTemplateStore
                    .getState()
                    .changeValue("fontWeight", value ? value : undefined)
                }
              />
            </Space>
          </Flex>
        )}

        {component?.type === "container" && (
          <>
            <Flex gap={16}>
              <Space direction="vertical">
                <Text>Direction</Text>
                <Select
                  defaultValue="column"
                  value={component?.direction && component.direction}
                  style={{ width: 150 }}
                  options={[
                    { value: "column", label: "Column" },
                    { value: "row", label: "Row" },
                  ]}
                  onChange={(value: "column" | "row" | undefined) =>
                    useTemplateStore
                      .getState()
                      .changeValue("direction", value ? value : undefined)
                  }
                />
              </Space>
              <Space direction="vertical">
                <Text>Gap</Text>
                <InputNumber
                  style={{ width: 150 }}
                  defaultValue={0}
                  value={component?.gap && component.gap}
                  placeholder="size"
                  onChange={(value) => {
                    useTemplateStore
                      .getState()
                      .changeValue("gap", value ? value : undefined);
                  }}
                />
              </Space>
            </Flex>
            <Flex gap={16}>
              <Space direction="vertical">
                <Text>Align</Text>
                <Select
                  value={component?.align && component.align}
                  defaultValue="flex-start"
                  style={{ width: 150 }}
                  options={[
                    { value: "flex-start", label: "Start" },
                    { value: "center", label: "Center" },
                    { value: "flex-end", label: "End" },
                    { value: "stretch", label: "Stretch" },
                  ]}
                  onChange={(
                    value:
                      | "flex-start"
                      | "center"
                      | "flex-end"
                      | "stretch"
                      | undefined
                  ) =>
                    useTemplateStore
                      .getState()
                      .changeValue("align", value ? value : undefined)
                  }
                />
              </Space>
              <Space direction="vertical">
                <Text>Justify</Text>
                <Select
                  value={component?.justify && component.justify}
                  defaultValue="flex-start"
                  style={{ width: 150 }}
                  options={[
                    { value: "flex-start", label: "Start" },
                    { value: "center", label: "Center" },
                    { value: "flex-end", label: "End" },
                    { value: "space-between", label: "Space Between" },
                    { value: "space-around", label: "Space Around" },
                    { value: "space-evenly", label: "Space Evenly" },
                  ]}
                  onChange={(
                    value:
                      | "flex-start"
                      | "center"
                      | "flex-end"
                      | "space-between"
                      | "space-around"
                      | "space-evenly"
                      | undefined
                  ) =>
                    useTemplateStore
                      .getState()
                      .changeValue("justify", value ? value : undefined)
                  }
                />
              </Space>
            </Flex>
          </>
        )}

        <Flex gap={16}>
          {(component?.type === "text" || component?.type === "button") && (
            <Space direction="vertical">
              <Text>Color</Text>
              <ColorPicker
                style={{ width: 150 }}
                defaultValue="#00000000"
                showText
                value={component?.color && `#${component?.color}`}
                onChange={(value) => {
                  useTemplateStore
                    .getState()
                    .changeValue("color", value.toHex());
                }}
              />
            </Space>
          )}
          <Space direction="vertical">
            <Text>BgColor</Text>
            <ColorPicker
              style={{ width: 150 }}
              defaultValue="#00000000"
              showText
              value={component?.bgColor && `#${component?.bgColor}`}
              onChange={(value) => {
                useTemplateStore
                  .getState()
                  .changeValue("bgColor", value.toHex());
              }}
            />
          </Space>
        </Flex>

        <Flex gap={16}>
          <Space direction="vertical">
            <Text>Radius</Text>
            <InputNumber
              style={{ width: 150 }}
              placeholder="radius"
              value={component?.radius && component.radius}
              onChange={(value) => {
                useTemplateStore
                  .getState()
                  .changeValue("radius", value ? value : undefined);
              }}
            />
          </Space>
        </Flex>

        <Flex justify="center">
          <Flex
            vertical
            align="center"
            gap={10}
            style={{
              borderColor: colorBorder,
            }}
            className={styles.border}
          >
            <InputNumber
              controls={false}
              className={styles.noInput}
              value={component?.mt && component.mt}
              placeholder="mt"
              onChange={(value) => {
                useTemplateStore
                  .getState()
                  .changeValue("mt", value ? value : undefined);
              }}
            />
            <Flex gap={10} align="center">
              <InputNumber
                controls={false}
                className={styles.noInput}
                value={component?.ml && component.ml}
                placeholder="ml"
                onChange={(value) => {
                  useTemplateStore
                    .getState()
                    .changeValue("ml", value ? value : undefined);
                }}
              />
              <Flex
                vertical
                align="center"
                gap={10}
                style={{
                  borderColor: colorBorder,
                }}
                className={styles.border}
              >
                <InputNumber
                  controls={false}
                  className={styles.noInput}
                  value={component?.pt && component.pt}
                  placeholder="pt"
                  onChange={(value) => {
                    useTemplateStore
                      .getState()
                      .changeValue("pt", value ? value : undefined);
                  }}
                />
                <Flex gap={10}>
                  <InputNumber
                    controls={false}
                    className={styles.noInput}
                    value={component?.pl && component.pl}
                    placeholder="pl"
                    onChange={(value) => {
                      useTemplateStore
                        .getState()
                        .changeValue("pl", value ? value : undefined);
                    }}
                  />
                  <Flex
                    align="center"
                    justify="center"
                    className={styles.noInput}
                  >
                    <Text>X</Text>
                  </Flex>
                  <InputNumber
                    controls={false}
                    className={styles.noInput}
                    value={component?.pr && component.pr}
                    placeholder="pr"
                    onChange={(value) => {
                      useTemplateStore
                        .getState()
                        .changeValue("pr", value ? value : undefined);
                    }}
                  />
                </Flex>
                <InputNumber
                  controls={false}
                  className={styles.noInput}
                  value={component?.pb && component.pb}
                  placeholder="pb"
                  onChange={(value) => {
                    useTemplateStore
                      .getState()
                      .changeValue("pb", value ? value : undefined);
                  }}
                />
              </Flex>
              <InputNumber
                controls={false}
                className={styles.noInput}
                value={component?.mr && component.mr}
                placeholder="mr"
                onChange={(value) => {
                  useTemplateStore
                    .getState()
                    .changeValue("mr", value ? value : undefined);
                }}
              />
            </Flex>
            <InputNumber
              controls={false}
              className={styles.noInput}
              value={component?.mb && component.mb}
              placeholder="mb"
              onChange={(value) => {
                useTemplateStore
                  .getState()
                  .changeValue("mb", value ? value : undefined);
              }}
            />
          </Flex>
        </Flex>
      </Flex>
    </Sider>
  );
};

export default RightSidebar;
