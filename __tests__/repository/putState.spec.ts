import axios from 'axios';
import { getState } from '../../src/repository/getState';
import { ROBOT_STATE } from '../../src/constants';

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const state = getState();

describe("getState", () => {
    describe("when API call is successful", () => {

        it("should return robotState", () => {

            mockedAxios.put.mockImplementationOnce(() => Promise.resolve(ROBOT_STATE));

            expect(state).resolves.toEqual(ROBOT_STATE);
        });
    });

    describe("when API call fails", () => {
        it("should return throw error", () => {

            mockedAxios.put.mockImplementationOnce(() => Promise.reject(new Error('Network error')));

            expect(state).rejects.toThrow('Network error')
        });
    });
});