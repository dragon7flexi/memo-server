import { addDeleteMemoEventListener, addMemoEventListener } from "./events/eventHandlers.js"

function initApp() {
    addMemoEventListener()
    addDeleteMemoEventListener()
}

initApp()