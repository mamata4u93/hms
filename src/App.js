import Routers from './navigation/Router'
import ThemeProvider from './ThemeProvider'
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import { store } from '../src/store';
import { Provider } from 'react-redux';
import { saveState } from "../src/utility/browser-storage";
import { debounce } from "debounce";
import { MantineProvider, Text } from '@mantine/core';

store.subscribe(
  debounce(() => {
    saveState('redux', store.getState());
  }, 800)
);

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Provider store={store}>
        <ThemeProvider>
          <I18nextProvider i18n={i18n}>
            <Routers />
          </I18nextProvider>
        </ThemeProvider>
      </Provider>
    </MantineProvider>
  );
}
export default App;