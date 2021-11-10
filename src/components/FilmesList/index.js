import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import ModalActive from "../Modal";
import { AntDesign } from "@expo/vector-icons";

export default function FilmesList({ data }) {
  const [visibleModal, setVisibleModal] = useState(false);
  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.title}>{data.nome}</Text>
        <Image source={{ uri: data.foto }} style={styles.photo} />

        <View style={styles.areaBotao}>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => setVisibleModal(true)}
          >
            <Text style={styles.botaoTexto}>Saiba Mais</Text>
            <AntDesign name="infocirlceo" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        onBackdropPress={() => setVisibleModal(false)}
        transparent={true}
        animationType="fade"
        visible={visibleModal}
      >
        <ModalActive filme={data} voltar={() => setVisibleModal(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#2B2B2B",
    margin: 20,
    elevation: 5,
    borderRadius: 12,
  },
  title: {
    padding: 15,
    fontSize: 18,
    color: "#e9e9e9",
    fontWeight: "bold",
  },
  photo: {
    height: 250,
    zIndex: 2,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  areaBotao: {
    alignItems: "flex-end",
    marginTop: -55,
    zIndex: 3,
  },
  botao: {
    flexDirection: "row",
    width: 120,
    backgroundColor: "#e52246",
    alignItems: "center",
    padding: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  botaoTexto: { paddingRight: 8, color: "#fff", fontSize: 16 },
});
