package database

import (
	"fmt"
	"log"

	"tFlow/internal/config"
	"tFlow/internal/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

var DB *gorm.DB

func Connect(cfg *config.Config) error {
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=%s",
		cfg.Database.Host,
		cfg.Database.User,
		cfg.Database.Password,
		cfg.Database.DBName,
		cfg.Database.Port,
		cfg.Database.SSLMode,
	)

	var err error
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info),
	})

	if err != nil {
		return fmt.Errorf("failed to connect to database: %w", err)
	}

	log.Println("Database connected successfully")
	return nil
}

func Migrate() error {
	DB.Logger = DB.Logger.LogMode(logger.Info)

	if err := DB.AutoMigrate(&models.User{}); err != nil {
		return fmt.Errorf("failed to migrate User model: %w", err)
	}

	if err := verifyUserTable(); err != nil {
		return fmt.Errorf("user table verification failed: %w", err)
	}

	log.Println("Database migration completed successfully")
	return nil
}

func verifyUserTable() error {
	var count int64
	result := DB.Model(&models.User{}).Count(&count)
	if result.Error != nil {
		return fmt.Errorf("failed to verify users table: %w", result.Error)
	}

	log.Printf("Users table verified successfully (current count: %d)", count)
	return nil
}

func GetDB() *gorm.DB {
	return DB
}
