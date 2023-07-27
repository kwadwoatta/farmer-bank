load("@aspect_rules_ts//ts:defs.bzl", "ts_project")
# load("@npm//:eslint/package_json.bzl", eslint_bin = "bin")

SRCS = [
    "page.tsx",
    "layout.tsx",
]

SPECS = [
    # "index.test.tsx",
]

ts_project(
    name = "app",
    srcs = SRCS,
    declaration = True,
    resolve_json_module = True,
    tsconfig = "//:tsconfig",
    visibility = ["//apps/web:__subpackages__"],
    deps = [
        "//:node_modules/@radix-ui/react-dialog",
        "//:node_modules/@tanstack/react-query-next-experimental",
        "//:node_modules/@types/node",
        "//:node_modules/@types/react",
        "//:node_modules/@types/react-dom",
        "//:node_modules/eslint",
        "//:node_modules/eslint-config-next",
        "//:node_modules/graphql",
        "//:node_modules/next",
        "//:node_modules/react",
        "//:node_modules/react-dom",
        "//:node_modules/react-icons",
        "//:node_modules/typescript",
    ],
)

# eslint_bin.eslint_test(
#     name = "eslint_test",
#     args = [
#         "--config .eslintrc.json",
#     ] + ["{}/{}".format(
#         package_name(),
#         s,
#     ) for s in SRCS + SPECS],
#     data = SRCS + SPECS + [
#         "//:eslintrc",
#         "//apps/web//:node_modules/eslint-config-next",
#         "//apps/web//:node_modules/next",
#     ],
#     tags = ["lint"],
# )
