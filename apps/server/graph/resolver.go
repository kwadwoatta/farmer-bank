package graph

import "github.com/kwadwoatta/farmer_bank_server/graph/model"

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	banks []*model.Bank
}
