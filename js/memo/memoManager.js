import { memoList } from "../doms/doms.js"
import { addEditMemoListener } from "../events/eventHandlers.js"
import { getCurrentTime } from "../utils/memoUtils.js"
import { getNextMemoId } from "./id.js"

export function createMemo(title, body) {
    function generateMemoHtml(title, body) {
        const id = getNextMemoId()
        const createdAt = getCurrentTime()
        const updateAt = "なし"

        const memoHtml = document.createElement("tr")
        memoHtml.innerHTML = `
            <td><input type="checkbox" /></td>
            <td id="memoTitle">${title}</td>
            <td>${createdAt}</td>
            <td>${updateAt}</td>
            <td><button id="id-edit-button" class="btn btn-primary">Edit</button></td>
        `

        memoHtml.setAttribute("memo-id", id)

        return { memoHtml, id }
    }
    
    function drawMemo(memoHtml) {
        memoList.appendChild(memoHtml)
    }
    
    const { memoHtml, id } = generateMemoHtml(title, body)
    drawMemo(memoHtml)

    addEditMemoListener(id)
}

export function deleteCheckedMemos() {
    const checkboxes = document.querySelectorAll("#id-memo-list tr input[type='checkbox']:checked")

    checkboxes.forEach(checkbox => {
        checkbox.closest("tr").remove()
    })
}