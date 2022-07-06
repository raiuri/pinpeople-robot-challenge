import { useCallback } from "react";
import { Flex, Text } from '@react-yuki/ui';
import { arrayFromInteger } from "../../utils";
import { TABLE_DIMENSION } from "../../config/constants";

const columns = arrayFromInteger(TABLE_DIMENSION.y);
const rows = arrayFromInteger(TABLE_DIMENSION.x);

export default function Table() {
    // const renderRow = useCallback(
    //     (rowIndex: number) => (
    //         <Flex width={1} key={`row-${rowIndex}`}>
    //             {columns.map((squareIndex: number) => (
    //                 <Square></Square>
    //             ))}
    //         </Flex>
    //     ), [columns]
    // );

    return (
        <div></div>
    );
}