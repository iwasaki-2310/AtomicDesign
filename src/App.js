import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/searchInnput";
import { UserCard } from "./components/organisms/user/userCard";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import "./styles.css";

const user = {
  name: "岩崎",
  image:
    "https://www.livefreely2310.com/my-family/wp-content/uploads/2023/04/ヒロト留年.jpg",
  email: "123456@example.com",
  phone: "111-222-333",
  company: {
    name: "テスト株式会社",
  },
  website: "https://google.com",
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
