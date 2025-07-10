import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/globalStyles";
import RosterManagement from "./pages/RosterManagement/RosterManagement";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RosterManagement />
    </ThemeProvider>
  );
}

export default App;
