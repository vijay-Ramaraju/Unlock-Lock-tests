// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #161617;
  min-height: 100vh;
  max-height: 100%;
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ImageIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const LockedPara = styled.p`
  color: #fff;
  font-size: 19px;
  font-family:Roboto;
`

export const LockButton = styled.button`
  background-color: #06b6d4;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  border: 0px;
  border-radius: 8px;
  color: #fff;
  margin-top: 30px;
  font-size: 14px;
  font-weight: 500;
  outline: none;
`
