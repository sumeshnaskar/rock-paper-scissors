import React from "react"
import { Container, Title, Subtitle, Text, Image, ButtonWrapper, Button, SmallText} from "./styles/game"

export function Game({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Game.Title = function GameTitile({ children, ...restProps }){
    return <Title {...restProps}>{children}</Title>
}

Game.Subtitle = function GameSubtitle({ children, ...restProps }){
    return <Subtitle {...restProps}>{children}</Subtitle>
}

Game.Text = function GameText({ children, ...restProps }){
    return <Text {...restProps}>{children}</Text>
}

Game.ButtonWrapper = function GameButtonWrapper({ children, ...restProps }){
    return <ButtonWrapper {...restProps}>{children}</ButtonWrapper>
}

Game.Button = function GameButton({ children, ...restProps }){
    return <Button {...restProps}>{children}</Button>
}

Game.Image = function GameImage({ children, ...restProps }){
    return <Image {...restProps}/>
}

Game.SmallText = function GameSmallText({children, ...restProps }){
    return <SmallText {...restProps}>{children}</SmallText>
}