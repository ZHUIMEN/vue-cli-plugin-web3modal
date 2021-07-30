---
extend: '@vue/cli-service/generator/template/src/App.vue'
replace:
  - !!js/regexp /<template>[^]*?<\/template>/
  - !!js/regexp /\n<script>[^]*?<\/script>\n/
---
<%_ if (addExample) { _%>
<%# REPLACE %>
<template>
  <ConnectWallte/>
</template>
<%# END_REPLACE %>


<%# REPLACE %>
<script>
import ConnectWallte from './components/ConnectWallte.vue'
export default {
    components: {
        ConnectWallte,
  },
}
</script>
<%# END_REPLACE %>
<%_ } _%>