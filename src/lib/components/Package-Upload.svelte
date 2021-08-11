<script>
  let files;

  const uploadClick = async () => {
    const file = files[0];
    const jsonString = await file.text();

    fetch('http://localhost:8000/files/nodejs', {
      method: 'POST',
      body: jsonString
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Success: ', result);
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  };
</script>

<div>
  <input
    type="file"
    id="uploadJson"
    name="uploadJson"
    accept=".json,application/json"
    bind:files
  />

  <!-- {#if value} -->
  <button on:click="{uploadClick}">Submit</button>
  <!-- {:else} -->
  <button on:click="{uploadClick}" disabled>Submit</button>
  <!-- {/if} -->
</div>
