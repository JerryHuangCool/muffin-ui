<template>
  <h2>按钮</h2>
  <MuffButton type="muffin" :disabled="true" >123</MuffButton>
  <MuffButton type="primary" round>123</MuffButton>
  <MuffButton type="primary" round plain>123</MuffButton>
  <MuffButton type="success" >123</MuffButton>
  <MuffButton type="warining" >123</MuffButton>
  <MuffButton type="danger" icon="muffin-icon-jiazai">123</MuffButton>
  <MuffButton type="nuts" circle>123</MuffButton>
  <MuffIcon name="muffin_F"></MuffIcon>
  <!-- group -->
  <muff-button-group>
    <MuffButton type="primary" icon="muffin-icon-jiantouyou">Previous Page</MuffButton>
    <MuffButton type="primary">
      Next Page<muffin-icon class="muffin-icon-jiantouzuo"></muffin-icon>
    </MuffButton>
  </muff-button-group>
</template>


