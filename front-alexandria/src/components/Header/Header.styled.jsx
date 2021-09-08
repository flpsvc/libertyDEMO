import styled from 'styled-components'

export const Logo = styled.div`
  img {
    width: 180px;
  }
`

export const WrapperHeader = styled.div`
  position: fixed;
  width: 100%;
  z-index: 99;

  .bg-light{
    background: #fff !important;
    box-shadow: 0px 6px 21px rgb(90 90 90 / 9%);
  }

  .navbar{
    @media (max-width: 767px){
      padding: 12px 0px 12px 16px;
    }

    &-brand{
      a { 
        font-size: 22px;
        margin-right: 25px;
        margin-left: 14px;
      }
    }
  
    &-nav{
      .nav-link{
        border-bottom: 0px;
        transition-property: border-bottom;
        // transition-duration: 0.4s;
        // trasition: ease-in;
      
          &:hover{
            color: #ff3366;
          /* border-bottom: 3px solid #ff3366;
          padding-bottom: 4px;
          margin-bottom: -11px; */
        }
      }
    }
  }
`
export const Login = styled.div`
  display: flex;
  color: #ff3366;
  cursor: pointer;
  align-items: center;
  margin: 6px 0 0px 20px;
  padding: 0;

  &:hover{
    color: #bb254b;
    .material-icons{
      color: #bb254b;
    }
  }

  span{
    margin-left: 6px;
  }
`

export const LoginMenu = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  margin: 0px 0 0px -8px;
  padding: 0;

  span{
    margin-left: 6px;
  }
`

export const WrapperLogado = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  margin: 0px 0 0px 20px;
  padding: 0;

  span{
    margin-left: 6px;
  }
`

export const HeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  width: 100%;
  margin: 0px -14px;
  
  @media (max-width: 767px){
    grid-template-columns: 1fr auto;
  }
`