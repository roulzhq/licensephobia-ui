<script>
    export let content = "";
    let src = "./assets/plus.png";
</script>

<div>
    <div class="Content" id="icon">
        <img {src} alt="">
    </div>
    <div class="Content">
        <p>{content}</p>
    </div>

</div>

<style>
    img {
        width: 14px;
        height: 14px;
    }

    #icon {
        margin-left: 10%;
    }

    .Content {
        display: inline-block;
    }
</style>
