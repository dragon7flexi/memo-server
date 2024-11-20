    const titleElement = document.getElementById("id-title")
    const bodyElement = document.getElementById("id-body")

    const addButton = document.getElementById("id-add-button")
    addButton.addEventListener("click", (event) => {
      const title = titleElement.value
      const body = bodyElement.value

      const now = new Date()
      const createdAt = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate()
      const updateAt = "なし"

      console.log(title + body + createdAt)

      const tr = document.createElement("tr")
      tr.innerHTML = `
        <td><input type="checkbox" /></td>
        <td>${title}</td>
        <td>${createdAt}</td>
        <td>${updateAt}</td>
        <td><button>編集</button></td>
      `

      const memoList = document.getElementById("id-memo-list")
      memoList.appendChild(tr);
    })

    const deleteButton = document.getElementById("id-delete-button")

    deleteButton.addEventListener("click", (event) => {
      const tbody = document.getElementById("id-memo-list")
      const trs = tbody.getElementsByTagName("tr")

      // see the each table rows
      Array.from(trs).filter((tr) => {
        // get the properties(is_checked, title, created_at)
        tds = tr.getElementsByTagName("td")
        
        // see the each properties
        const checkedTds = Array.from(tds).filter((td) => {
          // get the input elements
          const input = td.getElementsByTagName("input")

          // If no element was created, stop
          if (input.length == 0) {
            return false
          }

          
          const checkbox = input[0]

          if (checkbox.checked == true) {
            return true
          }

          return false
        })

        checkedTds.forEach((checkedTd) => {
          checkedTd.parentElement.remove()
        })
      })
    })
