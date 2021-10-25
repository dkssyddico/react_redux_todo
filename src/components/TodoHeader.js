import React from 'react';
import { connect } from 'react-redux';
import { FaSun } from 'react-icons/fa';
import { BsMoonStarsFill } from 'react-icons/bs';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const BtnContainer = styled.div`
  /* align-self: flex-end; */
`;

const Button = styled.div`
  width: 60px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.toggleBtnBgColor};
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6px;
  cursor: pointer;
  display: flex;
  position: relative;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #fff;
  transition: transform 0.5s, background-color 0.5s;
  will-change: transform;
  transform: translateX(
    calc(
      ${({ theme }) => {
        return theme.translate.toggleBtn;
      }}
    )
  );
`;

const SunIcon = styled.div`
  width: 16px;
  height: 16px;
  color: yellow;
`;
const MoonIcon = styled.div`
  width: 16px;
  height: 16px;
  color: yellow;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: ${({ theme }) => theme.colors.titleColor};
  margin-bottom: 15px;
  h1 {
    margin: 0;
  }
  div {
    font-size: 32px;
  }
`;

const DateContainer = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.textColor};
  p {
    margin: 0;
  }
`;

const Day = styled.span`
  color: ${({ theme }) => theme.colors.lightTextColor};
`;

function TodoHeader({ todos, toggleTheme }) {
  const incompleteTodos = todos.filter((todo) => todo.complete === false);
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const day = today.toLocaleDateString('ko-KR', {
    weekday: 'long',
  });

  return (
    <Header>
      <Container>
        <DateContainer>
          <p>
            {dateString} <Day>{day}</Day>
          </p>
        </DateContainer>
        <BtnContainer>
          <Button onClick={toggleTheme}>
            <ButtonWrapper></ButtonWrapper>
            <SunIcon>
              <FaSun />
            </SunIcon>
            <MoonIcon>
              <BsMoonStarsFill />
            </MoonIcon>
          </Button>
        </BtnContainer>
      </Container>
      <TitleContainer>
        <h1>오늘 뭐하지?</h1>
        <div>{incompleteTodos.length}</div>
      </TitleContainer>
    </Header>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { todos: state };
};

export default connect(mapStateToProps, null)(TodoHeader);
