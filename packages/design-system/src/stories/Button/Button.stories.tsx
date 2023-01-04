import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import { Button } from "../../core/Button";
import { listButton } from "../../constants/button";

export default {
  title: "Button",
  component: Button,
};

export const Default = () => {
  return (
    <section className="grid grid-cols-2 gap-8 p-3">
      {listButton.map((item) => (
        <div>
          <p className="text-l-semibold mb-3">{item.title}</p>
          <Button
            variant={item.variant}
            size={item.size}
            disabled={item.disabled}
            fullWidth={item.fullWidth}
          >
            {item.title}
          </Button>
          <div className="mt-3">
            <p className="text-s-regular mb-2">Usage:</p>
            <SyntaxHighlighter
              language="typescript"
              wrapLongLines
              customStyle={{ fontSize: "11px" }}
            >
              {`<Button${item.variant ? ` variant="${item.variant}"` : ""}${
                item.size ? ` size="${item.size}"` : ""
              }${item.disabled ? " disabled" : ""}${
                item.fullWidth ? " fullWidth" : ""
              }>\n Button\n</Button>`}
            </SyntaxHighlighter>
          </div>
        </div>
      ))}
    </section>
  );
};
