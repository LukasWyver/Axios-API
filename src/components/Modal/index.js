import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function ModalActive(props) {
  return (
    <View style={styles.container}>
      <View></View>
      <View style={styles.modalContent}>
        <TouchableOpacity style={styles.btnVoltar} onPress={props.voltar}>
          <AntDesign name="arrowleft" size={16} color="#e9e9e9" />
          <Text style={styles.btnVoltarText}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>{props.filme.nome}</Text>
        <Text style={styles.sinopse}>Sinopse:</Text>
        <Text style={styles.descricao}>{props.filme.sinopse}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalBackground: {},
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(23,23,23,.9)",
    elevation: 3,
  },
  modalContent: {
    height: "50%",
    width: "80%",
    backgroundColor: "#F3F4ED",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  btnVoltar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e52246",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    padding: 10,
  },
  btnVoltarText: {
    color: "#e9e9e9",
    fontSize: 16,
    paddingLeft: 8,
  },
  titulo: {
    textAlign: "center",
    color: "#444444",
    padding: 10,
    fontSize: 28,
    fontWeight: "bold",
  },
  sinopse: {
    color: "#787A91",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    marginLeft: 8,
  },
  descricao: {
    color: "#787A91",
    marginLeft: 8,
    marginRight: 8,
  },
});
