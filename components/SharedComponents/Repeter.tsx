export const Repeter: React.FC<{ numOfRepetition: number; children: any; horizontal?: boolean }> = ({ numOfRepetition, children, horizontal }) => {
  const child = children;
  return (
    <span style={{ width: "100%", display: "flex" }}>
      {new Array(numOfRepetition).fill(0).map((v, index) => {
        return <Element children={children} />;
      })}
    </span>
  );
};

const Element: React.FC<{ children: any }> = ({ children }) => {
  return <div>{children}</div>;
};
