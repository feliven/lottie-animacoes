import { DotLottie } from "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm";

const canvas = document.getElementById("lottie");

new DotLottie({
  canvas,
  src: "https://lottie.host/fe988e15-4fc0-42d6-9f0a-aeccab82dac6/YtHkW1UPNj.lottie", // Contains state machine
  autoplay: true,
  loop: true,
  renderConfig: {
    // devicePixelRatio: 0.7,
    autoResize: false,
  },
});
