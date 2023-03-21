(function () {
  function createWatermark() {
    const angle = -20;
    const txt = 'canvas实现水印';
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 100;

    const ctx = canvas.getContext('2d');
    // 清除默认内容
    ctx.clearRect(0, 0, 200, 100);
    ctx.fillStyle = '#000';
    ctx.font = '16px serif';
    ctx.globalAlpha = 0.2;
    ctx.rotate((Math.PI / 180) * angle);
    // 设置内容需要放到最后，否则会失效
    ctx.fillText(txt, 0, 50);
    return canvas.toDataURL();
  }

  const watermark = document.createElement('div');
  watermark.className = 'watermark';
  watermark.style.backgroundImage = `url(${createWatermark()})`;
  document.body.appendChild(watermark);
})();
