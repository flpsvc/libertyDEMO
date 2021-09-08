import styled from 'styled-components'

export const Titulo = styled.h2`
  text-align: center;
  color: #ff3366;
  margin-bottom: 31px;
`

export const WhapperLogin = styled.div`
  height: 598px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardLogin = styled.div`
  background: #fff;
  padding: 40px 40px;
  border-radius: 15px;
  width: 420px;
  box-shadow: 0px 15px 51px rgb(90 90 90 / 9%);

  @media (max-width: 450px){
    width: 90%;
  }
`
export const Info = styled.div`
  cursor: pointer;

  span{
    color: #ff3366;
    font-weight: 500;
  }
`

export const WhapperBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

    button{
      padding: 7px 65px;

      &:hover{
        padding: 7px 75px;
      }
    }
  
`