package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	username string `grom:"unique;not null"`
	email    string
	password string
}
