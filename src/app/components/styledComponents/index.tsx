
import { ReactNode } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import { globalStyles } from '../../config/styles'; 
import { Flex } from '@react-yuki/ui';

export const GlobalStyles = createGlobalStyle`${globalStyles}`;

interface Props {
    children: ReactNode;
}

export const Container = ({ children, ...rest }: Props) => {
    <Flex {...rest} width={1} maxWidth='1440px' mx='auto' px={[3, 4, 4, 4]} py={[3, 4, 5, 5]}>
        {children}
    </Flex>
}