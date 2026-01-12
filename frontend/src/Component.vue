<template>
   <editable-list
      title="TODO"
      list-item-0="First item on the list"
      list-item-1="Second item on the list"
      list-item-2="Third item on the list"
      list-item-3="Fourth item on the list"
      list-item-4="Fifth item on the list"
      listItem="This will not appear"
      add-item-text="Add new list item:"
  />

</template>
<script setup lang="ts">
  import EditableList from 'remote_wc_app/EditableList'
</script>
