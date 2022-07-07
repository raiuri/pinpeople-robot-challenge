import { memo, useState, ChangeEvent, useCallback } from 'react';
import { Flex, Button, Box } from '@react-yuki/ui';
import { CommandInputProps } from './types';

const CommandInput = memo<CommandInputProps>(({ handleCommand, reset, clearErrorMessage }) => {
    const [command, updateCommand] = useState('');

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        updateCommand(e.target.value.toUpperCase());
    }, []);

    const handleSubmit = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        if (command.length === 0) return;

        clearErrorMessage();

        handleCommand(command);

        updateCommand('');
    },
    [command, clearErrorMessage, handleCommand]);

    return (
        <Flex width={1} flexDirection="column" flex="none">
            <Box as="form" onSubmit={handleSubmit} width={1}>
                <Flex flexDirection="column">
                    <input 
                        value={command}
                        onChange={onChange}
                        placeholder="Diga ao robô o que fazer ..."
                        height="50px"
                    />
                    <Flex mt={4}>
                        <Button
                            m={0}
                            border={0}
                            bg="orange"
                            color="white"
                            flex="none"
                            type="submit"
                            role="button"
                            height="50px"
                            width="48%"
                            mr="2%"
                        >
                            Play
                        </Button>
                        <Button
                            m={0}
                            border={0}
                            bg="blue"
                            color="white"
                            flex="none"
                            ml="2%"
                            role="button"
                            height="50px"
                            width="48%"
                            onClick={reset}
                        >
                            Reset
                        </Button>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    );
});

export default CommandInput;