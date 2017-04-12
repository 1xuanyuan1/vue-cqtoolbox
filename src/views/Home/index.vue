<template>
  <div class="container main">
    <cq-section title="按钮">
      <cq-button>中文</cq-button>
      <cq-button class="cq-raised">中文</cq-button>
      <cq-button class="cq-primary">中文</cq-button>
      <cq-button class="cq-primary cq-raised">中文</cq-button>
      <cq-button class="cq-accent cq-raised">中文</cq-button>
      <cq-button class="cq-warn cq-raised">中文</cq-button>
      <br/><br/>

      <cq-button-group class="cq-primary">
        <cq-button class="cq-toggle">中文</cq-button>
        <cq-button>EN</cq-button>
        <cq-button>其他</cq-button>
      </cq-button-group>
      <cq-button-group class="cq-accent" single>
        <cq-button>中文</cq-button>
        <cq-button disabled>EN</cq-button>
        <cq-button class="cq-toggle">其他</cq-button>
      </cq-button-group>
      <cq-button class="cq-icon-button"> + </cq-button>
      <cq-button class="cq-icon-button cq-raised"> + </cq-button>
      <cq-button class="cq-icon-button cq-primary cq-raised"> + </cq-button>
      <cq-button class="cq-icon-button cq-accent cq-raised"> + </cq-button>
      <cq-button class="cq-icon-button cq-warn cq-raised"> + </cq-button>
    </cq-section>

    <cq-section title="图标">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <cq-icon class="cq-primary" cq-iconset="fa fa-home"></cq-icon>
      <cq-icon class="cq-primary" cq-iconset="fa fa-bars"></cq-icon>
      <cq-icon class="cq-primary" cq-iconset="fa fa-users"></cq-icon>
    </cq-section>
  </div>
</template>

<script>
export default {

}
</script>
<style>
.cq-button-group{
  margin: 10px;
}
</style>
