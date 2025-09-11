package database

import (
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	log.Println("🔍 Connecting to database...")

	dsn := "postgres://tflow_user:admin@localhost:5432/tflow?sslmode=disable"

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("❌ Failed to connect to database: %v", err)
	}

	sqlDB, err := db.DB()
	if err != nil {
		log.Fatalf("❌ Failed to get generic DB: %v", err)
	}

	err = sqlDB.Ping()
	if err != nil {
		log.Fatalf("❌ Database unreachable: %v", err)
	}

	DB = db
	log.Println("✅ Database connected")
}
