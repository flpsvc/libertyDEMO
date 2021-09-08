import styled from 'styled-components'

export const Banner = styled.div`
  background: url('${process.env.PUBLIC_URL}/assets/images/bg-home2.jpg');
  min-height: 500px;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
`
export const SearchTitle = styled.div`
  text-align: left;
  color: #fff;
  margin: -20px 0 15px 0;

  span{
    color: #ff3366;
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
border-radius: 0px 0px 8px 8px;
border: 1px solid #2f2f2f;
border-top: none;
max-height: 276px;
overflow: auto;
box-shadow: 0px 0px 10px 1px #b7b2b226;
`

export const SearchItem = styled.div`
  background: rgb(41 41 41 / 75%);
  padding: 9px;
  color: #fff;
  cursor: pointer;
  border-bottom: 1px solid #353535;
  display: grid;
  grid-template-columns: auto 1fr auto;
  text-align: left;
  transition: ease 0.4s;
  text-overflow: ellipsis;

  &:last-child{
    border: none;
  }

  &:hover{    
    border-left-width: 3px;
    background: rgb(39 39 39 / 75%);
    padding: 9px 22px 9px 22px;
  }
`

export const WrapperSearchImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  overflow: hidden;
  justify-content: center;
  display: flex;
  margin-right: 18px;
  border: 2px solid #9e9e9e;
  border-color: ${ props => (
    props.categoria == "arquitetura" && "#37e29b"
  )};
  border-color: ${ props => (
    props.categoria == "livro" && "#e24f37"
  )};
  border-color: ${ props => (
    props.categoria == "arte" && "#117a8b"
  )};

  img{
    width: 100px;
  }
`
export const WrapperCategoria = styled.div`
  display: flex;
  align-items: center;
  color: ${ props => (
    props.categoria == "arquitetura" && "#37e29b"
  )};
  color: ${ props => (
    props.categoria == "livro" && "#e24f37"
  )};
  color: ${ props => (
    props.categoria == "arte" && "#117a8b"
  )};

  span {
    margin-right: 9px;
  }
`

export const WrapperCategoriaNovidade = styled.div`
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

export const BannerEnd = styled.div`
  background: #ff3366;
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

export const Categoria = styled.div`
  padding: 50px 0 150px 0;

  .margin-categoria{
    @media (max-width: 767px){
      margin-bottom: 15px;
    }
  }
`

export const CategoriaBox = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  padding: 18px 20px 0 20px;
  transition: ease 0.7s;

  &:hover{
    padding: 35px 20px 0 20px;
    margin-top: -10px;
  }
`

export const CategoriaTitle = styled.h4`
  margin: 43px 0 73px 0;
  text-align: center;
  font-size: 30px;
`
export const CategoriaDescription = styled.p`
  min-height: 140px;
  margin-top: 8px;
  transition: ease 0.7s;

  &:hover{
    min-height: 150px;
  }
`

export const Novidade = styled.div`
  padding: 150px 0 50px 0;

  .margin-novidade{
    @media (max-width: 767px){
      margin-bottom: 15px;
    }
  }
`

export const NovidadeTitle = styled.h4`
  margin-bottom: 20px;
`

export const Card = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 20px 20px;
  cursor: pointer;
  min-height: 320px;

  &:hover{
    color: #2a2d33;
  }
`
export const ImgNovidade = styled.div`
  background: #fff;
  width: 100%;
  height: 170px;
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
export const BoxNovidadeInfo = styled.div`
  min-height: 155px;
`

export const BoxNovidadeTitle = styled.div`
  font-weight: 800;
`
