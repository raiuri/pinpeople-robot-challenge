import React, { ReactNode, FunctionComponent, ReactElement } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import { globalStyles } from '../../config/styles';
import { Flex, FlexProps } from '@react-yuki/ui';
import { getSquareSize } from '../../utils';
import { animated } from 'react-spring';

export const GlobalStyles = createGlobalStyle`${globalStyles}`;

interface Props {
    children: ReactNode;
}

export const heightByWidth = (percentage = 100) => css`
    &:before {
        display: block;
        padding-top: ${percentage}%;
        content: '';
    }
`;

export const Container: FunctionComponent<any> = ({ children, ...rest }: Props) => {
    return (
        <Flex {...rest} width={1} maxWidth='1440px' mx='auto' px={[3, 4, 4, 4]} py={[3, 4, 5, 5]}>
            {children}
        </Flex>
    );
}

export const Square = styled(Flex)`
    width: ${getSquareSize()};

    ${heightByWidth()};
`;

export const CommandBlock = styled(Flex)<FlexProps>`
    ${heightByWidth(70)}
`;

export const RobotContainer = styled(animated.div)`
    position: absolute;
    display: flex;
    width: ${getSquareSize()};
    align-items: center;
    justify-content: center;

    ${heightByWidth()}
`;