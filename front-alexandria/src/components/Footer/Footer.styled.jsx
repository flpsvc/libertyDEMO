import styled from 'styled-components'

export const WrapperFooter = styled.div`
  width: 100%;
`

export const TopFooter = styled.div`
  padding: 5px;
  height: 200px;
  width: 100%;
`
export const EndFooter = styled.div`
  min-height: 31px;
  padding-top: 14px;
  padding-bottom: 14px;

  a {
      transition: ease 0.5s;

      &:hover{
        color: #ff3366;
          // &:before{
          //     content: " { ";
          //     color:  #d6d6d6;
          // }
          // &:after{
          //     content: " } ";
          //     color:  #d6d6d6;
          // }
      }
  }
`