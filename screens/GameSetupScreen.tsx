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
import ColorPicker from "react-native-wheel-color-picker";

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

      {/* JUGADORES EQUIPO A */}
      <Text style={styles.subHeading}>Jugadores Equipo A</Text>
      {teamA.players.map((player, index) => (
        <View key={index} style={styles.playerRow}>
          <Text style={styles.playerNumber}>{player.number}</Text>
          <TextInput
            style={styles.playerInput}
            placeholder="Nombre"
            value={player.name}
            onChangeText={(text) => {
              const updatedPlayers = [...teamA.players];
              updatedPlayers[index].name = text;
              setTeamA({ ...teamA, players: updatedPlayers });
            }}
          />
          <TouchableOpacity
            style={[
              styles.goalkeeperButton,
              player.isGoalkeeper && styles.goalkeeperActive
            ]}
            onPress={() => {
              const updatedPlayers = [...teamA.players];
              updatedPlayers[index].isGoalkeeper = !player.isGoalkeeper;
              setTeamA({ ...teamA, players: updatedPlayers });
            }}
          >
            <Text>🤾‍♂️</Text>
          </TouchableOpacity>
        </View>
      ))}

      {/* RESPONSABLES EQUIPO A */}
      <Text style={styles.subHeading}>Responsables Equipo A</Text>
      {teamA.staff.map((member, index) => (
        <View key={index} style={styles.staffRow}>
          <TextInput
            style={styles.staffInput}
            placeholder="Nombre"
            value={member.name}
            onChangeText={(text) => {
              const updatedStaff = [...teamA.staff];
              updatedStaff[index].name = text;
              setTeamA({ ...teamA, staff: updatedStaff });
            }}
          />
          <TextInput
            style={styles.staffInput}
            placeholder="Rol (Ej: Entrenador)"
            value={member.role}
            onChangeText={(text) => {
              const updatedStaff = [...teamA.staff];
              updatedStaff[index].role = text;
              setTeamA({ ...teamA, staff: updatedStaff });
            }}
          />
        </View>
      ))}

      {/* TEAM B */}
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

      {/* JUGADORES EQUIPO B */}
      <Text style={styles.subHeading}>Jugadores Equipo B</Text>
      {teamB.players.map((player, index) => (
        <View key={index} style={styles.playerRow}>
          <Text style={styles.playerNumber}>{player.number}</Text>
          <TextInput
            style={styles.playerInput}
            placeholder="Nombre"
            value={player.name}
            onChangeText={(text) => {
              const updatedPlayers = [...teamB.players];
              updatedPlayers[index].name = text;
              setTeamB({ ...teamB, players: updatedPlayers });
            }}
          />
          <TouchableOpacity
            style={[
              styles.goalkeeperButton,
              player.isGoalkeeper && styles.goalkeeperActive
            ]}
            onPress={() => {
              const updatedPlayers = [...teamB.players];
              updatedPlayers[index].isGoalkeeper = !player.isGoalkeeper;
              setTeamB({ ...teamB, players: updatedPlayers });
            }}
          >
            <Text>🤾‍♂️</Text>
          </TouchableOpacity>
        </View>
      ))}

      {/* RESPONSABLES EQUIPO B */}
      <Text style={styles.subHeading}>Responsables Equipo B</Text>
      {teamB.staff.map((member, index) => (
        <View key={index} style={styles.staffRow}>
          <TextInput
            style={styles.staffInput}
            placeholder="Nombre"
            value={member.name}
            onChangeText={(text) => {
              const updatedStaff = [...teamB.staff];
              updatedStaff[index].name = text;
              setTeamB({ ...teamB, staff: updatedStaff });
            }}
          />
          <TextInput
            style={styles.staffInput}
            placeholder="Rol (Ej: Médico)"
            value={member.role}
            onChangeText={(text) => {
              const updatedStaff = [...teamB.staff];
              updatedStaff[index].role = text;
              setTeamB({ ...teamB, staff: updatedStaff });
            }}
          />
        </View>
      ))}

      {/* CATEGORY SELECT */}
      <Text style={styles.label}>Categoría</Text>
      {categories.map((cat) => (
        <TouchableOpacity
          key={cat.name}
          onPress={() => {
            setSelectedCategory(cat);
            setPhase("");
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
  teamLabel: { fontSize: 18, marginTop: 20, fontWeight: "bold" },
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
  phaseSelected: { backgroundColor: "#add8e6" },
  subHeading: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold"
  },
  playerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5
  },
  playerNumber: {
    width: 25,
    fontWeight: "bold"
  },
  playerInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    marginHorizontal: 5,
    padding: 5,
    borderRadius: 5
  },
  goalkeeperButton: {
    backgroundColor: "#eee",
    padding: 5,
    borderRadius: 5
  },
  goalkeeperActive: {
    backgroundColor: "#99f"
  },
  staffRow: {
    flexDirection: "column",
    marginVertical: 5
  },
  staffInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 5,
    borderRadius: 5,
    marginBottom: 4
  }
});
