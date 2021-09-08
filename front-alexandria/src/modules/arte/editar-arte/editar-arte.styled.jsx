import styled from 'styled-components'

export const Title = styled.h2`
  color: #ff3366;
  text-align: center;
  padding:  40px 0 50px 0; 
`

export const TitleImages = styled.p`
  color: #ff3366;
  font-size: 27px;
`

export const SubTitleImages = styled.p`
  font-size: 17px;
  margin-bottom: 40px;
`
export const Hr = styled.hr`
  margin: 50px 0 70px 0; 
`

export const Card = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 20px 20px;
  margin: 15px 0;
  box-shadow: 0px 0px 4px 1px #efefef;
`
export const TitleCard = styled.p`
  color: #ff3366;
  font-weight: 600;
  font-size: 19px;
  margin: 10px 0  15px 0;
`

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: center;

  button{
    display: flex;
    align-items: center;
    margin: 25px 10px 70px 10px;
  }
`

export const Cadastrar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 30px 0 60px 0;

  button{
    padding: 8px 58px;
    font-size: 20px;
    font-weight: 600;
    box-shadow: 0px 0px 4px 1px #efefef;
  }
`

export const WrapperImg = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  width: 100%;
  height: 180px;
  overflow: hidden;
  justify-content: center;
  display: flex;

  img{
    width: 145%;
  }
`