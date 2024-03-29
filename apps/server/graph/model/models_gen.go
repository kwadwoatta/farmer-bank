// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

type Bank struct {
	ID              string   `json:"id"`
	Name            string   `json:"name"`
	Description     string   `json:"description"`
	InterestRate    string   `json:"interest_rate"`
	DisplayImageURL string   `json:"display_image"`
	Contact         string   `json:"contact"`
	ProcessingFee   string   `json:"processing_fee"`
	GooglePlusCode  string   `json:"google_plus_code"`
	Facilities      []string `json:"facilities"`
}

type NewBank struct {
	Text *string `json:"text,omitempty"`
}
