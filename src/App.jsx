import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import theme from "./styles/theme";
import GlobalStyles from "./styles/globalStyles";
import store from "./redux/store/store";
import RosterManagement from "./pages/RosterManagement/RosterManagement";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RosterManagement />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
