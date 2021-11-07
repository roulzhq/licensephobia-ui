<script>
  import { packages } from "../../store";
  import PackageTile from "./Package-Tile.svelte";
  import PackageDetail from "./Package-Detail.svelte";
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
<PackageDetail
  packageTitle="{titleText}"
  packageType="{licenseText}"
  packageVersion="{versionText}"
  packageDescription="{descText}"
  packageLink="{linkText}"
></PackageDetail>

{:else}
<div class="package-viewer">
  <h1 class="package-viewer-headline">Your package.json</h1>

  <div class="package-viewer-body">
    {#each $packages as pkg}
    <PackageTile
      versionText="{pkg.version.used}"
      licenseTag="{pkg.license.type}"
      pkgName="{pkg.name}"
      sloganText="{pkg.description}"
      linkURL="{pkg.url}"
    ></PackageTile>
    {/each}
  </div>
</div>
{/if}

<style>
  .package-viewer {
    display: grid;
    grid-template-rows: 1fr 5fr;
    height: 100%;
    width: 80%;
    padding: 50px 0;
  }

  .package-viewer-headline {
    display: flex;
    align-items: center;
  }

  .package-viewer-body {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 200px;
    gap: 10px;
    overflow: auto;
    padding: 20px 0;
  }
</style>
