// screens/GameSetupScreen.tsx

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { categories } from "../data/categories";
import { Team, Category } from "../models/types";
import ColorPicker from "react-native-wheel-color-picker"; // puedes reemplazarlo si lo prefieres

const defaultPlayer = (n: number) => ({
  number: n,
  name: "",
  isGoalkeeper: false,
  goals: 0,
  yellow: false,
  twoMinutes: 0,
  red: false,
  blue: false
});

const defaultStaff = () => ({
  name: "",
  role: "",
  yellow: false,
  twoMinutes: 0,
  red: false
});

export default function GameSetupScreen({ navigation }: any) {
  const [teamA, setTeamA] = useState<Team>({
    name: "",
    shirtColor: "#ff0000",
    shortsColor: "#000000",
    isSelection: false,
    players: Array.from({ length: 16 }, (_, i) => defaultPlayer(i + 1)),
    staff: Array.from({ length: 5 }, () => defaultStaff())
  });

  const [teamB, setTeamB] = useState<Team>({
    name: "",
    shirtColor: "#0000ff",
    shortsColor: "#000000",
    isSelection: false,
    players: Array.from({ length: 16 }, (_, i) => defaultPlayer(i + 1)),
    staff: Array.from({ length: 5 }, () => defaultStaff())
  });

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [phase, setPhase] = useState<string>("");

  const handleStartMatch = () => {
    if (teamA.name && teamB.name && selectedCategory && phase) {
      navigation.navigate("MatchScreen", {
        teamA,
        teamB,
        category: selectedCategory,
        phase
      });
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Configuración del Partido</Text>

      {/* TEAM A */}
      <Text style={styles.teamLabel}>Equipo A</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre del equipo A"
        value={teamA.name}
        onChangeText={(text) => setTeamA({ ...teamA, name: text })}
      />
      <Text style={styles.label}>¿Es selección?</Text>
      <Button
        title={teamA.isSelection ? "Sí" : "No"}
        onPress={() =>
          setTeamA({ ...teamA, isSelection: !teamA.isSelection })
        }
      />

      <Text style={styles.label}>Color Camiseta</Text>
      <ColorPicker
        color={teamA.shirtColor}
        onColorChangeComplete={(color) =>
          setTeamA({ ...teamA, shirtColor: color })
        }
        style={{ height: 100 }}
      />

      <Text style={styles.label}>Color Pantalón</Text>
      <ColorPicker
        color={teamA.shortsColor}
        onColorChangeComplete={(color) =>
          setTeamA({ ...teamA, shortsColor: color })
        }
        style={{ height: 100 }}
      />

      {/* Repeat for TEAM B */}
      <Text style={styles.teamLabel}>Equipo B</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre del equipo B"
        value={teamB.name}
        onChangeText={(text) => setTeamB({ ...teamB, name: text })}
      />
      <Text style={styles.label}>¿Es selección?</Text>
      <Button
        title={teamB.isSelection ? "Sí" : "No"}
        onPress={() =>
          setTeamB({ ...teamB, isSelection: !teamB.isSelection })
        }
      />

      <Text style={styles.label}>Color Camiseta</Text>
      <ColorPicker
        color={teamB.shirtColor}
        onColorChangeComplete={(color) =>
          setTeamB({ ...teamB, shirtColor: color })
        }
        style={{ height: 100 }}
      />

      <Text style={styles.label}>Color Pantalón</Text>
      <ColorPicker
        color={teamB.shortsColor}
        onColorChangeComplete={(color) =>
          setTeamB({ ...teamB, shortsColor: color })
        }
        style={{ height: 100 }}
      />

      {/* CATEGORY SELECT */}
      <Text style={styles.label}>Categoría</Text>
      {categories.map((cat) => (
        <TouchableOpacity
          key={cat.name}
          onPress={() => {
            setSelectedCategory(cat);
            setPhase(""); // reset
          }}
          style={[
            styles.categoryButton,
            selectedCategory?.name === cat.name && styles.categorySelected
          ]}
        >
          <Text>{cat.name}</Text>
        </TouchableOpacity>
      ))}

      {/* PHASE SELECT */}
      {selectedCategory && (
        <>
          <Text style={styles.label}>Fase del torneo</Text>
          {selectedCategory.phases.map((p) => (
            <TouchableOpacity
              key={p}
              onPress={() => setPhase(p)}
              style={[
                styles.phaseButton,
                phase === p && styles.phaseSelected
              ]}
            >
              <Text>{p}</Text>
            </TouchableOpacity>
          ))}
        </>
      )}

      <Button title="Comenzar Partido" onPress={handleStartMatch} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginVertical: 5,
    borderRadius: 5
  },
  label: { marginTop: 10, fontWeight: "bold" },
  teamLabel: { fontSize: 18, marginTop: 20 },
  categoryButton: {
    backgroundColor: "#eee",
    padding: 10,
    marginVertical: 4,
    borderRadius: 5
  },
  categorySelected: { backgroundColor: "#c3f" },
  phaseButton: {
    backgroundColor: "#f2f2f2",
    padding: 8,
    borderRadius: 5,
    marginVertical: 2
  },
  phaseSelected: {
    backgroundColor: "#add8e6"
  }
});
