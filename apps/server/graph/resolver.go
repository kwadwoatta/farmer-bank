package graph

import "github.com/kwadwoatta/farmer-bank-web/server/graph/model"

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	banks []*model.Bank
}
