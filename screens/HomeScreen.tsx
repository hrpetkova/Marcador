// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  // Función ejemplo para cargar partidos guardados (puedes conectar con almacenamiento)
  const handleLoadMatch = () => {
    Alert.alert('Funcionalidad en desarrollo', 'Aquí podrás cargar partidos guardados próximamente.');
  };

  const handleShowInstructions = () => {
    Alert.alert(
      'Instrucciones básicas',
      '1️⃣ Configura los equipos y categoría.\n2️⃣ Controla el partido con el cronómetro.\n3️⃣ Registra goles, sanciones y tiempos muertos.\n4️⃣ Exporta resultados en PDF.\n\n¡Disfruta del partido!'
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🏐 Cronómetro de Balonmano</Text>
      <Text style={styles.subtitle}>¡Bienvenido! Prepárate para controlar tu partido con precisión.</Text>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate('GameSetupScreen')}
      >
        <Text style={styles.primaryButtonText}>⚽ Configurar nuevo partido</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton} onPress={handleLoadMatch}>
        <Text style={styles.secondaryButtonText}>📂 Cargar partido guardado</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkButton} onPress={handleShowInstructions}>
        <Text style={styles.linkButtonText}>ℹ️ Ver instrucciones</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Versión 1.0.0 - © 2025 TuAppBalonmano</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#f0f4f8',
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    marginBottom: 8,
    color: '#1e3a8a',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#334155',
    marginBottom: 30,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  primaryButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
  },
  primaryButtonText: {
    color: '#f9fafb',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center',
  },
  secondaryButton: {
    backgroundColor: '#e0e7ff',
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
  },
  secondaryButtonText: {
    color: '#1e40af',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  linkButton: {
    marginBottom: 40,
  },
  linkButtonText: {
    color: '#2563eb',
    fontSize: 16,
    fontWeight: '600',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#64748b',
  },
});

