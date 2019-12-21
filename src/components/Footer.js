import React from "react";

import "../styles.css";

export default function Footer() {
  return (
    <div className="Foo">
      <p>Copyright © {new Date().getFullYear()}</p>
    </div>
  );
}
