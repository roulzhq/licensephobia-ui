<script>
  
  import { packages } from '../../store';
  import PackageTile from './Package-Tile.svelte';
  import PackageDetail from './Package-Detail.svelte';
  // eslint-disable-next-line import/no-mutable-exports
  export let packageResult = null;

  let versionText;
  let licenseText;
  let titleText;
  let descText;
  let linkText;
  let tileClicked = false;

  packages.subscribe((data) => {
    console.log(data);
  });

  function goToDetail(version, license, title, desc, link) {
    tileClicked = true;
    versionText = version;
    licenseText = license;
    titleText = title;
    descText = desc;
    linkText = link;
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
<PackageDetail packageTitle="{titleText}" packageType="{licenseText}" packageVersion="{versionText}" packageDescription="{descText}" packageLink="{linkText}"></PackageDetail>

{:else}
<div class="package-viewer">
<h1 class="package-viewer-headline">Your package.json</h1>

<div class="package-viewer-body">
  {#each $packages as pkg}
  <div on:click={(e) => goToDetail(pkg.version.used, pkg.license.type, pkg.name, pkg.description, pkg.url)}>
    <PackageTile versionText="{pkg.version.used}" licenseTag="{pkg.license.type}" pkgName="{pkg.name}" sloganText="{pkg.description}" linkURL="{pkg.url}"></PackageTile>
  </div>
  {/each}
</div>
</div>
{/if}

<style>


  .package-viewer {
    display:grid;
    grid-template-rows: 1f 5fr;
  }

  .package-viewer-headline {
    grid-row: 1;
  }

  .package-viewer-body {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    gap: 10px;
    grid-row: 2;
  }

  .package-viewer-body .package {
    background-color: #fefefe;
    box-shadow: 4px 4px 4px #21212144;
    padding: 10px;
  }

  .package-viewer-body .package .package-name {
    font-weight: bold;
  }

  .package-viewer-body .package .package-description {
    margin-bottom: 8px;
  }

</style>
