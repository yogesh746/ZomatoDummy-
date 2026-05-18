import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
 export const scaledValue = (value) => value * windowWidth /345 ;

 
