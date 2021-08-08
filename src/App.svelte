<script>
  import { Router, Route } from 'svelte-routing';

  import Home from './pages/Home.svelte';
  import Nav from './lib/Nav.svelte';
  import Project from './pages/Project.svelte';

  // eslint-disable-next-line import/prefer-default-export
  export const url = '';
</script>

<div id="app">
  <Router url="{url}">
    <Nav></Nav>
    <main>
      <Route path="project" component="{Project}" /> 
      <Route path="/"><Home /></Route>
    </main>
  </Router>
</div>

<style>
  #app {
    display: grid;
    grid-template-rows: 40px 1fr;
    background-color: #f5f6fa;

    height: 100vh;
    width: 100vw;
  }
</style>