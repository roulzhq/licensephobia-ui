<script>
  import PackageTile from '../components/Package-Tile.svelte';
  // eslint-disable-next-line import/no-mutable-exports
  export let packageResult = null;

  //     export interface PackageResult {
  //     found: boolean;
  //     name: string;
  //     description: string;
  //     url: string;
  //     version: {
  //       used: string,
  //       latest: string,
  //     };
  //     license: {
  //       found: boolean;
  //       type: LicenseString;
  //     }
  //   }
</script>

<!-- <div class="package-viewer">
  {#each packageResult.packages as pkg}
  <div class="package">
    {#if pkg.found}
    <div class="package-name">{pkg.name}</div>
    <div class="package-description">{pkg.description}</div>
    <a href="{pkg.url}" target="_blank" rel="noopener noreferrer">Visit website</a>
    <div class="package-license">
      License:
      <a href="https://choosealicense.com/licenses/{pkg.license.type}" rel="noopener noreferrer">
        {pkg.license.type}
      </a>
    </div>
    {:else}
    <div class="package-not-found">The package could not be found...</div>
    {/if}
  </div>
  {/each}
</div> -->

<h1>Your package.json</h1>

<div class="package-viewer">
  {#each packageResult.packages as pkg}
  <PackageTile versionText="{pkg.version.used}" licenseTag="{pkg.license.type}" pkgName="{pkg.name}" sloganText="{pkg.description}"></PackageTile>
  {/each}
</div>

<style>
  .package-viewer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    gap: 10px;
  }

  .package-viewer .package {
    background-color: #fefefe;
    box-shadow: 4px 4px 4px #21212144;
    padding: 10px;
  }

  .package-viewer .package .package-name {
    font-weight: bold;
  }

  .package-viewer .package .package-description {
    margin-bottom: 8px;
  }
</style>
