package main

import (
	"log"

	"tFlow/internal/api/routes"
	"tFlow/internal/config"
	"tFlow/internal/database"
)

func main() {
	cfg := config.Load()

	if err := database.Connect(cfg); err != nil {
		log.Fatal("Failed to connect to database:", err)
	}

	if err := database.Migrate(); err != nil {
		log.Fatal("Failed to run migrations:", err)
	}

	router := routes.SetupRoutes(cfg)

	log.Printf("Server starting on port %s", cfg.Server.Port)
	if err := router.Run(":" + cfg.Server.Port); err != nil {
		log.Fatal("Failed to start server:", err)
	}
}
