package main

import (
	"fmt"
	"net/http"
)

func main() {

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "🚀 SafeDeploy Backend Running")
	})

	http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		fmt.Fprint(w, "OK")
	})

	http.HandleFunc("/api/message", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, `{"message":"Hello from Golang Backend 🚀"}`)
	})

	fmt.Println("Server running on port 3000")
	http.ListenAndServe(":3000", nil)
}