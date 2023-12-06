import styled from 'styled-components'

export const BgContainer = styled.div`
  margin-left: 80px;
`

export const SelectCategoryInput = styled.select`
  height: 35px;
  width: 30%;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  margin-top: 40px;
  margin-bottom: 40px;
  outline: none;
`

export const ProjectsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`

export const LoaderContainer = styled.div`
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
`

export const FailureContainer = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
`

export const FailureImage = styled.img`
  margin-bottom: 15px;
  margin: 50px;
  width: 450px;
`

export const FailureHeading = styled.h1`
  color: #475569;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const FailureInfo = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
`

export const FailureRetryButton = styled.button`
  background-color: #328af2;
  color: #ffffff;
  border-radius: 4px;
  outline: none;
  padding: 10px 25px 25px 25px;
`
