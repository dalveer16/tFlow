package main

import (
	"net/http"
	"tFlow/pkg/database"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	database.Connect()

	router.GET("/health", health)
	router.Run("localhost:8080")
}

func health(c *gin.Context) {
	c.JSON(http.StatusOK, "Server is running")
}
