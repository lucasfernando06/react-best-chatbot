import styled from 'styled-components';
import { Send } from '@styled-icons/material-sharp';
import { Close } from '@styled-icons/material';
import { Refresh } from '@styled-icons/boxicons-regular';
import { EmojiSmile } from '@styled-icons/bootstrap';

export const Chat = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    box-shadow: rgb(0 0 0 / 25%) 0px 12px 24px 0px;
    border-radius: 15px;
    transition: 0.5s all ease-in-out;
    width: ${props => props.width}px;

    @media (max-width: 350px) {
        width: 280px;
    }  
`;

export const ChatHeader = styled.div`
    padding: 20px;
    width: 100%; 
    background: ${props => props.theme.primaryColor};
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ChatBody = styled.div`
    border-top: 1px solid rgb(238, 238, 238);
    padding: 20px;
    width: 100%;
    flex-grow: 1;
    background: ${props => props.theme.background};
    background-position: center;
    background-size: cover;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 6px;
    }    
    ::-webkit-scrollbar-track {
        margin: 5px;
    }            
    ::-webkit-scrollbar-thumb {
        background: #999999; 
        border-radius: 5px;      
    }         
    ::-webkit-scrollbar-thumb:hover {
        background: #d0d0d0; 
    }
`;

export const ChatFooter = styled.div`
    padding: 20px;
    width: 100%;
    height: 70px;
    background: ${props => props.error ? '#F05F41' : '#fff'};
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ChatText = styled.div`
    color: ${props => props.theme.textColor};
    font-weight: bold;
    font-size: 20px;
`;

export const ChatHeaderBox = styled.div`
    display: flex;
    align-items: center;
    text-align: left;
`;

export const IconsBox = styled.div`
    min-width: 50px;
`;

export const ErrorMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: #fff;
`;

export const EndMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: #757575;
`;

export const ChatInput = styled.input`
    width: 100%;
    flex-grow: 1; 
    background: #fff;
    border: none;
    font-size: 16px;
    &:focus {
        outline: none;
        box-shadow: none;
    }
`;

export const CloseIcon = styled(Close)`
    color: ${props => props.theme.textColor};
    height: 15px;
    cursor: pointer;
    :hover {
        color: ${props => props.theme.secondaryColor};
    }
`;

export const SendIcon = styled(Send)`
    cursor: ${props => !props.disabled ? 'pointer' : 'inherit'};
    height: 25px;
    margin-left: 20px;
    color: ${props => props.disabled ? 'gray' : props.theme.secondaryColor};
`;

export const EmojiIcon = styled(EmojiSmile)`
    cursor: ${props => !props.disabled ? 'pointer' : 'inherit'};
    height: 30px;
    margin-left: 20px;
    color: ${props => props.active ? props.theme.secondaryColor : props.disabled ? 'gray' : 'orange'};
`;

export const RefreshIcon = styled(Refresh)`
    cursor: pointer;
    height: 20px;
    color: ${props => props.theme.textColor};
    margin-right: 10px;
    :hover {
        color: ${props => props.theme.secondaryColor};
    }
`;