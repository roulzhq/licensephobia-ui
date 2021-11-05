<script>
  import PackageTile from '../components/Package-Tile.svelte';
  import PackageDetail from '../components/Package-Detail.svelte';
  // eslint-disable-next-line import/no-mutable-exports
  export let packageResult = null;

  let versionText;
  let licenseText;
  let titleText;
  let descText;
  let tileClicked = false;

  function goToDetail(version, license, title, desc) {
    tileClicked = true;
    console.log("Clicked");
    versionText = version;
    licenseText = license;
    titleText = title;
    descText = desc;
    

  }

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

{#if tileClicked}
<PackageDetail packageTitle="{titleText}" packageType="{licenseText}" packageVersion="{versionText}" packageDescription="{descText}"></PackageDetail>

{:else}
<h1>Your package.json</h1>

<div class="package-viewer">
  {#each packageResult.packages as pkg}
  <!-- <PackageTile on:click="{getTileClick(pkg.version.used, pkg.license.type, pkg.name, pkg.description)}" versionText="{pkg.version.used}" licenseTag="{pkg.license.type}" pkgName="{pkg.name}" sloganText="{pkg.description}"></PackageTile> -->
  <PackageTile on:click={() => goToDetail(versionText, licenseTag, pkgName, sloganText)} versionText="{pkg.version.used}" licenseTag="{pkg.license.type}" pkgName="{pkg.name}" sloganText="{pkg.description}"></PackageTile>
  {/each}
</div>
{/if}

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
