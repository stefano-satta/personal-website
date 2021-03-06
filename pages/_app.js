import RouterLayout from '../components/common/RouterLayout'
import '../styles/global.css'


function MyApp({ Component, pageProps }) {
  return (
    <RouterLayout>
      <Component {...pageProps} />
    </RouterLayout>
  )
}

export default MyApp
