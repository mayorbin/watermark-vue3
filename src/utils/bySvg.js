(function () {
  function crateWatermark() {
    const svgStr = `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100">
      <text 
        x="0"
        y="0"
        dy="50"
        stroke="#000"
        stroke-opacity="0.1"
        font-size="16"
        font-weight="100"
        fill="none"
        text-anchor="start"
        transform="rotate(-20)"
      >
        svg实现水印
      </text>
    </svg>
    `;

    return `data:image/svg+xml;base64,${window.btoa(
      unescape(encodeURIComponent(svgStr))
    )}`;
  }

  const watermark = document.createElement('div');
  watermark.className = 'watermark';
  watermark.style.backgroundImage = `url(${crateWatermark()})`;
  document.body.appendChild(watermark);
})();
