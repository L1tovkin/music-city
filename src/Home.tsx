import styled from "styled-components";

const Home = () => {
  return (
    <>
    <Wrapper>
      <Row>
      
      </Row>
    </Wrapper>
    <PlayerWrapper>
    </PlayerWrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const PlayerWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default Home
