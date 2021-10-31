<script>
    export let versionText = "12.0.1"
    export let licenseTag = "MIT"
    export let pkgName = "@angular/core"
    export let sloganText = "Angular: The core framework"
    export let licenseReadable = true;
</script>

<div class="package-tile">
    <p class="ver-text">{versionText}</p>
    <div class="license-badge">
        <h4>{licenseTag}</h4>
    </div>
    <h2>{pkgName}</h2>
    <p class="slogan-text">{sloganText}</p>
    <a>Visit website</a>
    <button>More details</button>
</div>

<style>
.package-tile {
    width: 400px;
    height: 135px;
    background-color: #ffffff;
    border-radius: 6px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    box-shadow: 6px 6px 15px -1px #000000;
    margin-left: 17px;
    margin-right: 17px;
}

.ver-text {
    grid-column: 1;
    grid-row: 1;
    font-size: 11px;
    margin: 0;
}

.license-badge {
    background-color: #F2F2F2;
    grid-column: 5;
    grid-row: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    margin: 0;
}

h2 {
    grid-column: 1 / span 3;
    grid-row: 2;
    font-size: 18px;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.slogan-text {
    grid-column: 1 / span 3;
    grid-row: 3;
    font-size: 14px;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

a {
    grid-column: 1 / span 2;
    grid-row: 4;
    text-decoration: underline;
    font-size: 13px;
    margin: 0;
}

button {
    grid-column: 5;
    grid-row: 4;
    margin-right: 12%;
    border: 0px;
    font-size: 13px;
    margin: 0;
}
</style>