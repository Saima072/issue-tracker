import React, { FunctionComponent } from "react"; // importing FunctionComponent

type filterProps = {
  title?: string;
  paragraph?: string;
};

export const Filter: FunctionComponent<filterProps> = ({
  title,
  paragraph,
}) => (
  <aside>
    <h2>{title}</h2>
    <p>{paragraph}</p>
  </aside>
);

const el = <Filter title="Welcome!" paragraph="To this example" />;
