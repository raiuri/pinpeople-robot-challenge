export type Direction = 'NORTH' | 'SOUTH' | 'WEST' | 'EAST';

export interface CoordinateObject {
    x: number
    y: number
}

export interface TableDimension extends CoordinateObject {}
export type Orientation = Record<Direction | string, CoordinateObject>
export type RotateDeg = Record<Direction | string, number>
export type Coordinate = CoordinateObject | null
export interface Facing extends CoordinateObject {}
export type Commands = string[];