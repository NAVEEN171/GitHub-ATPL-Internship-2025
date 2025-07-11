type StringNumber = string | number;

function formatValue(value: StringNumber): string {
  if (typeof value === "number") {
    return (value * value).toString().trim();
  } else if (typeof value === "string") {
    return value.toUpperCase();
  }
  return "";
}
formatValue(5);
formatValue("How are you? ");
