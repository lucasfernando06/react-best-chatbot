import styled from 'styled-components';
import { ChatDotsFill } from '@styled-icons/bootstrap';

export const ChatClick = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: ${props => props.theme.primaryColor};    
    border-radius: 100%;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 25%) 0px 12px 24px 0px;
`;

export const ChatIcon = styled(ChatDotsFill)`
  cursor: pointer;
  height: 20px;
  color: ${props => props.theme.textColor};    
`;