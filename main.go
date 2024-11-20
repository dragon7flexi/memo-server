package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"
)

var htmlStr string

func main() {
	fmt.Println("start")

	data, err := os.ReadFile("index.html")
	if err != nil {
		log.Fatal(err)
	}

	htmlStr = string(data)

	http.HandleFunc("/", showScreen)
	http.HandleFunc("/add_memo", addMemo)
	http.HandleFunc("/list_memo", listMemo)

	http.ListenAndServe(":8080", nil)
}

func showScreen(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, htmlStr)
}

type Memo struct {
	ID        string
	Title     string
	Body      string
	CreatedAt time.Time
	UpdatedAt time.Time
}

var memos map[string]*Memo = make(map[string]*Memo)

func addMemo(w http.ResponseWriter, r *http.Request) {
	// This is a pointer because the Decode method require a pointer.
	var m *Memo = &Memo{}

	// assign the request body into m
	if err := json.NewDecoder(r.Body).Decode(m); err != nil {
		fmt.Fprintln(w, err.Error())
		return
	}

	memos[m.ID] = m

	fmt.Fprintln(w, len(memos))
}

func listMemo(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, memos)
}
