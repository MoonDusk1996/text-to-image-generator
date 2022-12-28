export function setLocalStorage(prompt:any) {
  if (typeof window !== "undefined") {
   localStorage.setItem("currentPrompt", prompt);
  }
}
export function getLocalStorage() {
    if (typeof window !== "undefined") {
      var local = localStorage.getItem("currentPrompt");
      return local
    }
  }
