import "./App.css";
import AdminActions from "./components/orgnisms/admin/AdminActions";

type Props = {
  message: string;
};

const App = (props: Props): JSX.Element => (
  <AdminActions {...props}></AdminActions>
);

export default App;
