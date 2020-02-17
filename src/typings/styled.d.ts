// import original module declarations
import 'styled-components'
import { ITheme } from "../theme/ITheme";

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {
  }
}
