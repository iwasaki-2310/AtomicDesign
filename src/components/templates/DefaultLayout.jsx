import { Footer } from "../atoms/lauout/footer";
import { Header } from "../atoms/lauout/Header";

export const DefaultLayout = (props) => {
  const { children } = props;
  console.log(children);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
