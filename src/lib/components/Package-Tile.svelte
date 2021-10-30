<script>
    let versionText = "12.0.1"
    let licenseTag = "MIT"
    let pkgName = "@angular/core"
    let sloganText = "Angular: The core framework"
    let licenseReadable = true;
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
    width: 520px;
    height: 240px;
    background-color: white;
    border-radius: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 2fr 1fr 2fr;
    box-shadow: 6px 6px 15px -1px #000000;
}

.ver-text {
    grid-column: 1;
    grid-row: 1;
}

.license-badge {
    background-color: gray;
    grid-column: 5;
    grid-row: 1;
    height: 50%;
    margin-top: 12%;
    margin-right: 12%;
}

h2 {
    grid-column: 1 / span 3;
    grid-row: 2;
}

.slogan-text {
    grid-column: 1 / span 3;
    grid-row: 3;
}

a {
    grid-column: 1 / span 2;
    grid-row: 4;
    text-decoration: underline;
}

button {
    grid-column: 5;
    grid-row: 4;
    height: 25px;
    margin-right: 12%;
    border: 0px;
}
</style>