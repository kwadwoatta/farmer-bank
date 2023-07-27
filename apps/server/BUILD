load("@bazel_gazelle//:def.bzl", "gazelle")
load("@io_bazel_rules_go//go:def.bzl", "go_binary", "go_library")

# gazelle:prefix github.com/kwadwoatta/farmer-bank-web/server
gazelle(name = "gazelle")

go_library(
    name = "go-server",
    srcs = ["server.go"],
    importpath = "github.com/kwadwoatta/farmer-bank-web/server",
    visibility = ["//apps/server:__pkg__"],
    deps = [
        "//apps/server/graph",
        "@com_github_99designs_gqlgen//graphql/handler",
        "@com_github_99designs_gqlgen//graphql/playground",
        "@com_github_go_chi_chi//:chi",
        "@com_github_go_chi_cors//:cors",
    ],
)

gazelle(
    name = "gazelle-update-repos",
    args = [
        "-from_file=go.mod",
        "-to_macro=deps.bzl%go_dependencies",
        "-prune",
    ],
    command = "update-repos",
)

go_binary(
    name = "server",
    embed = [":go-server"],
    visibility = ["//visibility:public"],
)
