<script>
  /* eslint-disable-next-line import/no-mutable-exports */
  export let onUploadStarted = null;
  /* eslint-disable-next-line import/no-mutable-exports */
  export let onUploadDone = null;
  export let onSearchDone = null;

  let files;
  const valid = false;

  const searchString = '';

  const uploadClick = async () => {
    const file = files[0];

    const ws = new WebSocket('ws://localhost:8080/scan');

    ws.onopen = (e) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);
  
      reader.onload = (e) => {
        const request = {
          packageManager: 'npm',
          data: e.target.result
        };
  
        ws.send(JSON.stringify(request));
      };
    };

    ws.onmessage = (e) => {
      console.log(e);
    };
  };

  const searchClick = async () => {
    fetch('http://localhost:8000/search/npm', {
      method: 'POST',
      body: searchString,
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((result) => {
        onSearchDone(result);
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  };
</script>


<div class="package-search">
  <input type="search" id="searchPkg" name="searchPkg" placeholder="SEARCH PACKAGE" value="{searchString}"/>

  <button on:click ="{searchClick}">SEARCH</button>
</div>

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

  .package-search {
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
