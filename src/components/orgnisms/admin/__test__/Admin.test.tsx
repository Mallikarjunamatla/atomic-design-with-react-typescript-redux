import {
  render as rtlRender,
  RenderResult,
  screen,
} from "@testing-library/react";
import { createStore, applyMiddleware, Store } from "redux";
import rootReducer from "../../../../reducers/index";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import AdminActions from "../AdminActions";
import { ReactNode } from "react";
import { AppState } from "../../../../store";
import fetchMock from "jest-fetch-mock/types";
import userEvent from "@testing-library/user-event";

export interface RenderResultStore extends RenderResult {
  store: Store;
}

export interface RenderWithReduxType {
  (
    component: ReactNode,
    props?: {
      initialState: AppState;
      store?: Store;
    }
  ): RenderResultStore;
}

const render = (component: JSX.Element, initialState = {}, options = {}) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  const Providers = ({ children }: any) => (
    <Provider store={store}>{children}</Provider>
  );

  return rtlRender(component, { wrapper: Providers, ...options });
};

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve([{}]),
//   })
// );

// beforeEach(() => {
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-call
//   fetch.mockClear();
// });

// window.fetch = fetchMock
// fetchMock.mockResolvedValueOnce(
// // eslint-disable-next-line @typescript-eslint/require-await
// {json :  () => [{}],}
// )
it("should render admin panel correctly", () => {
  render(<AdminActions></AdminActions>);

  expect(screen.getByText(/admin ui/i)).toBeInTheDocument();
});

it("should render admin panel correctly", async () => {
  const mockSuccessResponse = [
    { id: "1", name: "mallik", email: "@yml", role: "" },
  ];
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });
  const globalRef: any = global;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  globalRef.fetch = jest.fn().mockImplementationOnce(() => mockFetchPromise);

  const { getByTestId } = render(<AdminActions></AdminActions>);
  const ele = getByTestId("fetch-users");
  userEvent.click(ele);

  expect(await screen.findByRole("listitem")).toBeInTheDocument();
});

// it("should render admin panel correctly", () => {
//  const { getByTestId } = render(<AdminActions></AdminActions>)

// expect(screen.getByT(/admin ui/i)).toBeInTheDocument();
// });
