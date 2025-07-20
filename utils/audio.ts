// utils/audio.ts

import { Audio } from 'expo-av';

export const playClaxon = async () => {
  const { sound } = await Audio.Sound.createAsync(
    require('../assets/claxon.mp3')
  );
  await sound.playAsync();
};
