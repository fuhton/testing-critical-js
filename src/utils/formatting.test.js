import { formatUrl } from "./formatting";

const URL = "a.site.url";

describe("utils/formatting", () => {
  describe("formatUrl", () => {
    it("should return the string un-mutated", () => {
      expect(formatUrl(URL)).toEqual(URL);
    });
    it("should remove http:// from string", () => {
      const http = `http://${URL}`;
      expect(formatUrl(http)).toEqual(URL);
    });
    it("should remove https:// from string", () => {
      const https = `https://${URL}`;
      expect(formatUrl(https)).toEqual(URL);
    });
    it("should remove trailing slash from string", () => {
      const trailing = `${URL}/`;
      expect(formatUrl(trailing)).toEqual(URL);
    });
  });
});
