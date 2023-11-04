import { Header } from "../atoms/lauout/Header";

export const HeaderOnly = (props) => {
  const { children } = props;
  console.log(children);
  return (
    <>
      <Header />
      {children}
      
    </>
  );
};
