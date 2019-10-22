<template>
  <span class="zto-page-error">
  1221212dsds
   <code>&lt;Tag/&gt;</code>
   <Badge text="beta" type="warn"/> <Badge text="0.10.1+"/> <Badge text="默认主题"/>
</span>
</template>
<script>
export default {
  name: 'OtherComponent',
  data() {
    return {
      errorMsg: '权限不足，请联系管理员开通！',
      linkMsg: '返回',
      code: 403
    };
  }
};
</script>
<style lang="styl">
.zto-page-error
 color: red
</style>
