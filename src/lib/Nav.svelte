<script>
  import { Link } from "svelte-routing";
</script>

<nav>
  <Link to="/" class="title">Licensephobia</Link>
</nav>

<style>
  nav {
    height: 100%;
    background-color: #fefefe7c;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 2;

    height: 50px;
    width: 100vw;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid #afafaf;

    padding: 0 20px;
  }

  /* This is to style the links, must use :global selector*/
  :global(.title) {
    margin: 0;
    display: inline-block;
    color: #334555;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
  }
</style>
