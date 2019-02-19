import React from 'react';
import styled from 'styled-components';
import { Star, Users, Code } from 'styled-icons/feather';

import { flexContainer } from '../utils/';

const Article = styled.article`
  ${flexContainer('column', 'space-around', 'center')}
  width: 80%;
  background: #424242;
  border: 0px;
  border-radius: 0.2rem;
  box-sizing: border-box;
  padding: 1rem;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`;

const Avatar = styled.div`
  height: 150px;
`;

const Img = styled.img`
  height: 100%;
`;

const Description = styled.div`
  ${flexContainer('column', 'space-around', 'flex-start')}
  width: 90%;
  text-align: left;
`;

const Header = styled.h3`
  margin-bottom: 0.5rem;
`;
const Bio = styled.p`
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const Location = styled.span`
  margin-bottom: 0.5rem;
`;

const Hireable = styled.span`
  color: #39b54a;
  margin-bottom: 0.5rem;
`;

const Numbers = styled.div`
  ${flexContainer('column', 'space-around', 'flex-start')}
  margin-bottom: 0.5rem;
`;

const StarIcon = styled(Star)`
  height: 1rem;
  color: #39b54a;
`;
const UsersIcon = styled(Users)`
  height: 1rem;
  color: #39b54a;
`;
const ReposIcon = styled(Code)`
  height: 1rem;
  color: #39b54a;
`;

const Buttons = styled.div`
  width: 50%;
`;

const Button = styled.button`
  width: 100%;
  background: #39b54a;
  border: 0.2rem solid #c5c5c5;
  border-color: #39b54a;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.01rem;
  height: 3rem;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`;

const User = ({ user }) => {
  return (
    <Article>
      <Avatar>
        <Img src={user.avatar_url} alt={user.login + ' avatar'} />
      </Avatar>

      <Description>
        <Header>
          {user.name}
          <br />
          {user.login}
        </Header>

        {user.bio && <Bio>{user.bio}</Bio>}

        {user.location && <Location>Location: {user.location}</Location>}

        {user.hireable && <Hireable>Availble for job offers</Hireable>}

        <Numbers>
          <span>
            <StarIcon />
            {` ${user.following} Following`}
          </span>
          <span>
            <UsersIcon />
            {` ${user.followers} Followers`}
          </span>
          <span>
            <ReposIcon />
            {` ${user.public_repos} Repos`}
          </span>
        </Numbers>
      </Description>

      <Buttons>
        <a href={user.html_url}>
          <Button>More Info</Button>
        </a>
      </Buttons>
    </Article>
  );
};

export default User;
