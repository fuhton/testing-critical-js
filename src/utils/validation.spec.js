import { uniqueId } from "lodash";
import { verifyPayload } from "./validation";

const VALID_DATA = {
  id: parseInt(uniqueId(), 10),
  name: "name",
  description: "this is a description",
  relation: "parent",
  is_enabled: true,
  metadata: {
    post: "post",
    author: "user"
  },
  payload_key: 10
};

describe("utils/validation", () => {
  describe("verifyPayload", () => {
    it("should return true when all data is valid", () => {
      expect(verifyPayload(VALID_DATA)).toEqual(true);
    });
    it("should return false when payload_key is less than 10", () => {
      const payload = { ...VALID_DATA, payload_key: 9 };
      expect(verifyPayload(payload)).toEqual(false);
    });
    it("should throw an error payload_key is a string", () => {
      const payload = { ...VALID_DATA, payload_key: "I am a string" };
      expect(() => verifyPayload(payload)).toThrow();
    });
  });
});
