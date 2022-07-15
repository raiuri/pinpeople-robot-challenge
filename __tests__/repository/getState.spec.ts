import axios from 'axios';
import { getState } from '../../src/repository/getState';
import { ROBOT_STATE } from '../../src/constants';

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const result = getState();

describe("getState", () => {
    describe("when API call is successful", () => {

        it("should return robotState", () => {

            mockedAxios.get.mockImplementationOnce(() => Promise.resolve(ROBOT_STATE));

            expect(result).resolves.toEqual(ROBOT_STATE);
        });
    });

    describe("when API call fails", () => {
        it("should return throw error", () => {

            mockedAxios.get.mockImplementationOnce(() => Promise.reject(new Error('Network error')));

            expect(result).rejects.toThrow(new Error('Network error'));
        });
    });
});