import { DotLottie } from "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm";

const canvas = document.getElementById("lottie");

new DotLottie({
  canvas,
  src: "https://lottie.host/a48b62af-7082-457a-855d-900c1aa8829c/tWUSMvsWLH.lottie", // Contains state machine
  autoplay: true,
  loop: true,
  renderConfig: {
    devicePixelRatio: 1,
    autoResize: true,
  },
});
