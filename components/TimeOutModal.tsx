// src/components/TimeOutModal.tsx
import React, { useEffect, useState } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';

interface TimeOutModalProps {
  visible: boolean;
  onClose: () => void;
  team: 'A' | 'B';
  onEndTimeout: () => void;
}

const TimeOutModal: React.FC<TimeOutModalProps> = ({ visible, onClose, team, onEndTimeout }) => {
  const [secondsLeft, setSecondsLeft] = useState(60);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (visible) {
      setSecondsLeft(60);
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval!);
            onEndTimeout(); // finaliza el tiempo muerto
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [visible]);

  useEffect(() => {
    if (secondsLeft === 10) {
      // aviso 50 segundos (60 - 10)
      console.warn('¡10 segundos restantes en el tiempo muerto!');
      // aquí podrías reproducir un sonido o mostrar un aviso visual
    }
  }, [secondsLeft]);

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={{ flex: 1, backgroundColor: '#000000aa', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 12, width: '80%', alignItems: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Tiempo muerto del equipo {team}
          </Text>
          <Text style={{ fontSize: 48, marginVertical: 20 }}>{secondsLeft}</Text>

          <TouchableOpacity
            onPress={() => {
              onClose();
              onEndTimeout();
            }}
            style={{ backgroundColor: '#e74c3c', padding: 10, borderRadius: 8 }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Finalizar ahora</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default TimeOutModal;
