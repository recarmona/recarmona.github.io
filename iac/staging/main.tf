resource "github_repository" "mysite" {
  name        = "recarmona.github.io"
  description = "My awesome site"

  visibility = "public"

  template {
    owner                = "github"
    repository           = "recarmona.github.io"
    include_all_branches = true
  }

  pages {
    source {
      branch = "main"
      path   = "/"
    }
  }




}
