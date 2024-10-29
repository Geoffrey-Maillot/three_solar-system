import { Audio, AudioLoader, AudioListener } from "three";

const createBackgroundSong = async (listener: AudioListener) => {
  const audioLoader = new AudioLoader();
  const backgroundSong = new Audio(listener);
  let buffer: AudioBuffer;

  try {
    buffer = await audioLoader.loadAsync("src/assets/song/universe.mp3");
    backgroundSong.setBuffer(buffer);
    backgroundSong.setLoop(true);
    backgroundSong.setVolume(0.5);

    // On attend une interaction utilisateur
    const startAudio = () => {
      listener.context.resume().then(() => {
        backgroundSong.play();
      });
      document.removeEventListener("click", startAudio);
    };

    document.addEventListener("click", startAudio);
  } catch (error) {
    console.error("Erreur lors du chargement de l'audio:", error);
  }

  return backgroundSong;
};

export { createBackgroundSong };
