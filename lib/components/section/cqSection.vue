<template>
  <div class="cq-section">
    <div class="cq-section-title">
      <span class="cq-tip"></span>
      <h2>{{title}}</h2>
    </div>
    <div class="cq-section-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.cq-section{
  background: white;
  margin-top: 10px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
  .cq-section-title{
    box-shadow: 0 1px 0px #f1f1f1;
    .cq-tip{
      display: inline-block;
      width: 4px;
      height: 18px;
      margin-right: 6px;
      background-color: #00bcd4;
    }
    h2 {
      display: inline-block;
    }
  }
  .cq-section-content{
    padding: 20px;
  }
}
</style>
