<script>
  export let versionText = "12.0.1";
  export let licenseTag = "MIT";
  export let pkgName = "@angular/core";
  export let sloganText = "Angular: The core framework";
  export let linkURL = "";
  export let licenseReadable = true;
</script>

<div class="package-tile">
  <div class="package-tile-body">
    <p class="ver-text">{versionText}</p>
    <h2>{pkgName}</h2>
    <p class="slogan-text">{sloganText}</p>
  </div>
  <div class="package-tile-footer">
    <a href="{linkURL}" target="_blank">Visit website</a>
    <button>More details</button>
  </div>

  <div class="license-badge">{licenseTag}</div>
</div>

<style>
  .package-tile {
    background-color: #ffffff;
    border-radius: 6px;
    display: grid;
    grid-template-rows: 1fr auto;
    box-shadow: 3px 2px 6px 2px #00000033;
    transition: all 100ms ease-in-out;
    cursor: pointer;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 8px;
  }

  .package-tile:hover {
    box-shadow: 3px 2px 6px 2px #00000044;
  }

  .package-tile-footer {
    display: flex;
    justify-content: space-between;
  }

  .ver-text {
    font-size: 11px;
    margin: 0;
  }

  .license-badge {
    background-color: #f2f2f2;
    position: absolute;
    top: 10px;
    right: 10px;

    font-size: 14px;

    padding: 6px;
  }

  h2 {
    font-size: 18px;
    margin: 0;
    /*white-space: nowrap;*/
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .slogan-text {
    grid-row: 3;
    font-size: 14px;
    margin: 0;
    /*white-space: nowrap;*/
    overflow: hidden;
    text-overflow: ellipsis;
  }

  a {
    text-decoration: underline;
    font-size: 13px;
    margin: 0;
  }

  button {
    margin-right: 12%;
    border: 0px;
    font-size: 13px;
    margin: 0;
  }
</style>
