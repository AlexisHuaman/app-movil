import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native"; // Asegúrate de importar Image

import logo from "./assets/logo.jpg"; // Importar la imagen

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={logo} style={styles.logo} />
      <Text>Dame plata</Text>

      <TouchableOpacity
        onPress={() => alert("-100 soles")}
        style={{
          width: 120,
          height: 20,
          backgroundColor: "red",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Regalar dinero</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100, // Especifica el ancho de la imagen
    height: 100, // Especifica la altura de la imagen
    marginBottom: 20, // Agrega un espacio debajo de la imagen
  },
});
