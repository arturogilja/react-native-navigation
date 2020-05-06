import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/Home'
import Login from '../screens/Login'

//El orden importa, ya que se va a mostrar primero el componente que esté hasta arriba en la definición
const screens = {
  Login: {
    screen: Login,
  },
  Home: {
    screen: Home,
  },
}

const HomeStack = createStackNavigator(screens)
export default createAppContainer(HomeStack)
