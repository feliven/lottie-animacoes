import { DotLottie } from "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm";

const canvas = document.getElementById("lottie");

const dotLottie = new DotLottie({
  canvas,
  src: "https://lottie.host/1f7f5d14-039b-48cc-88ab-8e74197e29b9/TPf7tahuIz.lottie", // Contains state machine
  autoplay: true,
  loop: true,
  stateMachineId: "StateMachine2",
  stateMachineConfig: {
    openUrlPolicy: {
      requireUserInteraction: true,
    },
  },
  renderConfig: {
    devicePixelRatio: 0.8,
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
