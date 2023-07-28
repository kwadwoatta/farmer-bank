package graph

import "github.com/kwadwoatta/farmer_bank_server/graph/model"

// import "github.com/kwadwoatta/farmer_bank_server/graph/model"

type JsonData struct {
	Banks []model.Bank `json:"banks"`
}
