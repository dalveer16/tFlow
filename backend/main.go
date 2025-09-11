package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.GET("/health", health)
	router.Run("localhost:8080")
}

func health(c *gin.Context) {
	c.JSON(http.StatusOK, "Server is running")
}
