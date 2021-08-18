import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.isUser ? 'flex-end' : 'flex-start'};
`;

export const MessageAvatar = styled.img`
    width: 35px;
    height: 35px;   
    border-radius: 100%;   
    margin-right: 15px;
    box-shadow: rgb(0 0 0 / 25%) 0px 12px 24px 0px;
`;

export const Message = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    max-width: 170px;
    background: ${props => !props.isUser ? props.theme.primaryColor : props.theme.secondaryColor};
    border-radius: 20px;
    border-top-left-radius: ${props => props.isUser ? '20px' : '0px'};
    border-top-right-radius: ${props => props.isUser ? '0px' : '20px'};
    margin-bottom: 10px;
    color: ${props => props.theme.textColor};
    box-shadow: rgb(0 0 0 / 25%) 0px 12px 24px 0px;
`;

export const OptionsContainer = styled.div`    
    display: flex;
    flex-wrap: wrap;
    margin-left: 50px;
    margin-bottom: 10px;
`;

export const Option = styled.div`    
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.primaryColor};
    border-radius: 20px;
    padding: 10px;
    margin-right: 10px;
    color: ${props => props.theme.textColor};
    cursor: pointer;
    margin-top: 10px;
    transition: 0.2s all ease-in-out;
    :hover {
        background: ${props => props.theme.secondaryColor};
    }
`;

export const ShowMessage = styled.div`    
    display: flex;   
`;

export const CustomComponentContainer = styled.div`    
    margin-bottom: 10px;   
`;

export const CustomLoadingContainer = styled.div`    
    margin-left: ${props => props.marginLeft}px; 
`;

const dotPulseBefore = (props) => keyframes`
    0% {
        box-shadow: 9984px 0 0 -5px ${props.theme.secondaryColor};
    }
    30% {
        box-shadow: 9984px 0 0 2px ${props.theme.secondaryColor};
    }
    60%,
    100% {
        box-shadow: 9984px 0 0 -5px ${props.theme.secondaryColor};
    }
`;

const dotPulse = (props) => keyframes`
    0% {
        box-shadow: 9999px 0 0 -5px ${props.theme.secondaryColor};
    }
    30% {
        box-shadow: 9999px 0 0 2px ${props.theme.secondaryColor};
    }
    60%,
    100% {
        box-shadow: 9999px 0 0 -5px ${props.theme.secondaryColor};
    }
`;

const dotPulseAfter = (props) => keyframes`
    0% {
        box-shadow: 10014px 0 0 -5px ${props.theme.secondaryColor};
    }
    30% {
        box-shadow: 10014px 0 0 2px ${props.theme.secondaryColor};
    }
    60%,
    100% {
        box-shadow: 10014px 0 0 -5px ${props.theme.secondaryColor};
    }
`;

export const Loading = styled.div`
    position: relative;
    left: -9999px;
    margin-left: ${props => props.marginLeft}px;
    width: 5px;
    height: 5px;
    border-radius: 5px;       
    animation: ${dotPulse} 1.5s infinite linear;
    animation-delay: .25s;
    ::before, ::after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0;
        width: 5px;
        height: 5px;
        border-radius: 5px;      
    };
    ::before {
        animation: ${dotPulseBefore} 1.5s infinite linear;
        animation-delay: 0s;
    };
    ::after {
        animation: ${dotPulseAfter} 1.5s infinite linear;
        animation-delay: .5s;
    }
`;