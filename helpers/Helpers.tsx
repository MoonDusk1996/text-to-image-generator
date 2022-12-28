

export function setLocalStorage(prompt: any, image?: any) {
  localStorage.setItem("currentPrompt", prompt);
  localStorage.setItem("currentImage", image);
}
export function getLocalStorage() {
  if (typeof window !== "undefined") {
    var prompt = localStorage.getItem("currentPrompt");
    var image = localStorage.getItem("currentImage");
    return { prompt, image };
  }
}
