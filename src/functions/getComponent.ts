import JSONNode from "../types/generator";

const getComponent = (template: JSONNode[], path: string): JSONNode | null => {
  const keys = path.split("/").map(Number);
  let current: JSONNode | JSONNode[] = template;

  try {
    for (const key of keys) {
      if (Array.isArray(current)) {
        current = current[key]; // Navigate deeper into the structure
        if (current === undefined) {
          return null; // Return null if the path is invalid
        }
      } else if (typeof current === "object" && Array.isArray(current.content)) {
        // Check if current.content is an array of JSONNode and then go deeper
        current = current.content[key];
        if (current === undefined) {
          return null; // Return null if the path is invalid
        }
      } else {
        return null; // Return null if path does not resolve to a valid array or object
      }
    }

    // Check if current is a container and set its content to an empty string
    if (!Array.isArray(current) && current.type === "container") {
      return { ...current, content: "" }; // Set content to an empty string if it's a container
    }

    return current as JSONNode; // Return the final JSONNode found at the path
  } catch (error) {
    console.error("Invalid path:", error);
    return null;
  }
};

export default getComponent;
