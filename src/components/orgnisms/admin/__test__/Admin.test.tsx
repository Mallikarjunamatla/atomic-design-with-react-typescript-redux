import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
// import User from '../../../../model/model'
import {
  PostActionTypes,
  GetUsersStateType,
} from "../../../../action/actionType";
import { cleanup, render, screen } from "@testing-library/react";
import AdminActions from "../AdminActions";
import userEvent from "@testing-library/user-event";
// import fetchMock from 'jest-fetch-mock';

afterEach(cleanup);

const startingState: GetUsersStateType = {
  loading: false,
  users: [{ id: "1", name: "mallik", email: "mallik@12", role: "member" }],
};

function reducer(state = startingState, action: PostActionTypes) {
  switch (action.type) {
    case "SET_LOADING_STATUS":
      return {
        ...state,
        loading: state.loading,
      };
    case "GET_USERS":
      return {
        ...state,
        users: state.users,
      };
    default:
      return state;
  }
}

function renderWithRedux(
  component: JSX.Element,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  { initialState, store = createStore(reducer, startingState) } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
}

const fetching = jest.fn();
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
window.fetch = fetching(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: "1", name: "mallik", email: "@yml" }]),
  })
);

beforeEach(() => {
  fetching.mockClear();
});
describe("<AdminActions />", () => {
  test('Should out put text "Admin UI', () => {
    const { getByTestId } = renderWithRedux(<AdminActions></AdminActions>);
    const linkElement = screen.getByText(/admin Ui/i, { exact: false });
    //screen.debug()
    expect(linkElement).toBeInTheDocument();
  });
});

describe("<AdminActions />", () => {
  test("should fetch all users", async () => {
    const { getByTestId } = renderWithRedux(<AdminActions></AdminActions>);
    userEvent.click(getByTestId("fetch-users"));
    const items = await screen.findAllByRole("listitem");

    expect(items).toHaveLength(2);
  });
});

function thunkMiddleware(
  thunkMiddleware: any
): import("redux").StoreEnhancer<{ dispatch: unknown }, {}> | undefined {
  throw new Error("Function not implemented.");
}
