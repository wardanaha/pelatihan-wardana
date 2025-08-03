package main

import (
	"encoding/json"
	"net/http"

	"github.com/gofiber/fiber/v2"
)

type Reactions struct {
	Likes    int `json:"likes"`
	Dislikes int `json:"dislikes"`
}

type Post struct {
	ID        int       `json:"id"`
	Title     string    `json:"title"`
	Body      string    `json:"body"`
	Tags      []string  `json:"tags"`
	Reactions Reactions `json:"reactions"`
	Views     int       `json:"views"`
	UserID    int       `json:"userId"`
}

type APIResponse struct {
	Posts []Post `json:"posts"`
}

func main() {
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		resp, err := http.Get("https://dummyjson.com/posts")
		if err != nil {
			return c.Status(fiber.StatusInternalServerError).SendString("Failed to fetch posts")
		}
		defer resp.Body.Close()

		var data APIResponse
		if err := json.NewDecoder(resp.Body).Decode(&data); err != nil {
			return c.Status(fiber.StatusInternalServerError).
				SendString("Failed to parse JSON: " + err.Error())
		}

		var popular []Post
		for _, post := range data.Posts {
			if post.Views > 500 {
				popular = append(popular, post)
			}
		}

		return c.JSON(popular)
	})

	app.Listen(":3100")
}
