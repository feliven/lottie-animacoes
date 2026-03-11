import { DotLottie } from "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm";

const canvas = document.getElementById("lottie");

const dotLottie = new DotLottie({
  canvas,
  src: "https://lottie.host/ee723123-3449-4605-8ae4-2f65e408dd6d/4jRnl6YpsA.lottie", // Contains state machine
  autoplay: true,
  loop: true,
  stateMachineId: "StateMachine1",
  stateMachineConfig: {
    openUrlPolicy: {
      requireUserInteraction: true,
    },
  },
  renderConfig: {
    // devicePixelRatio: 0.7,
    autoResize: false,
  },
});

// Wait for animation to load before starting state machine
dotLottie.addEventListener("load", () => {
  // Load a state machine by ID (defined in the .lottie file)
  dotLottie.stateMachineLoad("StateMachine1");

  // Start the state machine
  dotLottie.stateMachineStart();

  // Check if it's running
  console.log(dotLottie.stateMachineGetStatus()); // "Playing" or "Stopped"
});
