type StringNumber = string | number;

function formatValue<T>(value: T): StringNumber {
  if (typeof value === "number") {
    return value * value;
  } else if (typeof value === "string") {
    return value;
  }
  return "";
}
formatValue(5);
formatValue("How are you? ");
