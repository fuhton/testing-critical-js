import { isBoolean, isEmpty, isNumber, isString } from "lodash";

export const verifyPayload = ({
  id,
  name,
  description,
  relation,
  is_enabled,
  metadata,
  payload_key
}) => {
  if (isString(payload_key)) {
    throw Error("payload_key cannot be a string");
  }
  return (
    !isEmpty(
      [name, description, relation, metadata.post, metadata.author].filter(
        isString
      )
    ) &&
    isBoolean(is_enabled) &&
    isNumber(id) &&
    payload_key > 9
  );
};
