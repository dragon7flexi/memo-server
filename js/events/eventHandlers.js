import { addButton, deleteButton, formBody, formTitle } from "../doms/doms.js";
import { createMemo, deleteCheckedMemos } from "../memo/memoManager.js";

export function addMemoEventListener() {
    addButton.onclick = () => {
        const title = formTitle.value
        const body = formBody.value

        createMemo(title, body)
    }
}

export function addDeleteMemoEventListener() {
    deleteButton.onclick = () => {
        deleteCheckedMemos()
    }
}

export function addEditMemoListener(memoId) {
    const currEditButton = document.querySelector(`#id-memo-list tr[memo-id='${memoId}'] td button`)
    const myModal = new bootstrap.Modal(document.getElementById("exampleModal"))
    const saveEditButton = document.getElementById("saveEdit")
    const titleOfCurrMemo = document.querySelector(`#id-memo-list tr[memo-id='${memoId}'] td[id='memoTitle']`)

    currEditButton.onclick = () => {
        myModal.show()
    }

    saveEditButton.onclick = () => {
        const editTitleField = document.getElementById("editTitleField")
        titleOfCurrMemo.innerText = editTitleField.value
        myModal.hide()
    }
}