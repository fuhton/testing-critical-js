import React from "react";
import Link from "./Link";
import renderer from "react-test-renderer";

describe("utils/Link", () => {
  describe("Link", () => {
    it("should render with default props", () => {
      const link = renderer
        .create(<Link page="a.new.url">A New Url</Link>)
        .toJSON();
      expect(link).toMatchSnapshot();
    });
    it("should render with passed class name", () => {
      const link = renderer
        .create(
          <Link className="test" page="a.new.url">
            A New Url
          </Link>
        )
        .toJSON();
      expect(link).toMatchSnapshot();
    });
  });
});
