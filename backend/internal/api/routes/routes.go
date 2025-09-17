package routes

import (
	"tFlow/internal/api/handlers"
	"tFlow/internal/api/middleware"
	"tFlow/internal/config"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(cfg *config.Config) *gin.Engine {
	gin.SetMode(cfg.Server.GinMode)

	r := gin.Default()

	r.Use(gin.Logger())
	r.Use(gin.Recovery())

	authHandler := handlers.NewAuthHandler(cfg)

	api := r.Group("/api")
	{
		auth := api.Group("/auth")
		{
			auth.POST("/register", authHandler.Register)
			auth.POST("/login", authHandler.Login)

			auth.Use(middleware.AuthMiddleware(cfg))
			auth.GET("/me", authHandler.Me)
		}

		protected := api.Group("/")
		protected.Use(middleware.AuthMiddleware(cfg))
		{
			// other routes
		}
	}

	r.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{"status": "OK"})
	})

	return r
}
