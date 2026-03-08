import { DotLottie } from "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm";

const canvas = document.getElementById("lottie");

const dotLottie = new DotLottie({
  canvas,
  src: "https://lottie.host/a48b62af-7082-457a-855d-900c1aa8829c/tWUSMvsWLH.lottie", // Contains state machine
  autoplay: true,
  loop: true,
  renderConfig: {
    devicePixelRatio: 1,
    autoResize: false,
  },
});

// Wait for animation to load before starting state machine
dotLottie.addEventListener("load", () => {
  // Load a state machine by ID (defined in the .lottie file)
  dotLottie.stateMachineLoad("my-state-machine-id");

  // Start the state machine
  dotLottie.stateMachineStart();

  // Check if it's running
  console.log(dotLottie.stateMachineGetStatus()); // "Playing" or "Stopped"
});
