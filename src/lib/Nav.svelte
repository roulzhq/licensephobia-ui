<script>
  import { Link } from 'svelte-routing';
</script>

<nav>
  <h1>Licensephobia</h1>
  <div class="nav-links">
    <Link to="/" class="nav-link">Home</Link>
    <Link to="project" class="nav-link">Project</Link>
  </div>
</nav>

<style>
  nav {
    height: 100%;
    background-color: #353b48;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 20px;
  }

  nav h1 {
    margin: 0;
    display: inline-block;
    color: #fafafa;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
  }

  .nav-links {
    display: flex;
    align-items: stretch;
  }

  /* This is to style the links, must use :global selector*/
  :global(.nav-link) {
    text-decoration: none;
    color: #fafafa;
    line-height: 40px;
    padding: 0 6px;
    border-bottom: 2px solid transparent;
    transition: .1s all ease-in-out;
  }

  :global(.nav-link):hover {
    background-color: #fefefe22;
    border-bottom: 2px solid #00a8ff;
  }
</style>