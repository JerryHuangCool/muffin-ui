<template>
  <div class="layout">
    <h2>布局</h2>
    <muff-row tag="div" :gutter="20" justify="space-around" >
      <muff-col tag="span" :span="2">
        <div style="background: red;">11</div>
      </muff-col>
      <muff-col tag="span" :span="2" :offset="1">
        <div style="background: blue;">222</div>
      </muff-col>
      <muff-col tag="span" :span="2">
        <div style="background: yellow;">333</div>
      </muff-col>
    </muff-row>
  </div>
</template>  

<style lang="sass">

</style>