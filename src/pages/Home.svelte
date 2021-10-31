<script>
    import PackageUpload from '../lib/components/Package-Upload.svelte';
    import PackageViewer from '../lib/components/Package-Viewer.svelte';

    let scannedPackage = null;
    let searchedPackage = null;

    let scanningStarted = false;
    let scanningCompleted = false;

    function onUploadDone(pkg) {
      console.log(pkg);
      scannedPackage = pkg;
      scanningCompleted = true;
    }

    function onSearchDone(pkg) {
      searchedPackage = pkg;
    }

    function onUploadStarted() {
      scanningStarted = true;
    }
</script>

<div class="home">
    {#if !scanningStarted}
        <PackageUpload onUploadStarted={onUploadStarted} onUploadDone={onUploadDone}></PackageUpload>
    {/if}

    {#if scanningStarted && !scanningCompleted}
        <h1>Scanning...</h1>
    {/if}

    {#if scanningStarted && scanningCompleted}
        <PackageViewer packageResult={scannedPackage}></PackageViewer>
    {/if}
</div>

<style>
    .home {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>