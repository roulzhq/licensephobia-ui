<script>
    import PackageUpload from '../lib/components/Package-Upload.svelte';
    import PackageViewer from '../lib/components/Package-Viewer.svelte';

    let scannedPackage = null;
    let searchedPackage = null;

    let scanningStarted = false;
    let scanningCompleted = false;


    function onUploadDone(pkg) {
      scannedPackage = pkg;
      scanningCompleted = true;
    }

    function onSearchDone(pkg) {
        searchedPackage = pkg
    }

    function onUploadStarted() {
      scanningStarted = true;
    }

    
</script>

<div class="home">
    {#if !scanningStarted}
        <PackageUpload class="package-upload-view" onUploadStarted={onUploadStarted} onUploadDone={onUploadDone}></PackageUpload>
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
        background: linear-gradient(
            112deg,
            #ffffff 0%,
            #ffffff 55%,
            #00FFC2 55%,
            #00FFC2 100%
        );
    }

    .package-upload-view {
        height: 100vh;
        
    }
</style>