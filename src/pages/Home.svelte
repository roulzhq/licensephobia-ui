<script>
  import PackageUpload from "../lib/components/Package-Upload.svelte";
  import PackageViewer from "../lib/components/Package-Viewer.svelte";

  let searchedPackage = null;

  let scanningStarted = false;

  function onSearchDone(pkg) {
    searchedPackage = pkg;
  }

  function onUploadStarted() {
    scanningStarted = true;
  }
</script>

<div class="home">
  {#if !scanningStarted}
  <PackageUpload
    class="package-upload-view"
    onUploadStarted="{onUploadStarted}"
  ></PackageUpload>

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
    background: linear-gradient(
      112deg,
      #ffffff 0%,
      #ffffff 55%,
      #00ffc2 55%,
      #00ffc2 100%
    );
  }

  .package-upload-view {
    height: 100vh;
  }
</style>
