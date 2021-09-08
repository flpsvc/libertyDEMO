import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 45px;
`
export const DeleteButton = styled.div`
  display: flex;
  justify-content: flex-end;

  span{
    display: flex;
    cursor: pointer;
    align-items: center;
    width: 100%;
    background: #ad2323;
    color: #fff;
    font-weight: 600;
    transition: ease 0.7s;
    margin-top: 8px;
    padding: 3px 19px;
    width: fit-content;
    border-radius: 80px;
    margin-bottom: 23px;
  }

  .btn-create{
    background: #ffffff;
    color: #252525;
    border: 1px solid #c4c4c4;
    margin-right: 8px;
  }

  .material-icons{
    margin-right: 5px;
  }
`

export const BoxImg = styled.div`
  background: #fff;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  overflow: hidden;
  justify-content: center;
  display: flex;

  img {
    width: 250px;
  }
`

export const Titulo = styled.h2`
  margin: 0 0 20px 0;
  color: #33403f;

  .material-icons{
    border-radius: 50%;
    background: #e24f37;
    padding: 6px;
    margin-right: 18px;
  }

  @media (max-width: 550px){
    font-size: 28px;
    margin-top: 40px;
  }
`

export const WrapperHeader = styled.span`
  display: flex;
  font-weight: 700;
  margin-top: 7px;
  span {
    color: #33403f;
  }
`
export const BoxHeader = styled.div`
  margin-left: 14px;
  font-weight: 200;
`
export const Descricao = styled.div`
  margin: 50px 0 20px 0;
`
export const MarkDecoretor = styled.div`
  width: 97%;
  height: 1px;
  background: #e24f37;
  margin-top: 39px;
`

export const BannerEnd = styled.div`
  background: #e24f37;
  margin-top: 90px;
  padding: 100px 0;
  color: #fff;
  text-align: center;

  button{
    margin-top: 45px;
    font-size: 23px;
    padding: 6px 50px;
    box-shadow: 0px 15px 51px rgb(90 90 90 / 25%);
    font-weight: 600;

    &:hover{
      box-shadow: 0px 15px 51px rgb(90 90 90 / 25%);
      padding: 6px 57px;
    }
  }
`
export const BannerEndTitle = styled.div`
  font-size: 32px;
`

export const ListImages = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;

  @media (max-width: 767px){
    grid-template-columns: 50% 50%;
  }

  @media (max-width: 500px){
    grid-template-columns: 100%;
  }
`

export const List = styled.h4`
  margin-top: 40px;
`

export const LisImages = styled.div`
  padding-right: 24px;
  margin-top: 29px;

  &:last-child{
    padding-right: 0px;
  }

  @media (max-width: 500px){
    padding-right: 0px;
  }
`

export const LisImagesItem = styled.div`
  background: #fff;
  color: #33403f;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 1px #efefef;
`

export const ImgWrapper = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  justify-content: center;
  display: flex;
  border-radius: 10px 10px 0 0;

  img{
    width: 145%;
  }
`

export const ItemText = styled.div`
  width: 100%;
  min-height: 160px;
  overflow: hidden;
  padding: 8px 18px 8px 18px;
`