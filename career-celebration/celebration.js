import { DotLottie } from "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm";

const canvas = document.getElementById("lottie");

const dotLottie = new DotLottie({
  canvas,
  src: "https://lottie.host/b76c6802-0c05-4cd8-be01-28fa3f7701d9/Jryy38N5Xk.lottie", // Contains state machine
  autoplay: true,
  loop: true,
  stateMachineId: "StateMachine1",
  stateMachineConfig: {
    openUrlPolicy: {
      requireUserInteraction: true,
    },
  },
  renderConfig: {
    devicePixelRatio: 1,
    autoResize: true,
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
