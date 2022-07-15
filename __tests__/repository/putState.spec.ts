import axios from 'axios';
import { getState } from '../../src/repository/getState';
import { ROBOT_STATE } from '../../src/constants';

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;


describe("getState", () => {

    describe("when API call is successful", () => {

        it("should return robotState", () => {

            mockedAxios.put.mockImplementationOnce(() => Promise.resolve(ROBOT_STATE));

            expect(getState()).resolves.toEqual(ROBOT_STATE);
        });
    });

    describe("when API call fails", () => {

        it("should return throw error", () => {

            mockedAxios.put.mockImplementationOnce(async () => Promise.reject(new Error('Network error')));

            expect(getState()).rejects.toThrow(new Error('Network error'))
        });
    });
});