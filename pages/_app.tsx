import "../styles/globals.css";
import type { AppProps } from "next/app";
import { TodoContext, TodoContextProvider } from "../hooks/useTodos";

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <TodoContextProvider>
      <Component {...pageProps} />
    </TodoContextProvider>
  );
}

export default MyApp;
