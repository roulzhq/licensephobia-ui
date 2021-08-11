<script>

    let files;
    let jsonFile = null;

    const uploadClick = () => {
      
      const formData = new FormData();
      formData.append('jsonFile', files[0]);
      const upload = fetch('url', {
          method: 'POST',
          body: formData
      }).then((response) => response.json()).then((result) => {
          console.log('Success: ', result);
      })
        .catch((error) => {
            console.error('Error: ', error);
        });
    };


</script>

    <input type="file" id="uploadJson" name="uploadJson" accept=".json,application/json" bind:files>

    {#if jsonFile && files[0]}
        <p>{files[0].name}</p>
    {/if}

    <!-- {#if value} -->
        <button on:click={uploadClick}>Submit</button>
    <!-- {:else} -->
        <button on:click={uploadClick} disabled>Submit</button>
    <!-- {/if} -->