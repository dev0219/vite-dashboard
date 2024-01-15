<template>
  <div class="custom-fileupload">
    <input type="file" id="upload-file" hidden @change="handleFileSelect" />
    <label class="btn-up" for="upload-file">BROWSER FILES</label>
  </div>
</template>


<script lang="ts">
import { defineComponent} from 'vue'

export default defineComponent({
  setup(props, { emit }) {
      const handleFileSelect = (event: any) => {
        const input = event.target;
        
        if (input.files.length > 0) {
          const selectedFile = input.files[0];
          emit("files-selected", selectedFile);
        }
      }
      return {handleFileSelect}
  },
})
</script>
