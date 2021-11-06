<script>
    export let packageTitle;
    export let packageDescription;
    export let packageType;
    export let packageVersion;
    export let packageLink;
    export let packageLicense;
</script>

<div class="package-detail">
    <div class="detail-header">
        <h1>{packageTitle}</h1>
        <p>{packageType}</p>
        <p>{packageVersion}</p>
        <a href="{packageLink}">{packageLink}</a>
        <p>{packageDescription}</p>
    </div>
</div>

<style>

</style>