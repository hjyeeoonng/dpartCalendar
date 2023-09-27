import styled from "styled-components";

const Root = styled.div`
width: 390px;
height: 844px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;
overflow-x: hidden;
background: #EFEFEF;
`;

const CalenderBtn = styled.div`
width: 40px;
height: 60px;
margin: 3px;
border-width: 1px;
border-color: #aaa;
`;

const CalenderBtnBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
border-radius: 30px;
background: #FFF;
box-shadow: 3px 3px 4px 0px rgba(0, 0, 0, 0.25);
width: 354px;
height: 606px;
flex-shrink: 0;
`;

const Header =  styled.div`
width: 390px;
height: 101px;
background: #FFF;
`;

export const mainPage = () => {
  function ButtonGenerator({ numberOfButtons }) {
    // 숫자 범위를 생성하고 map을 사용하여 버튼을 생성합니다.
    const buttons = Array.from({ length: numberOfButtons }, (_, index) => (
      <CalenderBtn>{index + 1}</CalenderBtn>
    ));
  
    return <CalenderBtnBox>{buttons}</CalenderBtnBox>;
  }

    let now = new Date();
    let todayDate = now.getDate();
    let todayMonth = now.getMonth()+1;
    let todayYear = now.getFullYear();
    const MonthDay = [31,0,31,30,31,30,31,31,30,31,30,31];
    if(todayYear%4===0 && todayYear%100===0 && todayYear%400===0){
      //윤년으로 둔다.
      MonthDay[1]=29;
    }else if(todayYear%4===0 && todayYear%100===0){
      //평년
      MonthDay[1]=28;
    }else if(todayYear%4===0){
      //윤년
      MonthDay[1]=29;
    }else{
      //평년
      MonthDay[1]=28;
    }
    return (
      <Root>
        <Header>dpart calender</Header>
        <ButtonGenerator numberOfButtons={MonthDay[todayMonth-1]} />
      </Root>
    );
  };
  export default mainPage;