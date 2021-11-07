<script>
  import PackageUpload from "../lib/components/Package-Upload.svelte";
  import PackageSearch from "../lib/components/Package-Search.svelte";
  import PackageViewer from "../lib/components/Package-Viewer.svelte";

  let scanningStarted = false;

  function onUploadStarted() {
    scanningStarted = true;
  }
</script>

<div class="home">
  <div class="background-gradient"></div>

  {#if !scanningStarted}
  <h1>
    Don't be afraid of your
    <span class="package-manager-badge">Nodejs</span> licenses anymore!
  </h1>

  <div class="actions">
    <PackageSearch></PackageSearch>
    <span>or</span>
    <PackageUpload
      class="package-upload-view"
      onUploadStarted="{onUploadStarted}"
    ></PackageUpload>
  </div>

  {:else}
  <PackageViewer></PackageViewer>

  {/if}
</div>

<style>
  .home {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
  }

  h1 {
    margin-bottom: 200px;
    z-index: 1;
  }

  .background-gradient {
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    clip-path: polygon(35% 0, 100% 0, 100% 100%, 0% 100%);
    background: linear-gradient(#00ff557e 0%, #00ffc2 100%);
  }

  .actions {
    display: flex;
    justify-content: space-between;
    width: 50%;
    align-items: center;
  }

  .actions span {
    box-shadow: 3px 2px 6px 2px #21212144;
    padding: 6px 20px;
    border-radius: 25px;
    background-color: #fefefe;
  }

  .package-manager-badge {
    vertical-align: middle;
    box-shadow: 3px 2px 6px 2px #21212144;
    border-radius: 25px;
    font-size: 16px;
    padding: 6px 20px;
    margin: 0 16px;
    background-color: #fefefe;
  }
</style>
