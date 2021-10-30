
<script>
  /* eslint-disable-next-line import/no-mutable-exports */
  export let onUploadStarted = null;
  /* eslint-disable-next-line import/no-mutable-exports */
  export let onUploadDone = null;

  let files;
  let valid = false;
  let validation = '';

  const uploadClick = async () => {
    const file = files[0];
    const jsonString = await file.text();

    try {
      validation = JSON.parse(jsonString);
      valid = true;
    } catch (e) {
      valid = false;
      alert('Please select a JSON file');
    }

    if (valid === true) {
      onUploadStarted();
      fetch('http://localhost:8000/files/nodejs', {
        method: 'POST',
        body: jsonString,
        headers: {
          'content-type': 'application/json'
        }
      })
        .then((response) => response.json())
        .then((result) => {
          onUploadDone(result);
        })
        .catch((error) => {
          console.error('Error: ', error);
        });
    }
  };
</script>

<div class="package-upload">
  <input
    type="file"
    id="uploadJson"
    name="uploadJson"
    accept=".json,application/json"
    bind:files
  />

  <button on:click="{uploadClick}">Upload</button>
</div>

<style>
  .package-upload {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
  }

  input, button {
    display: block;
    position: relative;
    width: 300px;
    margin: auto;
    cursor: pointer;
    border: 0;
    height: 60px;
    outline: 0;
  }

  button {
    width: 100px;
  }
  
  input:after, button:after {
    transition: 200ms all ease;
    background-color: #3c5ff4;
    line-height: 60px;
    color: #fff;
    font-size: 1.5em;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    content: "Select package.json";
  }

  button:after {
    content: "Upload"
  }

  input:hover:after, button:hover:after {
    background-color: #4868f7;
  }
</style>
