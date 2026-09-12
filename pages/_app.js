import '../styles/fonts.css'
import '../styles/theme.css'
import '../styles/home.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <div id="prog"></div>
      <div id="cur"></div>
      <div id="curdot"></div>
      <div className="aurora"></div>
      <div className="noise"></div>
      <Component {...pageProps} />
    </>
  )
}