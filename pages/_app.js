import { HeroSection } from "../components/HeroSection";
import Support from "./support/index.js";
import { StateProvider } from "../context/StateContext";
import reducer, { initialeState } from "../context/StateReducers";
import "../styles/globals.css";
import { gsap, CSSPlugin, CSSRulePlugin } from "gsap/all";
// import { Children } from "react";
gsap.registerPlugin(CSSPlugin, CSSRulePlugin);

export default function App({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialeState} reducer={reducer}>
      <Component {...pageProps} />
    </StateProvider>
  );
}
