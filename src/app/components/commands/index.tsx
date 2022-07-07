import { FunctionComponent } from 'react';
import { CommandProps } from './types';
import { Flex } from '@react-yuki/ui';
import CommandInput from './CommandInput';
import CommandList from './CommandList';

const Command: FunctionComponent<CommandProps> = ({ commands, handleCommand, reset, clearErrorMessage }) => {
    return (
        <Flex flex="none" width={[1, 1, 1 / 2, 1 / 2]} pr={[0, 0, 5, 5]} flexDirection="column">
            <CommandInput
                handleCommand={handleCommand}
                clearErrorMessage={clearErrorMessage}
                reset={reset}
            />
            <CommandList commands={commands} />
        </Flex>
    );
};

export default Command;