import { expect, it } from "vitest";

// solution 1 "this is wrong!!?"
// export const addTwoNumbers = (params: { first: number; second: number }) => {
//   return params.first + params.second;
// };

// solution 2
// export const addTwoNumbers = ({
//   first,
//   second,
// }: {
//   first: number;
//   second: number;
// }) => {
//   return first + second;
// };

// solution 3
type addNumsObj = {
  first: number;
  second: number;
};
export const addTwoNumbers = (params: addNumsObj): number => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    })
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    })
  ).toEqual(30);
});
