import {RootStackParamList} from './app.stack.routes';

declare global {
   namespace ReactNavigation {
     interface RootParamList extends RootStackParamList {}
   }
}