<footer>
  <div>
    <a href="https://github.com/sorayeon/svelte-movie-app">
      GitHub Repo.
    </a>
  </div>
  <div>
    <a href="#none">
      @{new Date().getFullYear()}
      HEROPY
    </a>
  </div>
</footer>

<style lang="scss">
  footer {
    padding: 70px;
    text-align: center;
    a {
      color: $color--white-10;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
