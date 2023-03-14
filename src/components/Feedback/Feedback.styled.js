import styled from "@emotion/styled"

export const Wrapper = styled.section`
margin: 20px;
width: 275px;
`

export const Title = styled.h2`
margin-bottom: 10px;
`

export const List = styled.ul`
  display: flex;
  justify-content: center;
`

export const Item = styled.li`
:not(:last-child) {
  margin-right: 10px;
}
margin-bottom: 10px;


`

export const FeedbackBtn = styled.button`
background-color: transparent;
border: 2px solid blue;
border-radius: 4px;
width: 70px;
color: blue;
:hover {
  background-color: blue;
  color: white;
  border: 2px solid black;
}
`

export const StatTitle = styled.h3`
display: flex;
justify-content: center;
font-size: 22px;
margin-bottom: 10px;
`

export const StatList = styled.ul`

`

export const StatItem = styled.li`
:not(:last-child) {
  margin-bottom: 6px;
}
`

export const Text = styled.p`
`