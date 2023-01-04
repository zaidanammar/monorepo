import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import { listHeading, listText } from "../../constants/typography";

export default {
  title: "Typography",
  parameters: {
    options: {
      showPanel: false,
    },
  },
};

export const Heading = () => {
  return (
    <div className="p-3">
      <section className="grid grid-cols-1 gap-4">
        {listHeading.map((text) => (
          <div key={text.title} className="mb-3">
            <p className={text.className}>{text.title}</p>

            <div className="mt-2">
              <p className="text-s-regular mb-2">Usage:</p>
              <SyntaxHighlighter
                language="javascript"
                wrapLongLines
                customStyle={{ fontSize: "11px" }}
              >
                {`<p className='${text.className}'>${text.title}</p>`}
              </SyntaxHighlighter>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export const Text = () => {
  return (
    <div className="p-3">
      <section className="grid grid-cols-1 gap-4">
        {listText.map((text) => (
          <div key={text.title} className="mb-3">
            <p className={text.className}>{text.title}</p>

            <div className="mt-2">
              <p className="text-s-regular mb-2">Usage:</p>
              <SyntaxHighlighter
                language="javascript"
                wrapLongLines
                customStyle={{ fontSize: "11px" }}
              >
                {`<p className='${text.className}'>${text.title}</p>`}
              </SyntaxHighlighter>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
