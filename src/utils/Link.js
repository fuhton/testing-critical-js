import React from "react";

export default ({ className = "default-class-name", children, page }) => (
  <a className={className} href={page}>{children}</a>
);