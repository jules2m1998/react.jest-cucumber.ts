import { FC, PropsWithChildren } from "react";

type Props = {
  onClick: Function;
};

const CustomButton: FC<PropsWithChildren<Props>> = ({ children, onClick }) => {
  return (
    <>
      <button onClick={() => onClick()}>click here</button>
      <span>{children}</span>
    </>
  );
};

export default CustomButton;
