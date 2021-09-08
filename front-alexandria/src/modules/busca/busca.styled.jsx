import styled from 'styled-components'

export const WrapperInput = styled.div`
  padding-top: 35px;
`

export const CleanSearch = styled.div`
  margin-top: 41px;
  cursor: pointer;
  background: #3a3a3a;
  color: #fff;
  border-radius: 20px;
  padding: 1px 14px;
  width: fit-content;
  transition: ease 0.7s;
  display: flex;

  .material-icons{
    padding: 2px 0 0 6px;
  }

  &:hover{
    background: #ff3366;
    padding: 1px 19px;
  }
`

export const ButtonSearch = styled.div`
  button{
    border-radius: 0px 4px 4px 0px;
    border-left: 1px solid #fff;

    &:hover, &:focus{
      padding: 6px 15px;
    }
  }
`
export const WrapperSearch = styled.div`
  margin: 40px 0 70px 0;
`
export const SearchItem = styled.div`
  background: #fff;
  padding: 20px;
  margin-top: 12px;
  border-radius: 6px;
  box-shadow: 0 2px 4px 1px #efefef;
  cursor: pointer;
  display: grid;
  grid-template-columns: auto 1fr;
  text-align: left;
  border-bottom: 0px solid;
  transition: ease 0.1s;
  text-overflow: ellipsis;

  .box-info-img{
    width: 200px;
    padding-right: 27px;

    @media (max-width: 767px){
      padding: 0 0 25px 0;
      width: 100%;
      border-bottom: 1px solid #c6c6c6;
    }

    &-local{ 
      margin-top: 10px;
      display: flex;
      align-items: center;
    }
  }


  border-color: ${ props => (
    props.categoria == "arquitetura" && "#37e29b"
  )};
  border-color: ${ props => (
    props.categoria == "livro" && "#e24f37"
  )};
  border-color: ${ props => (
    props.categoria == "arte" && "#117a8b"
  )};

  &:hover{
    border-bottom-width: 5px;
  }

  @media (max-width: 767px){
    grid-template-columns: auto;
  }
  
  /* &:hover{
    padding: 16px 26px 16px 26px;
  } */
`

export const WrapperSearchImg = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 6px;
  overflow: hidden;
  justify-content: center;
  display: flex;
  margin-right: 18px;

  @media (max-width: 767px){
    width: 100%;
    height: 260px;
  }

  @media (max-width: 500px){
    height: 160px;
  }

  img{
    width: 137%;
  }
`
export const WrapperAutor = styled.div`
  margin-top: 19px;
`

export const WrapperDescricao = styled.div`
  max-height: 219px;
  overflow: hidden;
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