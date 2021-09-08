import styled from 'styled-components'

export const Banner = styled.div`
  background: url('${process.env.PUBLIC_URL}/assets/images/bg-home2.jpg');
  min-height: 300px;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

export const Wrapper = styled.div`
  h4{
    margin: 30px 0 0 0;
  }
`

export const Title = styled.h5`
  margin-bottom: 60px;
  color: #fff;

  span{
    color: #ff3366;
  }
`

export const Msg = styled.div`
  padding: 148px 0;
  text-align: center;
`

export const WrapperProduto = styled.div`
  margin-top: 30px;
`

export const MyProdutos = styled.div`
  padding: 30px 0 50px 0;
`

export const Card = styled.div`
  background: #fff;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 0px 10px 1px #b7b2b226;

  .padding-card{
    padding: 20px 20px;
    min-height: 350px;
  }

  &:hover{
    color: #2a2d33;
  }

  span{
    display: flex;
    align-items: center;
  }

  hr{
    background: #fff;
    margin: 19px 0px 12px 0px;
  }
`
export const ImgMyProdutos = styled.div`
  background: #fff;
  width: 100%;
  height: 130px;
  overflow: hidden;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  
  img{
    position: relative;
    width: 111%;
    height: 142%;
    top: -21%;
    transition: ease 0.7s;

    &:hover{ 
      width: 114%;
      height: 145%;
      top: -22%;
      filter: grayscale(50%);
      color: #2a2d33;
    }
  }
`
export const BoxMyProdutosInfo = styled.div`
  &:hover{
    color: #2a2d33;
  }
`

export const BoxMyProdutosTitle = styled.div`
  font-weight: 800;
`
export const WrapperCategoria = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 2px 11px;
  border-radius: 22px;
  color: #fff;
  margin-top: 9px;

  background: ${ props => (
    props.categoria == "arquitetura" && "#37e29b"
  )};
  background: ${ props => (
    props.categoria == "livro" && "#e24f37"
  )};
  background: ${ props => (
    props.categoria == "arte" && "#117a8b"
  )};
  

  span {
    margin-right: 9px;
  }
`
export const WrapperButtons = styled.div`
  padding: 0 20px 20px 20px;
`

export const EditarButton = styled.div`
  /*width: 123%; */
  /* margin: 0px -19px -20px -19px; */
  /* background: #f7f7f7; */
  /* margin-top: 5px; */
  /* border-radius: 26px; */
  /* padding: 3px 0; */
  /* border: 1px solid #ececec; */
  display: flex;
  align-items: center;
  width: 100%;
  transition: ease 0.7s;
  margin-top: 15px;

  .material-icons{
    margin-right: 5px;
  }

  &:hover{
    padding: 0 8px;
  }
`

export const DeleteButton = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: #ad2323;
  font-weight: 600;
  transition: ease 0.7s;
  margin-top: 8px;

  .material-icons{
    margin-right: 5px;
  }

  &:hover{
    padding: 0 8px;
  }
`