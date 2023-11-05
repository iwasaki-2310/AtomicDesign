import styled from "styled-components";
import { SearchInput } from "../molecules/searchInnput";
import { UserCard } from "../organisms/user/userCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `岩崎-${val}`,
    image:
      "https://www.livefreely2310.com/my-family/wp-content/uploads/2023/04/ヒロト留年.jpg",
    email: "123456@example.com",
    phone: "111-222-333",
    company: {
      name: "テスト株式会社",
    },
    website: "https://google.com",
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  text-align: center;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
