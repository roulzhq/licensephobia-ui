<script>
  import { Router, Route } from 'svelte-routing';

  import Home from './pages/Home.svelte';
  import Nav from './lib/Nav.svelte';

  // eslint-disable-next-line import/prefer-default-export
  export const url = '';
</script>

<div id="app">
  <Router url="{url}">
    <Nav></Nav>
    <main>
      <Route path="/"><Home /></Route>
    </main>
  </Router>
</div>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
  #app {
    background-color: #f5f6fa;
    font-family: 'Roboto', sans-serif;

    height: 100vh;
    width: 100vw;
  }

  #app main {
    height: 100%;
  }
</style>