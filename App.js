import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  ActivityIndicator,
} from "react-native";

/* importando minha api */
import api from "./src/services/api";

/* importando meu componente Lista de Filmes */
import FilmesList from "./src/components/FilmesList";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("r-api/?api=filmes");
      setFilmes(response.data);
      setLoading(false);
    }
    loadFilmes();
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color="#e52246" size={80} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#171717" />
        <FlatList
          data={filmes}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <FilmesList data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171717",
  },
  title: {
    marginTop: 8,
    marginBottom: 8,
    textAlign: "center",
    fontSize: 28,
    color: "#e9e9e9",
  },
  loading: {
    flex: 1,
    backgroundColor: "#171717",
    alignItems: "center",
    justifyContent: "center",
  },
});
