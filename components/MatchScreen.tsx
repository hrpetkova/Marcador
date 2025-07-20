// MatchScreen.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Chronometer } from './Chronometer';
import { useNavigation } from '@react-navigation/native';

export default function MatchScreen() {
  const [scoreTeamA, setScoreTeamA] = useState(0);
  const [scoreTeamB, setScoreTeamB] = useState(0);
  const navigation = useNavigation();

  const incrementScore = (team: 'A' | 'B') => {
    if (team === 'A') setScoreTeamA(scoreTeamA + 1);
    else setScoreTeamB(scoreTeamB + 1);
  };

  const decrementScore = (team: 'A' | 'B') => {
    if (team === 'A' && scoreTeamA > 0) setScoreTeamA(scoreTeamA - 1);
    else if (team === 'B' && scoreTeamB > 0) setScoreTeamB(scoreTeamB - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marcador</Text>
      <View style={styles.scoreContainer}>
        <View style={[styles.teamSection, { backgroundColor: '#d1e7dd' }]}>  
          <Text style={styles.teamLabel}>Equipo A</Text>
          <Text style={styles.score}>{scoreTeamA}</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={() => incrementScore('A')} style={styles.button}><Text>+1</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => decrementScore('A')} style={styles.button}><Text>-1</Text></TouchableOpacity>
          </View>
        </View>

        <View style={[styles.teamSection, { backgroundColor: '#f8d7da' }]}> 
          <Text style={styles.teamLabel}>Equipo B</Text>
          <Text style={styles.score}>{scoreTeamB}</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={() => incrementScore('B')} style={styles.button}><Text>+1</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => decrementScore('B')} style={styles.button}><Text>-1</Text></TouchableOpacity>
          </View>
        </View>
      </View>

      <Chronometer />

      <TouchableOpacity
        style={styles.timeoutButton}
        onPress={() => navigation.navigate('TimeoutModal')}
      >
        <Text style={styles.timeoutText}>Tiempo Muerto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
  },
  teamSection: {
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 10,
  },
  teamLabel: {
    fontSize: 20,
    marginBottom: 10,
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    backgroundColor: '#ccc',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 8,
  },
  timeoutButton: {
    backgroundColor: '#ffc107',
    padding: 15,
    marginTop: 30,
    alignItems: 'center',
    borderRadius: 10,
  },
  timeoutText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
